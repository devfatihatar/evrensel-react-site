import { useEffect, useRef, useState } from "react"
import contactData from "../../data/contactData.json"

const GOOGLE_MAPS_PLACEHOLDER = "YOUR_GOOGLE_MAPS_API_KEY"
const GOOGLE_MAPS_SCRIPT_ID = "google-maps-js-api"
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_PLACEHOLDER
let googleMapsLoaderPromise

const buildingPosition = {
  lat: 36.886812,
  lng: 30.721432,
}

const apartmentFrontView = {
  panoId: "NQ6nqoS-dyXqKbryL4n8qQ",
  position: {
    lat: 36.88671432570286,
    lng: 30.72160013392709,
  },
  heading: 282.8359618072129,
  pitch: 15.515468734385763,
  zoom: 1,
}

const darkMapStyles = [
  { elementType: "geometry", stylers: [{ color: "#1d1518" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#f4d7cf" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1d1518" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#2a1c20" }] },
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#4c2b31" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#211316" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#6e3942" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#111827" }] },
]

function loadGoogleMaps(apiKey) {
  if (window.google?.maps) {
    return Promise.resolve(window.google.maps)
  }

  if (googleMapsLoaderPromise) {
    return googleMapsLoaderPromise
  }

  const existingScript = document.getElementById(GOOGLE_MAPS_SCRIPT_ID)

  googleMapsLoaderPromise = new Promise((resolve, reject) => {
    const resolveWhenReady = () => {
      let attempts = 0
      const checkReady = () => {
        if (window.google?.maps) {
          const script = document.getElementById(GOOGLE_MAPS_SCRIPT_ID)
          if (script) {
            script.dataset.loaded = "true"
          }
          resolve(window.google.maps)
          return
        }

        attempts += 1

        if (attempts > 40) {
          googleMapsLoaderPromise = null
          reject(new Error("Google Maps API did not become ready in time."))
          return
        }

        window.setTimeout(checkReady, 100)
      }

      checkReady()
    }

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolveWhenReady()
        return
      }

      existingScript.addEventListener("load", resolveWhenReady, { once: true })
      existingScript.addEventListener(
        "error",
        (error) => {
          googleMapsLoaderPromise = null
          reject(error)
        },
        { once: true },
      )
      window.setTimeout(resolveWhenReady, 0)
      return
    }

    const script = document.createElement("script")
    script.id = GOOGLE_MAPS_SCRIPT_ID
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&language=tr&region=TR&libraries=geometry`
    script.async = true
    script.defer = true
    script.onload = resolveWhenReady
    script.onerror = (error) => {
      googleMapsLoaderPromise = null
      reject(error)
    }
    document.head.appendChild(script)
  })

  return googleMapsLoaderPromise
}

export default function ContactReachUsPanel() {
  const addressCard = contactData.contactCards.find((card) => card.title === "Adres")
  const address = addressCard?.value ?? ""
  const streetViewRef = useRef(null)
  const satelliteMapRef = useRef(null)
  const wrapperRef = useRef(null)
  const hasInitializedMap = useRef(false)
  const [shouldLoadMap, setShouldLoadMap] = useState(false)
  const [mapLoadFailed, setMapLoadFailed] = useState(false)
  const hasApiKey = GOOGLE_MAPS_API_KEY !== GOOGLE_MAPS_PLACEHOLDER

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (!wrapper || shouldLoadMap) {
      return undefined
    }

    const loadTimer = window.setTimeout(() => {
      setShouldLoadMap(true)
    }, 900)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true)
          observer.disconnect()
        }
      },
      { rootMargin: "240px" },
    )

    observer.observe(wrapper)

    return () => {
      window.clearTimeout(loadTimer)
      observer.disconnect()
    }
  }, [shouldLoadMap])

  useEffect(() => {
    if (!shouldLoadMap || !hasApiKey || !streetViewRef.current || !satelliteMapRef.current || hasInitializedMap.current) {
      return undefined
    }

    let isMounted = true

    loadGoogleMaps(GOOGLE_MAPS_API_KEY)
      .then((maps) => {
        if (!isMounted || !streetViewRef.current || !satelliteMapRef.current) {
          return
        }

        hasInitializedMap.current = true

        const infoWindow = new maps.InfoWindow({
          content: `
            <div class="contact-page__map-info">
              <strong>Evrensel Bilişim</strong>
              <span>${address}</span>
            </div>
          `,
        })

        const openInfoWindow = (marker, targetMap) => {
          marker.addListener("click", () => {
            infoWindow.open({
              anchor: marker,
              map: targetMap,
            })
          })
        }

        const createFallbackMap = (targetPosition) => {
          const map = new maps.Map(satelliteMapRef.current, {
            center: targetPosition,
            zoom: 18,
            tilt: 45,
            heading: 120,
            mapTypeId: maps.MapTypeId.SATELLITE,
            styles: darkMapStyles,
            backgroundColor: "#12090d",
            clickableIcons: false,
            fullscreenControl: true,
            gestureHandling: "greedy",
            mapTypeControl: true,
            mapTypeControlOptions: {
              position: maps.ControlPosition.TOP_RIGHT,
              style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            rotateControl: true,
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
              position: maps.ControlPosition.RIGHT_BOTTOM,
            },
            zoomControl: true,
            zoomControlOptions: {
              position: maps.ControlPosition.RIGHT_BOTTOM,
            },
          })

          const marker = new maps.Marker({
            map,
            position: targetPosition,
            title: "Evrensel Bilişim",
            animation: maps.Animation.DROP,
          })

          openInfoWindow(marker, map)

          map.addListener("tilesloaded", () => {
            map.setTilt(45)
            map.setHeading(120)
          })
        }

        const panorama = new maps.StreetViewPanorama(streetViewRef.current, {
          addressControl: true,
          clickToGo: true,
          controlSize: 30,
          enableCloseButton: false,
          fullscreenControl: true,
          linksControl: true,
          motionTracking: false,
          panControl: true,
          pano: apartmentFrontView.panoId,
          pov: {
            heading: apartmentFrontView.heading,
            pitch: apartmentFrontView.pitch,
          },
          visible: true,
          zoom: apartmentFrontView.zoom,
          zoomControl: true,
        })

        panorama.addListener("status_changed", () => {
          if (panorama.getStatus() !== maps.StreetViewStatus.OK) {
            createFallbackMap(buildingPosition)
          }
        })

        const marker = new maps.Marker({
          map: panorama,
          position: buildingPosition,
          title: "Evrensel Bilişim",
          animation: maps.Animation.DROP,
        })

        openInfoWindow(marker, panorama)

        const satelliteMap = new maps.Map(satelliteMapRef.current, {
          center: buildingPosition,
          zoom: 18,
          tilt: 45,
          heading: 120,
          mapTypeId: maps.MapTypeId.SATELLITE,
          styles: darkMapStyles,
          backgroundColor: "#12090d",
          clickableIcons: false,
          fullscreenControl: true,
          gestureHandling: "greedy",
          mapTypeControl: true,
          mapTypeControlOptions: {
            position: maps.ControlPosition.TOP_RIGHT,
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
          },
          rotateControl: true,
          scaleControl: true,
          streetViewControl: true,
          streetViewControlOptions: {
            position: maps.ControlPosition.RIGHT_BOTTOM,
          },
          zoomControl: true,
          zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_BOTTOM,
          },
        })

        const satelliteMarker = new maps.Marker({
          map: satelliteMap,
          position: buildingPosition,
          title: "Evrensel Bilişim",
          animation: maps.Animation.DROP,
        })

        openInfoWindow(satelliteMarker, satelliteMap)

        satelliteMap.addListener("tilesloaded", () => {
          satelliteMap.setTilt(45)
          satelliteMap.setHeading(120)
        })
      })
      .catch(() => {
        hasInitializedMap.current = false
        if (isMounted) {
          setMapLoadFailed(true)
        }
      })

    return () => {
      isMounted = false
    }
  }, [address, hasApiKey, shouldLoadMap])

  return (
    <div className="contact-page__side contact-page__side--left">
      <div className="contact-page__left-content">
        <div className="contact-page__map-panel">
          <div ref={wrapperRef} className="contact-page__map-canvas-wrap">
            <div className="contact-page__map-stack">
              <section className="contact-page__map-view contact-page__map-view--plain" aria-label={`${address} sokak görünümü`}>
                <div ref={streetViewRef} className="contact-page__map-canvas" />
              </section>
              <section className="contact-page__map-view contact-page__map-view--plain" aria-label={`${address} uydu görünümü`}>
                <div ref={satelliteMapRef} className="contact-page__map-canvas" />
              </section>
            </div>
            {hasApiKey ? (
              <div className="contact-page__map-hint">
                Mouse ile döndürün, oklarla sokakta ilerleyin
              </div>
            ) : null}
            {!hasApiKey || mapLoadFailed ? (
              <div className="contact-page__map-placeholder">
                <strong>{mapLoadFailed ? "Harita yüklenemedi" : "Google Maps API key bekleniyor"}</strong>
                <span>
                  {mapLoadFailed
                    ? "Sayfayı yenileyin veya Google Maps API erişimini kontrol edin."
                    : ".env dosyasına VITE_GOOGLE_MAPS_API_KEY ekleyin."}
                </span>
              </div>
            ) : null}
          </div>
          <div className="contact-page__map-address">
            <span>Adres</span>
            <strong>{address}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
