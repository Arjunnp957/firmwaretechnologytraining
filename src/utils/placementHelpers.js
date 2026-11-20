/**
 * PLACEMENT HELPERS
 * ---------------------------------------------------------------
 * Reads src/data/placements.js.
 */

import { hiringPartners, achievements } from '../data/placements'
import { filterActive } from './dataHelpers'

/** Hiring partners that are visible (isActive: true). */
export function getActivePartners() {
  return filterActive(hiringPartners)
}

/**
 * Achievements that are published (isPublished: true).
 *
 * Privacy rule: a student's name and photo are included ONLY when
 * permissionGranted is true in the data. Otherwise both are removed
 * from the returned object, so the page cannot show them by mistake.
 */
export function getPublishedAchievements(items = achievements) {
  return filterActive(items, 'isPublished').map((item) => {
    if (item.permissionGranted === true) return item
    const safe = { ...item }
    delete safe.studentName
    delete safe.image
    return safe
  })
}
