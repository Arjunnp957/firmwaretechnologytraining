import {
  Target,
  Compass,
  Cpu,
  Monitor,
  Wifi,
  Users,
  Award,
} from 'lucide-react'
import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import CTASection from '../components/home/CTASection'
import institute from '../data/institute'
import trainers from '../data/trainers'
import { getActiveSorted } from '../utils/dataHelpers'

export default function About() {
  const activeTrainers = getActiveSorted(trainers)

  return (
    <div>
      <SEO
        title="About Us | Dedicated IT Training Institute"
        description="Learn about our mission, experienced faculty, modern lab facilities, and commitment to practical technology education."
        canonicalUrl="/about"
      />

      <PageHeader
        badge="Our Story & Mission"
        title={`About ${institute.name}`}
        description="Dedicated to empowering students, job seekers, and career changers with high-impact, practical software engineering and IT competencies."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Overview & Mission/Vision */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bridging the Gap Between Education and the Software Industry
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {institute.about}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded by passionate technology educators and senior software professionals, {institute.name} was established with a singular objective: to eliminate the disconnect between college textbooks and practical software engineering demands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="rounded-2xl bg-brand-50/60 p-5 border border-brand-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white mb-3">
                  <Target size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Our Vision</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {institute.vision}
                </p>
              </div>

              <div className="rounded-2xl bg-accent-50/60 p-5 border border-accent-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600 text-white mb-3">
                  <Compass size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Our Mission</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {institute.mission}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-brand-600 to-accent-600 p-1 shadow-xl">
              <div className="rounded-[22px] bg-slate-900 p-8 text-white space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="text-brand-400" />
                  <span>The Training Philosophy</span>
                </h3>
                <ul className="space-y-4 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/30 text-brand-300 font-bold">1</span>
                    <span><strong className="text-white">80% Labs, 20% Theory:</strong> Daily code challenges ensure concepts turn immediately into muscle memory.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/30 text-brand-300 font-bold">2</span>
                    <span><strong className="text-white">Active Mentorship:</strong> Senior software practitioners review your code and guide your architecture.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/30 text-brand-300 font-bold">3</span>
                    <span><strong className="text-white">Portfolio-First:</strong> Every student graduates with 2-4 production deployments on GitHub and live URLs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/30 text-brand-300 font-bold">4</span>
                    <span><strong className="text-white">Career Acceleration:</strong> Continuous resume optimization, algorithmic mock tests, and interview drill sessions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities / Infrastructure Section */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Infrastructure
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              State-of-the-Art Training Facilities
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Modern environments built to mirror real-world software development agencies and tech workspaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Monitor size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Modern Computer Labs</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Dedicated high-performance workstations pre-configured with industry developer tooling and SDKs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Wifi size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Gigabit Fiber Internet</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                High-speed uninterrupted network connection for continuous cloud deployments, cloning, and remote labs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Cpu size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Project Incubation Zone</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Collaborative open pods for group project discussions, pair programming, and peer code reviews.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Users size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">1-on-1 Mentorship Desks</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Personalized doubt clearing and career advisory cubicles to address individual student pace and goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trainers / Faculty Section */}
      {activeTrainers.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Faculty & Mentors
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              Learn from Industry Experts
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Our instructors bring years of real engineering and architecture experience straight into the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTrainers.map((trainer) => (
              <div
                key={trainer.id}
                className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="aspect-4/3 w-full bg-slate-100 relative">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg'
                    }}
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-lg bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 text-xs font-semibold text-white">
                      {trainer.experience} Experience
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {trainer.name.replace(' (placeholder)', '')}
                      </h3>
                      <p className="text-xs text-brand-600 font-semibold">{trainer.designation}</p>
                    </div>

                    {trainer.linkedinUrl && (
                      <a
                        href={trainer.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-brand-600 transition-colors p-1"
                        aria-label={`${trainer.name} LinkedIn Profile`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  {trainer.expertise && trainer.expertise.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {trainer.expertise.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <CTASection />
    </div>
  )
}
