/**
 * PLACEMENTS
 * ---------------------------------------------------------------
 * Two lists: hiring partners and student achievements.
 *
 * !! IMPORTANT !!
 * Only add REAL information here. Do not invent companies, students
 * or placement numbers. The entries below are PLACEHOLDERS.
 *
 * HIRING PARTNERS (companies that hire or work with the institute)
 * - companyName, logo (put in public/images/partners/), website
 * - isActive: true to show, false to hide
 *
 * ACHIEVEMENTS (students who got placed)
 * - studentName: optional. Only shown when permissionGranted is true
 * - companyName, jobRole, year
 * - image: optional student photo (put in public/images/gallery/ or
 *   a placements folder). Only shown when permissionGranted is true
 * - permissionGranted: set to true ONLY after the student has agreed
 *   (in writing) to show their name and photo publicly. If false, the
 *   card shows the company, role and year without the name or photo.
 * - isPublished: true to show this achievement, false to hide it
 *
 * The sample achievements below have isPublished: false so no
 * made-up placements appear on the live site.
 */

export const hiringPartners = [
  { id: 1, companyName: 'Cisco', logo: '/images/partners/cisco.webp', website: 'https://www.cisco.com', isActive: true },
  { id: 2, companyName: 'TCS', logo: '/images/partners/tcs.jpeg', website: 'https://www.tcs.com', isActive: true },
  { id: 3, companyName: 'Infosys', logo: '/images/partners/infoys.png', website: 'https://www.infosys.com', isActive: true },
  { id: 4, companyName: 'Cognizant', logo: '/images/partners/cognizant.png', website: 'https://www.cognizant.com', isActive: true },
  { id: 5, companyName: 'Dell', logo: '/images/partners/Dell_Logo.svg.webp', website: 'https://www.dell.com', isActive: true },
  { id: 6, companyName: 'HP', logo: '/images/partners/hp.png', website: 'https://www.hp.com', isActive: true },
]

export const achievements = [
  { id: 1, studentName: 'Abhishek M', companyName: 'TCS', jobRole: 'Associate', year: 2026, image: '/images/partners/i1.png', permissionGranted: true, isPublished: true },
  { id: 2, studentName: 'Gopika K', companyName: 'Cisco', jobRole: 'DevOps Engineer', year: 2026, image: '/images/partners/i2.png', permissionGranted: true, isPublished: true },
  { id: 3, studentName: 'Anusree M', companyName: 'Dell', jobRole: 'Senior Analyst', year: 2026, image: '/images/partners/i3.png', permissionGranted: true, isPublished: true },
]
