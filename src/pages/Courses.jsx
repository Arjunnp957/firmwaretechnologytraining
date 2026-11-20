import { useState, useMemo } from 'react'
import { Search, RotateCcw, Filter } from 'lucide-react'
import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import CourseCard from '../components/courses/CourseCard'
import { getActiveCourses } from '../utils/courseHelpers'
import categories from '../data/categories'
import CTASection from '../components/home/CTASection'

export default function Courses() {
  const allCourses = useMemo(() => getActiveCourses(), [])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      // Category filter
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false
      }

      // Level filter
      if (selectedLevel !== 'all' && course.level.toLowerCase() !== selectedLevel.toLowerCase()) {
        return false
      }

      // Search term filter (title, description, or technologies)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim()
        const matchesTitle = course.title.toLowerCase().includes(query)
        const matchesDesc = course.shortDescription.toLowerCase().includes(query)
        const matchesTech = course.technologies?.some((t) =>
          t.toLowerCase().includes(query)
        )
        if (!matchesTitle && !matchesDesc && !matchesTech) {
          return false
        }
      }

      return true
    })
  }, [allCourses, selectedCategory, selectedLevel, searchTerm])

  const handleResetFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedLevel('all')
  }

  const hasActiveFilters =
    searchTerm.trim() !== '' || selectedCategory !== 'all' || selectedLevel !== 'all'

  return (
    <div>
      <SEO
        title="All IT Courses & Certifications"
        description="Browse all industry-accredited courses in Full Stack, Python, Java, Data Analytics, Cloud Computing, Cyber Security, and UI/UX Design. Flexible batches."
        canonicalUrl="/courses"
      />

      <PageHeader
        badge="Career Programs"
        title="Explore Our IT Training Courses"
        description="Comprehensive, hands-on certification courses led by experienced tech professionals. Find the right program to launch or accelerate your career."
        breadcrumbs={[{ label: 'Courses' }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter Controls */}
        <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses by name or technology (e.g. React, Python, Cloud)..."
                className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Level Selector */}
            <div className="md:col-span-4 flex items-center gap-2">
              <label htmlFor="level-filter" className="text-xs font-bold text-slate-600 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Filter size={14} /> Level:
              </label>
              <select
                id="level-filter"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm text-slate-900 bg-white focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              >
                <option value="all">All Skill Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mr-2">
              Category:
            </span>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Courses ({allCourses.length})
            </button>
            {categories.map((cat) => {
              const count = allCourses.filter((c) => c.category === cat.slug).length
              if (count === 0) return null
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedCategory === cat.slug
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Results Summary & Clear Action */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-600">
            Showing <span className="font-bold text-slate-900">{filteredCourses.length}</span> of {allCourses.length} programs
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
            >
              <RotateCcw size={13} />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Courses Grid or Empty State */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center my-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No courses found matching your criteria</h3>
            <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
              Try adjusting your search terms, selecting "All Courses", or resetting filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              <RotateCcw size={15} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      <CTASection />
    </div>
  )
}

