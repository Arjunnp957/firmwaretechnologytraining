import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Clock,
  BarChart2,
  CheckCircle,
  FolderGit2,
  Briefcase,
  ChevronDown,
  Layers,
  Phone,
  MessageCircle,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import CourseCard from '../components/courses/CourseCard'
import {
  getCourseBySlug,
  getRelatedCourses,
  getCategoryName,
} from '../utils/courseHelpers'
import { getWhatsAppUrl } from '../utils/whatsapp'
import institute from '../data/institute'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  // Expand all syllabus modules by default or keep first open
  const [openModules, setOpenModules] = useState([0])

  if (!course) {
    return (
      <div className="py-24 text-center px-4">
        <SEO title="Course Not Found" />
        <h1 className="text-3xl font-extrabold text-slate-900">Course Not Found</h1>
        <p className="mt-3 text-slate-600">The requested course could not be found or has been moved.</p>
        <div className="mt-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            <span>Back to all courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  const categoryName = getCategoryName(course.category)
  const relatedCourses = getRelatedCourses(course, 3)

  const toggleModule = (index) => {
    if (openModules.includes(index)) {
      setOpenModules(openModules.filter((i) => i !== index))
    } else {
      setOpenModules([...openModules, index])
    }
  }

  const toggleAllModules = () => {
    if (openModules.length === course.syllabus?.length) {
      setOpenModules([])
    } else {
      setOpenModules(course.syllabus?.map((_, idx) => idx) || [])
    }
  }

  return (
    <div>
      <SEO
        title={`${course.title} Course & Certification`}
        description={course.shortDescription}
        canonicalUrl={`/courses/${course.slug}`}
      />

      {/* Header Banner */}
      <PageHeader
        badge={categoryName}
        title={course.title}
        description={course.shortDescription}
        breadcrumbs={[
          { label: 'Courses', path: '/courses' },
          { label: course.title },
        ]}
      />

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols): Course Details & Syllabus */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Course Overview</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {course.description}
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Duration</div>
                    <div className="text-sm font-bold text-slate-900">{course.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <BarChart2 size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Skill Level</div>
                    <div className="text-sm font-bold text-slate-900 capitalize">{course.level}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Layers size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Format</div>
                    <div className="text-sm font-bold text-slate-900">80% Practical Labs</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies Covered */}
            {course.technologies && course.technologies.length > 0 && (
              <section className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-brand-600" />
                  <span>Technologies & Tools Covered</span>
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {course.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-brand-50 hover:text-brand-700 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors border border-slate-200/80"
                    >
                      <CheckCircle size={14} className="text-brand-600" />
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Syllabus Modules Accordion */}
            {course.syllabus && course.syllabus.length > 0 && (
              <section className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Curriculum & Syllabus</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      {course.syllabus.length} comprehensive hands-on learning modules
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={toggleAllModules}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-800"
                  >
                    {openModules.length === course.syllabus.length
                      ? 'Collapse All'
                      : 'Expand All'}
                  </button>
                </div>

                <div className="space-y-3">
                  {course.syllabus.map((mod, idx) => {
                    const isOpen = openModules.includes(idx)
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleModule(idx)}
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-xs font-extrabold text-brand-700">
                              {idx + 1}
                            </span>
                            <span className="text-base">{mod.moduleTitle}</span>
                          </div>
                          <ChevronDown
                            size={18}
                            className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-brand-600' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {mod.moduleDescription}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Practical Projects */}
            {course.projects && course.projects.length > 0 && (
              <section className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs">
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <FolderGit2 size={20} className="text-brand-600" />
                  <span>Real-World Capstone Projects</span>
                </h2>
                <p className="text-sm text-slate-600 mb-5">
                  Build complete portfolio projects that prove your competence to hiring managers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-slate-50 p-4 border border-slate-200 flex items-start gap-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{project}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Production-grade architecture with real-world deployment
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Career Opportunities */}
            {course.careerOpportunities && course.careerOpportunities.length > 0 && (
              <section className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs">
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Briefcase size={20} className="text-brand-600" />
                  <span>Target Career Opportunities</span>
                </h2>
                <p className="text-sm text-slate-600 mb-5">
                  Job roles and professional profiles this course equips you to target upon graduation:
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {course.careerOpportunities.map((role, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-800 border border-brand-100"
                    >
                      <Award size={14} className="text-brand-600" />
                      {role}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Enrollment & Fact Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Summary Enrollment Card */}
              <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-md">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    Course Snapshot
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{course.title}</h3>
                </div>

                <div className="space-y-3.5 py-4 border-y border-slate-100 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-semibold text-slate-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Skill Level:</span>
                    <span className="font-semibold text-slate-900 capitalize">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Training Modes:</span>
                    <span className="font-semibold text-slate-900">Classroom & Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Hands-on Labs:</span>
                    <span className="font-semibold text-emerald-600">80% Practical</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Placement Support:</span>
                    <span className="font-semibold text-emerald-600">Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Certificate:</span>
                    <span className="font-semibold text-slate-900">Industry Recognized</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={getWhatsAppUrl(
                      `Hello! I want to enquire about the "${course.title}" course. Please share fee structure and batch timings.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href={getWhatsAppUrl(
                      `Hello! I would like to book a free demo session for "${course.title}".`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 bg-emerald-50/50 px-4 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Book Free Demo on WhatsApp</span>
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-500">
                    Have questions about syllabus or batches?
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <a
                      href={`tel:${institute.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800"
                    >
                      <Phone size={13} /> Call Us
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      href={`https://wa.me/${institute.whatsappNumber}?text=${encodeURIComponent(
                        `Hi, I have questions about the ${course.title} course.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      <MessageCircle size={13} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses Section */}
        {relatedCourses.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Related Courses in {categoryName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCourses.map((rel) => (
                <CourseCard key={rel.id} course={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
