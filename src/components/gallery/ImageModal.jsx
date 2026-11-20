import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ImageModal({ image, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!image) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 max-w-4xl w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-800"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition-colors"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
              <img
                src={image.image}
                alt={image.caption}
                className="max-h-[80vh] w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.svg'
                }}
              />
            </div>

            <div className="p-4 bg-slate-900 border-t border-slate-800 text-white">
              <p className="text-sm font-medium">{image.caption}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

