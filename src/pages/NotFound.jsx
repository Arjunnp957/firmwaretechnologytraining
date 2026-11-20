import { Link } from 'react-router-dom'
import { Home, BookOpen, Phone, Compass } from 'lucide-react'
import SEO from '../components/common/SEO'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <SEO title="Page Not Found" />

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-50 text-brand-600 mb-6 shadow-xs">
        <Compass size={48} className="animate-spin-slow" />
      </div>

      <span className="rounded-full bg-brand-100 px-3.5 py-1 text-xs font-bold text-brand-700">
        404 Error
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Oops! Page Not Found
      </h1>

      <p className="mt-3 text-base text-slate-600 max-w-md mx-auto">
        The link you clicked may be broken, or the page may have been moved or updated.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
        >
          <Home size={16} />
          <span>Go to Homepage</span>
        </Link>

        <Link
          to="/courses"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <BookOpen size={16} />
          <span>Browse Courses</span>
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <Phone size={16} />
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  )
}

