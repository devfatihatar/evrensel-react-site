const imageModules = import.meta.glob("../assets/images/**/*.{png,jpg,jpeg,webp,svg}", {
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
