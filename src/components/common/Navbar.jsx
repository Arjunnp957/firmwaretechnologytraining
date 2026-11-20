import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Mail, Clock, Menu, X, ArrowRight, MessageCircle } from 'lucide-react'
import institute from '../../data/institute'
import { getWhatsAppUrl } from '../../utils/whatsapp'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'About Us', path: '/about' },
  { name: 'Placements', path: '/placements' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const generalWhatsAppUrl = getWhatsAppUrl(
    `Hello ${institute.name}, I would like to inquire about course admissions and upcoming batches.`
  )

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Notification & Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Announcement */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="inline-flex items-center rounded-full bg-brand-500/20 px-2 py-0.5 text-[11px] font-semibold text-brand-300">
              New Batches
            </span>
            <span>Admissions open for upcoming IT certification batches. Limited seats!</span>
          </div>

          {/* Quick Contact Info */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={`tel:${institute.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-brand-400" />
              <span>{institute.phone}</span>
            </a>
            <a
              href={`mailto:${institute.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-brand-400" />
              <span>{institute.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-brand-400" />
              <span>Mon - Sat: 09:30 AM - 05:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Institute Name */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus-visible:outline-none"
          >
            <img
              src={institute.logo}
              alt={institute.name}
              className="h-11 w-auto max-w-[160px] sm:max-w-[200px] object-contain transition-transform group-hover:scale-102"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling
                if (fallback) fallback.classList.remove('hidden')
              }}
            />
            {/* Text Fallback */}
            <div className="hidden flex-col">
              <span className="font-bold text-lg text-slate-900 leading-tight">
                {institute.name}
              </span>
              <span className="text-xs text-brand-600 font-medium tracking-wide">
                {institute.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700 bg-brand-50 font-semibold'
                      : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Direct WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 hover:shadow-md transition-all active:scale-98"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white flex items-center gap-1"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="space-y-2 text-xs text-slate-500 pt-2">
              <a
                href={`tel:${institute.phone}`}
                className="flex items-center gap-2 text-slate-700 hover:text-brand-600"
              >
                <Phone size={14} className="text-brand-600" />
                <span>{institute.phone}</span>
              </a>
              <a
                href={`mailto:${institute.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-brand-600"
              >
                <Mail size={14} className="text-brand-600" />
                <span>{institute.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
