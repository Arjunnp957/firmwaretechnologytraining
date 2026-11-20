import {
  FileText,
  Code2,
  Users2,
  CalendarCheck,
  Building2,
  Handshake,
  CheckCircle2,
  Briefcase,
  MessageCircle,
} from 'lucide-react'
import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import CTASection from '../components/home/CTASection'
import { getActivePartners, getPublishedAchievements } from '../utils/placementHelpers'
import { getWhatsAppUrl } from '../utils/whatsapp'

const steps = [
  {
    icon: FileText,
    step: 'Phase 1',
    title: 'ATS Resume & GitHub Portfolio',
    description:
      'We help you craft an industry-standard technical resume, optimize your LinkedIn profile, and present deployable code projects on GitHub.',
  },
  {
    icon: Code2,
    step: 'Phase 2',
    title: 'Technical Screening & Mock Coding',
    description:
      'Practice data structures, algorithmic challenges, and live whiteboard coding rounds mirroring actual corporate interview patterns.',
  },
  {
    icon: Users2,
    step: 'Phase 3',
    title: 'HR & Behavioral Interview Prep',
    description:
      'Master effective communication, scenario-based questioning, salary negotiation strategies, and cultural fit assessments.',
  },
  {
    icon: CalendarCheck,
    step: 'Phase 4',
    title: 'Recruitment Drives & Referral Connects',
    description:
      'Get direct interviews lined up through our dedicated corporate partner network and internal alumni referrals.',
  },
]

export default function Placements() {
  const partners = getActivePartners()
  const achievements = getPublishedAchievements()

  return (
    <div>
      <SEO
        title="Placements & Career Support"
        description="Comprehensive placement assistance for tech students: resume reviews, technical mock interviews, and hiring partner connections."
        canonicalUrl="/placements"
      />

      <PageHeader
        badge="Career Services"
        title="100% Placement Support & Industry Connects"
        description="We don't just teach code; we mentor you until you secure your dream software engineering and IT position."
        breadcrumbs={[{ label: 'Placements' }]}
      />

      {/* Placement Preparation Roadmap */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            Placement Process
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Our Placement Cell Prepares You
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A battle-tested 4-stage career assistance framework to ensure every student walks into job interviews fully prepared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <CheckCircle2 size={14} /> Guided by Placement Mentors
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Hiring Partners Section */}
      {partners.length > 0 && (
        <div className="bg-slate-50 py-16 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                Our Network
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
                Hiring Partners & Recruiters
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Companies where our certified students and alumni find lucrative technical roles.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {partners.map((partner) => {
                const hasRealLogo = partner.logo && partner.logo !== '/images/placeholder.svg'
                const content = (
                  <div className="flex h-24 w-full flex-col items-center justify-center rounded-2xl bg-white border border-slate-200 p-4 shadow-xs hover:border-brand-300 hover:shadow-md transition-all text-center group">
                    {hasRealLogo ? (
                      <img
                        src={partner.logo}
                        alt={`${partner.companyName} logo`}
                        className="max-h-12 max-w-[120px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.nextElementSibling
                          if (fallback) fallback.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <div className={`flex flex-col items-center ${hasRealLogo ? 'hidden' : ''}`}>
                      <Building2 size={24} className="text-brand-500 mb-1" />
                      <span className="text-xs font-bold text-slate-800 line-clamp-1">
                        {partner.companyName.replace(' (placeholder)', '')}
                      </span>
                    </div>
                  </div>
                )

                if (partner.website) {
                  return (
                    <a
                      key={partner.id}
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={partner.companyName}
                      className="block focus:outline-none"
                    >
                      {content}
                    </a>
                  )
                }

                return <div key={partner.id}>{content}</div>
              })}
            </div>
          </div>
        </div>
      )}

      {/* Student Placement Highlights (if published) */}
      {achievements.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Recent Placements
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              Student Career Transformations
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Celebrating our students who transitioned into professional developer and analyst positions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => {
              const hasRealImage = item.image && item.image !== '/images/placeholder.svg'
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <div className="relative h-16 w-16 shrink-0">
                    {hasRealImage ? (
                      <img
                        src={item.image}
                        alt={item.studentName || 'Placed student'}
                        className="h-16 w-16 rounded-full object-cover border-2 border-brand-500 shadow-sm"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.nextElementSibling
                          if (fallback) fallback.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold ${
                        hasRealImage ? 'hidden' : ''
                      }`}
                    >
                      <Briefcase size={26} />
                    </div>
                  </div>

                  <div>
                    {item.studentName ? (
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                        {item.studentName}
                      </h4>
                    ) : (
                      <h4 className="text-base font-bold text-slate-900">Alumni Placement</h4>
                    )}
                    <div className="text-xs font-semibold text-brand-600 mt-0.5">{item.jobRole}</div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                      <span className="font-medium text-slate-700">{item.companyName}</span>
                      <span>•</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* For Employers / Corporate Partnership Box */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
              <Handshake size={14} /> Corporate Hiring
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Are You an Employer Looking to Hire Skilled Tech Talent?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We train students in full-stack engineering, Python, data analytics, and cloud platforms with rigorous hands-on testing. Partner with our placement cell for zero-cost campus hiring drives and immediate job-ready candidates.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(
              'Hello! I represent an organization and would like to discuss campus hiring and hiring partnerships with your institute.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle size={18} />
            <span>Connect on WhatsApp to Hire</span>
          </a>
        </div>
      </div>

      <CTASection />
    </div>
  )
}
