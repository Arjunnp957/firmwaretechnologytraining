/**
 * TRAINERS
 * ---------------------------------------------------------------
 * To add a trainer:
 *   1. Save the photo in public/images/trainers/ (e.g. ravi.jpg)
 *   2. Copy one entry below, change the values, give it a new id.
 *
 * Fields:
 * - name, designation (job title), experience (e.g. '8 years')
 * - photo: path starting with /images/trainers/
 * - expertise: list of short skill tags
 * - linkedinUrl: full LinkedIn profile URL, or '' to hide the link
 * - isActive: true to show, false to hide
 * - displayOrder: lower numbers appear first
 *
 * !! PLACEHOLDER CONTENT !! No real trainers are listed here.
 * Replace every entry with real, confirmed trainer details.
 */

const trainers = [
  {
    id: 1,
    name: 'Mubshir M',
    designation: 'Senior Instructor Cloud & DevOps',
    photo: '/images/trainers/m1.png',
    experience: '4 years',
    expertise: ['Cloud', 'DevOps', 'Linux', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'CI/CD', 'AWS', 'Azure', 'GCP'],
    linkedinUrl: '',
    isActive: true,
    displayOrder: 1,
  },
  {
    id: 2,
    name: 'Anusha S',
    designation: 'Full Stack Developer Instructor',
    photo: '/images/trainers/m2.jpeg',
    experience: '3 years',
    expertise: ['Web Development', 'JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'MongoDB', 'Express.js', 'Python', 'Django', 'postgreSQL'],
    linkedinUrl: '',
    isActive: true,
    displayOrder: 2,
  },
  {
    id: 3,
    name: 'Druvraj K ',
    designation: 'Hardware Instructor',
    photo: '/images/trainers/m3.jpeg',
    experience: '2 years',
    expertise: ['Hardware', 'Networking', 'IoT', 'Embedded Systems', 'Raspberry Pi', 'Arduino'],
    linkedinUrl: '',
    isActive: true,
    displayOrder: 3,
  },
  {
    id: 4,
    name: 'Sneha S',
    designation: 'Digital Marketing Instructor',
    photo: '/images/trainers/m4.jpeg',
    experience: '3 years',
    expertise: ['Digital Marketing', 'Social Media Marketing', 'Content Strategy', 'SEO', 'PPC', 'Email Marketing', 'Analytics', 'Graphic Design', 'Branding', 'Marketing Automation'],
    linkedinUrl: '',
    isActive: true,
    displayOrder: 4,
  },
  
]

export default trainers
