import { MessageCircle } from 'lucide-react'
import institute from '../../data/institute'

export default function WhatsAppButton() {
  if (!institute.whatsappNumber) return null

  const message = encodeURIComponent(
    `Hello ${institute.name}, I would like to inquire about courses and batch admissions.`
  )
  const whatsappUrl = `https://wa.me/${institute.whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Admissions Counselor on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:scale-105 focus-visible:outline-emerald-600 group"
    >
      <MessageCircle size={22} className="shrink-0 transition-transform group-hover:rotate-12" aria-hidden="true" />
      <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-200"></span>
      </span>
    </a>
  )
}

