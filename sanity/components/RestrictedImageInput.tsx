import React, { useEffect, useRef } from 'react'
import { ObjectInputProps } from 'sanity'
import { useToast } from '@sanity/ui/toast'

const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024 // 2MB

export function RestrictedImageInput(props: ObjectInputProps | any) {
  const toast = useToast()
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const checkAndBlock = (files: FileList | File[] | null | undefined): boolean => {
      if (!files || files.length === 0) return true
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file && file.size > MAX_IMAGE_SIZE_BYTES) {
          const sizeMb = (file.size / (1024 * 1024)).toFixed(2)
          toast.push({
            status: 'error',
            title: 'Image Upload Blocked',
            description: `"${file.name}" is ${sizeMb}MB. Maximum allowed size is 2MB. Please compress or select a smaller image.`,
            duration: 7000,
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

    // Capture phase (useCapture: true) intercepts file selection before Sanity uploads to the CDN
    el.addEventListener('drop', handleDrop, true)
    el.addEventListener('change', handleChange, true)
    el.addEventListener('paste', handlePaste, true)

    return () => {
      el.removeEventListener('drop', handleDrop, true)
      el.removeEventListener('change', handleChange, true)
      el.removeEventListener('paste', handlePaste, true)
    }
  }, [toast])

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      {props.renderDefault(props)}
      <div style={{ marginTop: '4px', fontSize: '11px', color: '#888', fontWeight: 500 }}>
        ⚡ Max image upload limit: 2MB (larger files will be blocked before upload)
      </div>
    </div>
  )
}
