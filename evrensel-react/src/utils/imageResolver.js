const imageModules = import.meta.glob([
  "../assets/images/icons/evrensel-logo.png",
  "../assets/images/social-media-icon/wpicon.png",
  "../assets/images/social-media-icon/instagram-optimized.png",
  "../assets/images/social-media-icon/google.png",
  "../assets/images/social-media-icon/facebook.png",
  "../assets/images/homepage.jpg",
  "../assets/images/sliders/homepagewebicon.png",
  "../assets/images/sliders/homepagesocialicon-optimized.png",
  "../assets/images/sliders/homepageseoicon.png",
  "../assets/images/sliders/slider1.webp",
  "../assets/images/sliders/slider1.jpg",
  "../assets/images/sliders/slider2.png",
  "../assets/images/sliders/slider3.jpg",
  "../assets/images/web-design/devices.png",
  "../assets/images/web-design/lighthouse-optimized.jpg",
  "../assets/images/web-design/seo.png",
  "../assets/images/web-design/web-architecture-optimized.jpg",
  "../assets/images/web-design/webslidermain-optimized-sm.jpg",
  "../assets/images/social-media-site/mainimagesm-optimized-sm.jpg",
  "../assets/images/brands/modelin.jpg",
  "../assets/images/brands/storpark.jpg",
  "../assets/images/brands/sensespa.jpg",
  "../assets/images/brands/saresuites.jpg",
  "../assets/images/brands/xdream.jpg",
  "../assets/images/referances/talyantis.jpg",
  "../assets/images/referances/rotlog.jpg",
  "../assets/images/referances/renova.jpg",
  "../assets/images/referances/ref_yatsan.webp",
  "../assets/images/yardımdesteklogo/alpemix.png",
  "../assets/images/yardımdesteklogo/anydesk.png",
  "../assets/images/yardımdesteklogo/indir.png",
  "../assets/images/yardımdesteklogo/netscan.png",
  "../assets/images/yardımdesteklogo/winrar.png",
], {
  eager: true,
  import: "default",
})

export function resolveImage(imagePath) {
  if (!imagePath) return null
  return imageModules[`../assets/images/${imagePath}`] ?? null
}

export function resolveImageList(imagePaths = []) {
  return imagePaths.map(resolveImage).filter(Boolean)
}
