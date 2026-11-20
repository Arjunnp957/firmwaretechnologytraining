/**
 * COURSE HELPERS
 * ---------------------------------------------------------------
 * Everything about courses is read from src/data/courses.js.
 * Hidden courses (isActive: false) are never returned.
 */

import courses from '../data/courses'
import categories from '../data/categories'
import { getActiveSorted } from './dataHelpers'

/** All visible courses, in display order. */
export function getActiveCourses() {
  return getActiveSorted(courses)
}

/** Visible courses marked featured: true (used on the Home page). */
export function getFeaturedCourses(limit) {
  const featured = getActiveCourses().filter((course) => course.featured)
  return typeof limit === 'number' ? featured.slice(0, limit) : featured
}

/**
 * Find one visible course by its slug (the part of the web address
 * after /courses/). Returns undefined if not found or hidden, so the
 * page can show the 404 / "course not found" message.
 */
export function getCourseBySlug(slug) {
  return getActiveCourses().find((course) => course.slug === slug)
}

/**
 * Other visible courses in the same category as the given course,
 * excluding the course itself.
 */
export function getRelatedCourses(course, limit = 3) {
  if (!course) return []
  return getActiveCourses()
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, limit)
}

/** The display name for a category slug, e.g. 'web-development'. */
export function getCategoryName(slug) {
  const match = categories.find((category) => category.slug === slug)
  return match ? match.name : slug
}
