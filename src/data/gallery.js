/**
 * GALLERY PHOTOS (shown on the Home page, click to enlarge)
 * ---------------------------------------------------------------
 * To add a photo:
 *   1. Save the image in public/images/gallery/ (e.g. classroom-1.jpg)
 *   2. Add a new entry below with image: '/images/gallery/classroom-1.jpg'
 *
 * Fields:
 * - caption: short description (also used as the image alt text)
 * - image: path starting with /images/
 * - isActive: true to show, false to hide
 * - displayOrder: lower numbers appear first
 *
 * !! PLACEHOLDER CONTENT !! These entries point to a generic
 * placeholder image. Replace them with real institute photos.
 */

const gallery = [
  { id: 1, caption: '', image: '/images/gallery/class.jpg', isActive: true, displayOrder: 1 },
  { id: 2, caption: 'Placeholder: computer lab', image: '/images/gallery/lab.jpg', isActive: true, displayOrder: 2 },
  { id: 3, caption: 'Placeholder: workshop', image: '/images/gallery/workshop.jpg', isActive: true, displayOrder: 3 },
  { id: 4, caption: 'Placeholder: project demo', image: '/images/gallery/demo.jpeg', isActive: true, displayOrder: 4 },
  { id: 5, caption: 'Placeholder: institute event', image: '/images/gallery/event.jpg', isActive: true, displayOrder: 5 },
  { id: 6, caption: 'Placeholder: learning space', image: '/images/gallery/learning.jpg', isActive: true, displayOrder: 6 },
]

export default gallery
