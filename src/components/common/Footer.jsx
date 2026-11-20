import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
} from 'lucide-react'
import institute from '../../data/institute'
import { getFeaturedCourses } from '../../utils/courseHelpers'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const featuredCourses = getFeaturedCourses(5)

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white">100% Practical Training</h4>
                <p className="text-xs text-slate-400">Hands-on lab sessions & capstone real-world projects</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Recognized Certifications</h4>
                <p className="text-xs text-slate-400">Industry-aligned curriculum with globally valid credentials</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Placement Assistance</h4>
                <p className="text-xs text-slate-400">Mock interviews, resume preparation & hiring partner drives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={institute.logo}
                alt={institute.name}
                className="h-10 w-auto brightness-0 invert opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling
                  if (fallback) fallback.classList.remove('hidden')
                }}
              />
              <span className="hidden font-bold text-lg text-white">
                {institute.name}
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400">
              {institute.tagline}. Empowering students, job seekers, and working professionals with in-demand technical skills and career guidance.
            </p>
            <div className="pt-2 text-xs">
              <span className="inline-block rounded-md bg-brand-900/60 px-2.5 py-1 text-brand-300 border border-brand-700/50">
                Govt. & Industry Aligned Curriculum
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-brand-400" /> Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-brand-400" /> All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-brand-400" /> About Institute
                </Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-brand-400" /> Placements & Careers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-brand-400" /> Campus & Lab Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-brand-400" /> Contact & Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Popular Programs
            </h3>
            <ul className="space-y-2.5 text-xs">
              {featuredCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 line-clamp-1"
                  >
                    <ArrowRight size={12} className="text-brand-400 shrink-0" />
                    <span>{course.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/courses"
                  className="font-semibold text-brand-400 hover:text-brand-300 transition-colors inline-block pt-1"
                >
                  View all courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <span>{institute.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-400 shrink-0" />
                <a href={`tel:${institute.phone}`} className="hover:text-white transition-colors">
                  {institute.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-400 shrink-0" />
                <a href={`mailto:${institute.email}`} className="hover:text-white transition-colors">
                  {institute.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <span>Monday - Saturday: 9:30 AM - 5:30 PM<br />Sunday: Holiday</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-slate-800 py-6 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {institute.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Career Focused Education</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Admissions Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
