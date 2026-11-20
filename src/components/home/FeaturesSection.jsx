import {
  Code,
  Laptop,
  Users2,
  BookCheck,
  Clock,
  Briefcase,
} from 'lucide-react'

const features = [
  {
    icon: Code,
    title: '80% Practical Hands-on Learning',
    description:
      'We believe the best way to master tech is by writing code. Every concept is accompanied by extensive lab assignments and coding exercises.',
  },
  {
    icon: Laptop,
    title: 'Industry Capstone Projects',
    description:
      'Graduate with an impressive GitHub portfolio. Build real-world web applications, automation bots, and data dashboards from scratch.',
  },
  {
    icon: Users2,
    title: '1-on-1 Mentorship & Doubt Support',
    description:
      'Never get stuck. Our experienced instructors and lab mentors are available daily to clarify doubts and guide your problem-solving.',
  },
  {
    icon: BookCheck,
    title: 'Modern, Industry-Aligned Curriculum',
    description:
      'Curated in collaboration with tech leads to match exactly what software employers and startups are actively recruiting for today.',
  },
  {
    icon: Clock,
    title: 'Flexible Batch Schedules',
    description:
      'Choose from weekday morning, evening, or intensive weekend batches to comfortably fit around your college or work commitments.',
  },
  {
    icon: Briefcase,
    title: 'Dedicated Placement Guidance',
    description:
      'From resume crafting and LinkedIn optimization to technical mock interviews and recruiter referrals, we support your job search end-to-end.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-brand-100 px-3.5 py-1 text-xs font-semibold text-brand-700">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Real-World Tech Careers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We bridge the gap between academic theory and high-paying IT industry demands through rigorous, project-based training.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

