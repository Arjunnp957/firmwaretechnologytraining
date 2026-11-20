/**
 * GENERAL DATA HELPERS
 * ---------------------------------------------------------------
 * Small reusable functions for the plain data files in src/data/.
 * Pages should use these instead of repeating filter/sort code.
 */

/**
 * Keep only items where the flag is true.
 * By default the flag is "isActive". Pass another key if needed,
 * e.g. filterActive(achievements, 'isPublished').
 */
export function filterActive(items = [], flag = 'isActive') {
  return items.filter((item) => item[flag] === true)
}

/**
 * Return a NEW array sorted by displayOrder (lowest first).
 * Items without a displayOrder go to the end. The original array
 * is never changed.
 */
export function sortByDisplayOrder(items = []) {
  return [...items].sort(
    (a, b) =>
      (a.displayOrder ?? Number.MAX_SAFE_INTEGER) -
      (b.displayOrder ?? Number.MAX_SAFE_INTEGER),
  )
}

/**
 * Active items, sorted by displayOrder. The most common combination.
 */
export function getActiveSorted(items = []) {
  return sortByDisplayOrder(filterActive(items))
}
