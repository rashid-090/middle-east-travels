import { CustomValidator } from 'sanity'

/**
 * Validates that an uploaded image asset is within the specified size limit (in MB).
 * Default max size is 2MB.
 */
export const validateMaxImageSize = (maxMb = 2): CustomValidator => {
  return async (value, context) => {
    const assetRef = (value as any)?.asset?._ref
    if (!assetRef) {
      return true
    }

    try {
      const client = context.getClient({ apiVersion: '2023-01-01' })
      const asset = await client.fetch(`*[_id == $id][0]{ size }`, { id: assetRef })
      const maxBytes = maxMb * 1024 * 1024

      if (asset?.size && asset.size > maxBytes) {
        const sizeMb = (asset.size / (1024 * 1024)).toFixed(2)
        return `Image size must be ${maxMb}MB or below (current size: ${sizeMb}MB). Please upload a smaller image.`
      }
    } catch (err) {
      console.error('Failed to validate image size:', err)
    }

    return true
  }
}
