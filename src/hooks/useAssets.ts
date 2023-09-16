// @ts-nocheck

// Matches any file within the assets directory (and its subdirectories) regardless of its extension
const images: Record<string, any> = {}
const assetsContext = require.context('../assets', true, /\.(svg|png|jpg|jpeg|gif)$/)

assetsContext.keys().forEach((key) => {
  // Extract the directory, asset name, and its extension from the key
  const match = key.match(/\.\/([^/]+)\/(.*)(\..+)$/)
  const directory = match[1]
  const assetName = match[2]

  if (!images[directory]) {
    images[directory] = {}
  }

  images[directory][assetName] = assetsContext(key)
})

export default images
