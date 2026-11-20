import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Building2, Eye } from 'lucide-react'
import SEO from '../components/common/SEO'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import LearningPathSection from '../components/home/LearningPathSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import FAQSection from '../components/home/FAQSection'
import CTASection from '../components/home/CTASection'
import CourseCard from '../components/courses/CourseCard'
import ImageModal from '../components/gallery/ImageModal'
import { getFeaturedCourses } from '../utils/courseHelpers'
import { getActivePartners } from '../utils/placementHelpers'
import gallery from '../data/gallery'
import { getActiveSorted } from '../utils/dataHelpers'

export default function Home() {
  const featuredCourses = getFeaturedCourses(6)
  const partners = getActivePartners()
  const galleryItems = getActiveSorted(gallery).slice(0, 4)

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
      <SEO
        title="Best IT Training & Certification Institute"
        description="Launch your IT career with practical, job-oriented training in Full Stack Development, Python, Data Analytics, Cloud, and Cyber Security. 100% placement support."
      />

      {/* 1. Hero Banner */}
      <HeroSection />

      {/* 2. Key Achievements / Stats */}
      <StatsSection />

      {/* 3. Featured Courses Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                <Sparkles size={13} /> Trending Programs
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Certification Courses
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Explore our most in-demand, job-ready programs designed to build high-impact technical skills.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700 transition-colors shrink-0"
            >
              <span>Explore all courses</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              <span>View All 10+ Courses</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Core Pillars / Features */}
      <FeaturesSection />

      {/* 5. 4-Step Learning Pathway */}
      <LearningPathSection />

      {/* 6. Hiring Partners Banner */}
      {partners.length > 0 && (
        <section className="py-14 bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Our Students Work With Leading Companies
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {partners.map((partner) => {
                const hasRealLogo = partner.logo && partner.logo !== '/images/placeholder.svg'
                const content = (
                  <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white border border-slate-200 p-3 shadow-xs transition-all duration-200 hover:border-brand-300 hover:shadow-md group">
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
                    <div className={`flex items-center gap-1.5 text-slate-700 font-semibold text-xs text-center ${hasRealLogo ? 'hidden' : ''}`}>
                      <Building2 size={16} className="text-brand-500 shrink-0" />
                      <span>{partner.companyName.replace(' (placeholder)', '')}</span>
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

            <div className="mt-8 text-center">
              <Link
                to="/placements"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
              >
                <span>Learn about our placement assistance program</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 7. Campus & Practical Labs Preview */}
      {galleryItems.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  Campus & Training Environment
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  High-Tech Labs & Interactive Classrooms
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  Experience a collaborative atmosphere built specifically for focused coding and technical learning.
                </p>
              </div>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700 transition-colors shrink-0"
              >
                <span>View full gallery</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-200 cursor-pointer shadow-xs hover:shadow-lg transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <p className="text-xs font-medium line-clamp-1">{item.caption}</p>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-brand-300">
                      <Eye size={12} /> Click to view
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Student Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Call to Action Banner */}
      <CTASection />

      {/* Lightbox Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  )
}

