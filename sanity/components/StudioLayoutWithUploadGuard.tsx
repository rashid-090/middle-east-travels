import React, { useEffect } from 'react'
import { LayoutProps } from 'sanity'
import { useToast } from '@sanity/ui/toast'

const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024 // 2MB

export function StudioLayoutWithUploadGuard(props: LayoutProps) {
  const toast = useToast()

  useEffect(() => {
    const checkAndBlock = (files: FileList | File[] | null | undefined): boolean => {
      if (!files || files.length === 0) return true
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (
          file &&
          (file.type.startsWith('image/') ||
            /\.(jpe?g|png|webp|gif|svg|avif|heic|bmp|tiff)$/i.test(file.name)) &&
          file.size > MAX_IMAGE_SIZE_BYTES
        ) {
          const sizeMb = (file.size / (1024 * 1024)).toFixed(2)
          toast.push({
            status: 'error',
            title: 'Image Upload Blocked',
            description: `"${file.name}" is ${sizeMb}MB. Maximum allowed upload size is 2MB. Please compress or select a smaller image.`,
            duration: 8000,
          })
          return false
        }
      }
      return true
    }

    const handleDrop = (e: DragEvent) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        if (!checkAndBlock(e.dataTransfer.files)) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
        }
      }
    }

    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement | null
      if (target && target.type === 'file' && target.files && target.files.length > 0) {
        if (!checkAndBlock(target.files)) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          target.value = ''
        }
      }
    }

    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
        if (!checkAndBlock(e.clipboardData.files)) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
        }
      }
    }

    // Capture phase listeners (true) intercept all upload events before any Sanity handler processes them
    window.addEventListener('drop', handleDrop, true)
    window.addEventListener('change', handleChange, true)
    window.addEventListener('paste', handlePaste, true)

    return () => {
      window.removeEventListener('drop', handleDrop, true)
      window.removeEventListener('change', handleChange, true)
      window.removeEventListener('paste', handlePaste, true)
    }
  }, [toast])

  return props.renderDefault(props)
}
