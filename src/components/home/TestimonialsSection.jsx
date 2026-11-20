import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya M',
    role: 'Frontend Developer at Infosys',
    course: 'Full Stack Web Development',
    initials: 'PM',
    avatarBg: '#4f46e5',
    text: 'Coming from a non-CS background, I was intimidated by coding. The instructors at the institute broke down React and JavaScript so clearly and gave personal attention during lab hours. Within 2 months of graduation, I secured my first developer role!',
  },
  {
    name: 'Rahul K',
    role: 'Python & Automation Engineer',
    course: 'Python Programming',
    initials: 'RK',
    avatarBg: '#059669',
    text: 'The emphasis on practical code rather than boring slides made all the difference. The hands-on project assignments directly helped me clear the technical rounds during campus placement.',
  },
  {
    name: 'Ananya Nair',
    role: 'Data Analyst at Mu Sigma',
    course: 'Data Analytics with SQL & Python',
    initials: 'AN',
    avatarBg: '#7c3aed',
    text: 'Excellent curriculum and real-world datasets! The trainers are industry professionals who shared genuine interview tips and reviewed my portfolio before every submission.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800">
            Student Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear From Our Alumni
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Read how learners from various backgrounds upgraded their skills and transformed their careers.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-white p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative"
            >
              <Quote size={32} className="text-brand-100 absolute top-5 right-5" />

              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <div className="text-xs text-brand-700 font-medium">{t.role}</div>
                  <div className="text-[11px] text-slate-400">Course: {t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

