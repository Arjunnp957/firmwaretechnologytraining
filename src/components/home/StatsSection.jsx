import { Users, Briefcase, Award, GraduationCap } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '5,000+',
    label: 'Students Trained',
    desc: 'Across front-end, full stack, python, and cloud programs',
  },
  {
    icon: Briefcase,
    number: '95%',
    label: 'Placement Support',
    desc: 'Resume reviews, mock interviews, and recruiter referrals',
  },
  {
    icon: Award,
    number: '50+',
    label: 'Hiring Partners',
    desc: 'Leading tech firms and growing software consultancies',
  },
  {
    icon: GraduationCap,
    number: '10+',
    label: 'Years of Training Excellence',
    desc: 'Guided by seasoned architects & senior software engineers',
  },
]

export default function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-3">
                  <Icon size={24} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm font-semibold text-brand-700">
                  {stat.label}
                </div>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed hidden sm:block">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

