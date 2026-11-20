import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    step: '01',
    title: 'Consultation & Roadmap',
    description:
      'Meet with our academic advisor to assess your goals, choose the right tech stack, and finalize your learning roadmap.',
  },
  {
    step: '02',
    title: 'Hands-on Lab Training',
    description:
      'Learn core concepts through live interactive sessions and daily coding assignments in state-of-the-art computer labs.',
  },
  {
    step: '03',
    title: 'Real-World Capstone Projects',
    description:
      'Build end-to-end applications solving real business problems under the direct supervision of senior software engineers.',
  },
  {
    step: '04',
    title: 'Mock Interviews & Placement',
    description:
      'Refine your resume, conquer data structures & algorithmic mock interviews, and connect directly with hiring companies.',
  },
]

export default function LearningPathSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-accent-100 px-3.5 py-1 text-xs font-semibold text-accent-700">
            Proven Methodology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your 4-Step Career Pathway
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A structured, result-driven training path crafted to transform beginners into confident, job-ready technology professionals.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-brand-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
          >
            <span>Explore All Training Courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

