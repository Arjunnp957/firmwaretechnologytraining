/**
 * COURSE CATEGORIES
 * ---------------------------------------------------------------
 * Used for the category filter on the Courses page and for finding
 * "related courses" on a course page.
 *
 * - name: what visitors see
 * - slug: short lowercase id with hyphens. Each course in courses.js
 *   uses one of these slugs in its "category" field.
 *
 * !! PLACEHOLDER CONTENT !! Edit, add or remove categories freely.
 * If you remove a category, update any course that uses it.
 */

const categories = [
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Programming', slug: 'programming' },
  { name: 'Data & Analytics', slug: 'data-analytics' },
  { name: 'Networking & Cloud', slug: 'networking-cloud' },
  { name: 'Cyber Security', slug: 'cyber-security' },
  { name: 'Design', slug: 'design' },
  { name: 'Hardware', slug: 'hardware' },
  { name: 'Business-Analytics', slug: 'business-analytics' },
]

export default categories
