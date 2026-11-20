import { Link } from 'react-router-dom'
import { Clock, BarChart2, FolderGit2, ArrowRight, MessageCircle } from 'lucide-react'
import { getCategoryName } from '../../utils/courseHelpers'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export default function CourseCard({ course }) {
  const categoryName = getCategoryName(course.category)
  const courseWhatsAppUrl = getWhatsAppUrl(
    `Hello! I am interested in the "${course.title}" course. Please share the syllabus, fees, and upcoming batch schedule.`
  )

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail & Badges */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.svg'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-lg bg-brand-600/90 backdrop-blur-xs px-2.5 py-1 text-xs font-semibold text-white shadow-xs">
            {categoryName}
          </span>
        </div>

        {/* Level Pill */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 rounded-lg bg-white/90 backdrop-blur-xs px-2.5 py-1 text-xs font-semibold text-slate-800 capitalize shadow-xs">
            <BarChart2 size={12} className="text-brand-600" />
            {course.level}
          </span>
        </div>

        {/* Duration indicator at bottom of thumbnail */}
        <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-md">
          <Clock size={14} className="text-brand-300" />
          <span>{course.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1">
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>

        <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Key Technologies Tags */}
        {course.technologies && course.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {course.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
            {course.technologies.length > 4 && (
              <span className="inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500">
                +{course.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Projects highlight */}
        {course.projects && course.projects.length > 0 && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
            <FolderGit2 size={14} className="text-brand-500 shrink-0" />
            <span>{course.projects.length} Practical Capstone Projects</span>
          </div>
        )}

        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={`/courses/${course.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-brand-50 px-3.5 py-2.5 text-xs font-semibold text-brand-700 hover:bg-brand-100 transition-colors"
          >
            <span>Course Details</span>
            <ArrowRight size={14} />
          </Link>

          
        </div>
      </div>
    </div>
  )
}
