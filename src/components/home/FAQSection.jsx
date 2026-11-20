import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Are your courses suitable for complete beginners with no coding background?',
    answer:
      'Yes, absolutely! Most of our foundational courses (such as Full Stack Web Development, Python Programming, and Networking Fundamentals) start from scratch without assuming prior programming knowledge. Our instructors guide you step-by-step from core basics to advanced practical applications.',
  },
  {
    question: 'What are the training modes available? Can I learn online?',
    answer:
      'We offer both in-person classroom training with state-of-the-art computer labs, and interactive live online batches. You can also opt for hybrid learning or weekend batches tailored for working professionals and university students.',
  },
  {
    question: 'How does the placement assistance process work?',
    answer:
      'Our dedicated placement cell assists you with resume crafting, LinkedIn profile optimization, GitHub portfolio reviews, and intensive technical & HR mock interviews. We also arrange direct recruitment interviews with our partner companies and corporate hiring networks.',
  },
  {
    question: 'Can I attend a free demo class before enrolling?',
    answer:
      'Yes! We encourage every prospective student to attend a free 1-on-1 demo or classroom observation session to experience our teaching methodology, inspect our lab facilities, and interact with the faculty.',
  },
  {
    question: 'What kind of certificate will I receive upon completing a program?',
    answer:
      'Upon successful completion of the course syllabus and your capstone project evaluation, you will receive an official Course Completion Certificate with a verifiable credential ID that you can display on your resume and LinkedIn profile.',
  },
  {
    question: 'Do you offer installment options for course fees?',
    answer:
      'Yes, we provide flexible, interest-free installment payment plans to ensure quality technical education remains accessible to all aspiring students. Speak with our admissions counselor during your visit to select a plan that fits you best.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-100 px-3.5 py-1 text-xs font-semibold text-brand-700">
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about our courses, admissions, and placement assistance.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-base font-bold text-slate-900 hover:text-brand-600 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

