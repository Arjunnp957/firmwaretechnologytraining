import { Phone, MessageCircle } from 'lucide-react'
import institute from '../../data/institute'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export default function CTASection() {
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${institute.name}! I would like to inquire about course admissions, fees, and batch timings.`
  )

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-accent-600 py-16 sm:py-20 text-white">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-accent-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-white/20 backdrop-blur-xs px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Begin Your Journey
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Ready to Accelerate Your Career in Tech?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-brand-100 max-w-2xl mx-auto">
          Get in touch with our tech experts directly on WhatsApp, get your course syllabus, and book a free demo session.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-emerald-700 transition-all hover:scale-102"
          >
            <MessageCircle size={20} />
            <span>Connect on WhatsApp</span>
          </a>

          <a
            href={`tel:${institute.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-white/10 px-6 py-3.5 text-base font-bold text-white hover:bg-white/20 transition-colors"
          >
            <Phone size={18} />
            <span>Call: {institute.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
