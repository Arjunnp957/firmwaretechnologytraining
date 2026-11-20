import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import institute from '../data/institute'
import { getActiveCourses } from '../utils/courseHelpers'
import { getWhatsAppUrl } from '../utils/whatsapp'

export default function Contact() {
  const courses = getActiveCourses()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courses[0]?.title || '',
    mode: 'Classroom',
    timing: 'Morning (8:00 AM - 11:00 AM)',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()

    const textLines = [
      `*Admission Enquiry for ${institute.name}*`,
      `• *Name*: ${formData.name}`,
      `• *Phone*: ${formData.phone}`,
      formData.email ? `• *Email*: ${formData.email}` : null,
      `• *Course*: ${formData.course}`,
      `• *Training Mode*: ${formData.mode}`,
      `• *Batch Timing*: ${formData.timing}`,
      formData.message ? `• *Note/Query*: ${formData.message}` : null,
    ].filter(Boolean)

    const whatsappUrl = getWhatsAppUrl(textLines.join('\n'))
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: courses[0]?.title || '',
      mode: 'Classroom',
      timing: 'Morning (8:00 AM - 11:00 AM)',
      message: '',
    })
  }

  const directChatUrl = getWhatsAppUrl(
    `Hello ${institute.name}! I would like to chat directly with an admissions advisor regarding courses and batch timings.`
  )

  return (
    <div>
      <SEO
        title="Contact & Admissions Office"
        description="Visit our IT training center or contact our admissions counselors directly on WhatsApp. Phone, email, office hours, and instant course enquiry."
        canonicalUrl="/contact"
      />

      <PageHeader
        badge="Connect With Us"
        title="Contact Our Admissions Team"
        description="Have questions about courses, syllabus, batch timings, or fee structure? Our friendly counselors communicate directly on WhatsApp."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (5 cols): Contact Information & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                Visit or Chat
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Direct WhatsApp Communication
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Connect with our academic advisors on WhatsApp for instant replies, course syllabus PDFs, and demo class bookings.
              </p>
            </div>

            {/* Direct WhatsApp Hero Banner */}
            <div className="rounded-2xl bg-emerald-600 text-white p-6 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-emerald-100 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} /> Official Support Channel
              </div>
              <h3 className="text-xl font-bold">Fastest Response on WhatsApp</h3>
              <p className="text-xs text-emerald-50 leading-relaxed">
                Skip waiting for email replies. Chat 1-on-1 with our admissions desk to ask questions about fees, batch timings, and placement drives.
              </p>
              <div className="pt-2">
                <a
                  href={directChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-900 shadow-sm hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle size={18} className="text-emerald-600" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Institute Address</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{institute.address}</p>
                  <a
                    href={institute.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-800"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Phone & Helpline</h3>
                  <div className="mt-1 space-y-0.5 text-xs">
                    <div>
                      <a href={`tel:${institute.phone}`} className="text-slate-600 hover:text-brand-600 font-medium">
                        Primary: {institute.phone}
                      </a>
                    </div>
                    {institute.alternatePhone && (
                      <div>
                        <a href={`tel:${institute.alternatePhone}`} className="text-slate-600 hover:text-brand-600 font-medium">
                          Alt: {institute.alternatePhone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Email Address</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    <a href={`mailto:${institute.email}`} className="hover:text-brand-600 font-medium">
                      {institute.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Counseling & Office Hours</h3>
                  <div className="mt-1 space-y-0.5 text-xs text-slate-600">
                    <div>Monday – Saturday: 9:30 AM – 5:30 PM</div>
                    <div>Sunday: Holiday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): WhatsApp Admission Enquiry Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-lg">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  <MessageCircle size={13} /> Instant WhatsApp Connect
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Send an Enquiry via WhatsApp</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Fill in your preferred course and batch options below. Clicking submit will automatically open WhatsApp with your details pre-formatted.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Opening WhatsApp...</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your enquiry details have been prepared for WhatsApp chat. If WhatsApp did not open automatically, click the button below:
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(
                        `*Admission Enquiry for ${institute.name}*\n• *Name*: ${formData.name}\n• *Course*: ${formData.course}\n• *Phone*: ${formData.phone}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700"
                    >
                      <MessageCircle size={18} />
                      <span>Continue to WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      New Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        WhatsApp Number / Phone *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-course" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Course Interested In *
                      </label>
                      <select
                        id="contact-course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 bg-white focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                      >
                        {courses.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-mode" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Preferred Training Mode
                      </label>
                      <select
                        id="contact-mode"
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 bg-white focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                      >
                        <option value="">Select a mode</option>
                        <option value="Classroom">Classroom (In-Person Labs)</option>
                        <option value="Live Online">Live Online (Instructor Led)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-timing" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Preferred Batch Timing
                    </label>
                    <select
                      id="contact-timing"
                      name="timing"
                      value={formData.timing}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 bg-white focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                    >
                      <option value="">Select a timing</option>
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Questions / Notes (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Can I attend a demo class? Are batch timings flexible?"
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle size={20} />
                      <span>Send Enquiry via WhatsApp</span>
                      <ArrowRight size={16} />
                    </button>
                    <p className="mt-2 text-center text-xs text-slate-400">
                      ⚡ Opens directly in WhatsApp web or mobile app.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
