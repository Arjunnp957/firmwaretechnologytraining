import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'

export default function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [],
  action,
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white py-14 sm:py-20">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 translate-y-1/3 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home size={13} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-slate-500" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-300 font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-flex items-center rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300 border border-brand-500/30 mb-3">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {action && <div className="shrink-0">{action}</div>}
        </div>
      </div>
    </div>
  )
}

