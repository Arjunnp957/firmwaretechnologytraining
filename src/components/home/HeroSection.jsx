import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
  MessageCircle,
} from 'lucide-react'
import banners from '../../data/banners'
import institute from '../../data/institute'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export default function HeroSection() {
  const hero = banners.hero

  const demoWhatsAppUrl = getWhatsAppUrl(
    `Hello ${institute.name}! I would like to book a free demo session for IT certification courses.`
  )

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative gradient blur orbs */}
      <div className="absolute top-0 -left-20 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl pointer-events-none" />

      {/* Hero photo: right side, fades into the page background (desktop only for now) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[65%] lg:block">
        <img
          src="/images/hero-student.webp"
          alt="Student learning on a laptop"
          className="h-full w-full object-cover object-right"
        />
        {/* Left fade (short, so the photo stays clear) */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-brand-50 via-white/40 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Admissions Banner Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 border border-brand-200 px-3.5 py-1.5 text-xs font-semibold text-brand-800">
              <Sparkles size={14} className="text-brand-600 animate-pulse" />
              <span>Admissions Open for 2026 Batches</span>
              <span className="hidden sm:inline text-brand-400">•</span>
              <span className="hidden sm:inline text-brand-700">Online & Classroom</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              {hero.title.split('Technology')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-600">
                Technology
              </span>
              {hero.title.split('Technology')[1] || ''}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {hero.subtitle} Master in-demand programming, web development, data, and cloud stacks with 80% practical labs and assured placement assistance.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-600 shrink-0" />
                <span className="font-medium">100% Practical Lab Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-600 shrink-0" />
                <span className="font-medium">Dedicated Placement Cell</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-600 shrink-0" />
                <span className="font-medium">Industry Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-600 shrink-0" />
                <span className="font-medium">Recognized Certifications</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={hero.buttonUrl || '/courses'}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-brand-700 hover:shadow-lg transition-all active:scale-98"
              >
                <span>{hero.buttonText || 'Explore Courses'}</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href={demoWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 bg-emerald-50/50 px-6 py-3.5 text-base font-bold text-emerald-800 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
              >
                <MessageCircle size={19} />
                <span>Book Demo on WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Snippet */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#4f46e5', '#7c3aed', '#059669', '#d97706'].map((bg, idx) => (
                  <div
                    key={idx}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-xs"
                    style={{ backgroundColor: bg }}
                  >
                    {['AK', 'PS', 'RG', 'NV'][idx]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-slate-800">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-slate-500">Rated by 1,200+ trained students & alumni</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}