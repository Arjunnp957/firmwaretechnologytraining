/**
 * COURSES
 * ---------------------------------------------------------------
 * Every course page on the website (/courses/your-slug) is built
 * automatically from the entries in this file.
 *
 * !! PLACEHOLDER CONTENT !!
 * The courses below are SAMPLES so the site can be built and tested.
 * Durations, descriptions, syllabus modules and projects are NOT the
 * institute's real details. Replace them with the real courses.
 *
 * HOW TO ADD A COURSE
 *   1. Copy any course block below and paste it at the end of the list.
 *   2. Give it a new unique id and a unique slug.
 *   3. Save the course thumbnail in public/images/courses/ and set
 *      thumbnail: '/images/courses/your-image.jpg'
 *   4. Save the file. The course appears automatically.
 *
 * FIELDS
 * - id: unique number
 * - title: course name
 * - slug: web address part, lowercase with hyphens, must be unique
 *         (becomes /courses/your-slug). Do not change it later
 *         without updating links.
 * - category: must match a slug from categories.js
 * - shortDescription: one or two lines shown on the course card
 * - description: fuller description shown on the course page
 * - thumbnail: image path starting with /images/courses/
 * - duration: text, e.g. '3 months'
 * - level: 'beginner', 'intermediate' or 'advanced'
 * - technologies: list of tools or languages taught
 * - careerOpportunities: list of job roles this course prepares for
 * - projects: list of practical projects learners build
 * - featured: true to show on the Home page
 * - isActive: true to show, false to hide the course
 * - displayOrder: lower numbers appear first
 * - syllabus: list of modules, each with moduleTitle and
 *             moduleDescription (no nested topics)
 */

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    category: 'web-development',
    shortDescription: 'Learn to build complete web applications from the interface to the server.',
    description:
      'Placeholder description. This program covers building modern web applications end to end, with hands-on practice in every module.',
    thumbnail: '/images/courses/mern.avif',
    duration: '6 months',
    level: 'intermediate',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    careerOpportunities: ['Full Stack Developer', 'Web Developer', 'Software Engineer'],
    projects: ['Personal portfolio website', 'Full stack web application'],
    featured: true,
    isActive: true,
    displayOrder: 1,
    syllabus: [
      { moduleTitle: 'Web Foundations', moduleDescription: 'HTML, CSS and responsive page layouts.' },
      { moduleTitle: 'JavaScript Essentials', moduleDescription: 'Core language concepts and working with the browser.' },
      { moduleTitle: 'Front-End and Back-End Development', moduleDescription: 'Building interfaces and server-side logic, then connecting them.' },
    ],
  },
  {
    id: 2,
    title: 'Front-End Development with React',
    slug: 'front-end-development-react',
    category: 'web-development',
    shortDescription: 'Build fast, interactive user interfaces with modern JavaScript and React.',
    description:
      'Placeholder description. Learners practise building reusable interface components and complete front-end projects.',
    thumbnail: '/images/courses/react.webp',
    duration: '3 months',
    level: 'beginner',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    careerOpportunities: ['Front-End Developer', 'UI Developer'],
    projects: ['Interactive dashboard', 'Multi-page React website'],
    featured: true,
    isActive: true,
    displayOrder: 2,
    syllabus: [
      { moduleTitle: 'HTML and CSS Basics', moduleDescription: 'Structure and style web pages.' },
      { moduleTitle: 'JavaScript Fundamentals', moduleDescription: 'Variables, functions and working with data.' },
      { moduleTitle: 'React Components', moduleDescription: 'Building interfaces from reusable components.' },
    ],
  },
  {
    id: 3,
    title: 'Python Programming',
    slug: 'python-programming',
    category: 'programming',
    shortDescription: 'Start programming with one of the most popular and beginner-friendly languages.',
    description:
      'Placeholder description. This course introduces programming concepts using Python through guided practice.',
    thumbnail: '/images/courses/python.webp',
    duration: '2 months',
    level: 'beginner',
    technologies: ['Python'],
    careerOpportunities: ['Python Developer', 'Automation Engineer'],
    projects: ['Command-line utility', 'Simple automation script'],
    featured: true,
    isActive: true,
    displayOrder: 3,
    syllabus: [
      { moduleTitle: 'Programming Basics', moduleDescription: 'Variables, data types, conditions and loops.' },
      { moduleTitle: 'Functions and Data Structures', moduleDescription: 'Organising code and working with lists and dictionaries.' },
      { moduleTitle: 'Working with Files and Modules', moduleDescription: 'Reading data and using libraries.' },
    ],
  },
  {
    id: 4,
    title: 'Data Analytics',
    slug: 'data-analytics',
    category: 'data-analytics',
    shortDescription: 'Turn raw data into clear insights using spreadsheets, SQL and visualisation tools.',
    description:
      'Placeholder description. Learners practise cleaning, analysing and presenting data to support decisions.',
    thumbnail: '/images/courses/data.jpg',
    duration: '4 months',
    level: 'intermediate',
    technologies: ['Excel', 'SQL', 'Python'],
    careerOpportunities: ['Data Analyst', 'Business Analyst'],
    projects: ['Sales analysis report', 'Interactive data dashboard'],
    featured: false,
    isActive: true,
    displayOrder: 4,
    syllabus: [
      { moduleTitle: 'Data Handling with Spreadsheets', moduleDescription: 'Cleaning, organising and summarising data.' },
      { moduleTitle: 'Querying Data with SQL', moduleDescription: 'Retrieving and combining data from databases.' },
      { moduleTitle: 'Visualisation and Reporting', moduleDescription: 'Presenting findings clearly with charts and dashboards.' },
    ],
  },
  {
    id: 5,
    title: 'Java Programming',
    slug: 'java-programming',
    category: 'programming',
    shortDescription: 'Learn object-oriented programming and build reliable applications with Java.',
    description:
      'Placeholder description. Covers core Java concepts with regular coding practice and small projects.',
    thumbnail: '/images/courses/Java-Logo.png',
    duration: '3 months',
    level: 'intermediate',
    technologies: ['Java'],
    careerOpportunities: ['Java Developer', 'Software Engineer'],
    projects: ['Console-based management system', 'Small desktop application'],
    featured: false,
    isActive: true,
    displayOrder: 5,
    syllabus: [
      { moduleTitle: 'Java Basics', moduleDescription: 'Syntax, data types and control flow.' },
      { moduleTitle: 'Object-Oriented Programming', moduleDescription: 'Classes, objects, inheritance and interfaces.' },
      { moduleTitle: 'Collections and Exception Handling', moduleDescription: 'Working with data collections and handling errors safely.' },
    ],
  },
  {
    id: 6,
    title: 'Networking Fundamentals',
    slug: 'networking-fundamentals',
    category: 'networking-cloud',
    shortDescription: 'Understand how networks work and learn to set up and troubleshoot them.',
    description:
      'Placeholder description. A practical introduction to computer networks for those starting an IT support or network career.',
    thumbnail: '/images/courses/network.png',
    duration: '2 months',
    level: 'beginner',
    technologies: ['TCP/IP', 'Routing', 'Switching'],
    careerOpportunities: ['Network Support Technician', 'IT Support Engineer'],
    projects: ['Small office network setup', 'Network troubleshooting lab'],
    featured: false,
    isActive: true,
    displayOrder: 6,
    syllabus: [
      { moduleTitle: 'Network Basics', moduleDescription: 'Network types, devices and models.' },
      { moduleTitle: 'IP Addressing and Subnetting', moduleDescription: 'How devices are identified and grouped.' },
      { moduleTitle: 'Routing, Switching and Troubleshooting', moduleDescription: 'Configuring and fixing common network issues.' },
    ],
  },
  {
    id: 7,
    title: 'Cloud Computing Essentials',
    slug: 'cloud-computing-essentials',
    category: 'networking-cloud',
    shortDescription: 'Learn core cloud concepts and how to deploy and manage services in the cloud.',
    description:
      'Placeholder description. An introduction to cloud platforms, services and deployment practices.',
    thumbnail: '/images/courses/cld.jpg',
    duration: '3 months',
    level: 'beginner',
    technologies: ['Cloud Platforms', 'Linux', 'Virtual Machines'],
    careerOpportunities: ['Cloud Support Associate', 'Junior Cloud Engineer'],
    projects: ['Host a website in the cloud', 'Set up a virtual server'],
    featured: false,
    isActive: true,
    displayOrder: 7,
    syllabus: [
      { moduleTitle: 'Cloud Concepts', moduleDescription: 'Service models, deployment models and benefits.' },
      { moduleTitle: 'Core Cloud Services', moduleDescription: 'Compute, storage and networking services.' },
      { moduleTitle: 'Deployment and Management', moduleDescription: 'Launching, monitoring and securing cloud resources.' },
    ],
  },
  {
    id: 8,
    title: 'Cyber Security Essentials',
    slug: 'cyber-security-essentials',
    category: 'cyber-security',
    shortDescription: 'Learn how to identify threats and protect systems, networks and data.',
    description:
      'Placeholder description. Covers security fundamentals and defensive practices with lab-based learning.',
    thumbnail: '/images/courses/cyber.jpg',
    duration: '4 months',
    level: 'intermediate',
    technologies: ['Network Security', 'Linux', 'Security Tools'],
    careerOpportunities: ['Security Analyst', 'SOC Analyst (entry level)'],
    projects: ['Security assessment of a practice environment', 'Incident response exercise'],
    featured: false,
    isActive: true,
    displayOrder: 8,
    syllabus: [
      { moduleTitle: 'Security Fundamentals', moduleDescription: 'Threats, risks and basic protection principles.' },
      { moduleTitle: 'Network and System Security', moduleDescription: 'Securing networks, operating systems and access.' },
      { moduleTitle: 'Monitoring and Incident Response', moduleDescription: 'Detecting and responding to security events.' },
    ],
  },
  {
    id: 9,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    category: 'design',
    shortDescription: 'Design clear, user-friendly interfaces and learn the design process end to end.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/ui-ux.jpg',
    duration: '3 months',
    level: 'beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 9,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },
  {
    id: 10,
    title: 'Software Testing and QA',
    slug: 'software-testing-qa',
    category: 'programming',
    shortDescription: 'Learn how to test software thoroughly and report defects effectively.',
    description:
      'Placeholder description. Covers manual testing foundations and an introduction to test automation.',
    thumbnail: '/images/courses/software-testing1s.jpg',
    duration: '2 months',
    level: 'beginner',
    technologies: ['Manual Testing', 'Test Cases', 'Bug Tracking'],
    careerOpportunities: ['QA Tester', 'Software Test Engineer'],
    projects: ['Test plan for a sample application', 'Defect report portfolio'],
    featured: false,
    isActive: true,
    displayOrder: 10,
    syllabus: [
      { moduleTitle: 'Testing Fundamentals', moduleDescription: 'Testing types, life cycle and test design.' },
      { moduleTitle: 'Writing Test Cases and Reporting Bugs', moduleDescription: 'Documenting tests and tracking defects.' },
      { moduleTitle: 'Introduction to Automation', moduleDescription: 'Automating simple repeatable tests.' },
    ],
  },

  {
    id: 11,
    title: 'CCTV & IT Technician',
    slug: 'cctv-it-technician',
    category: 'hardware',
    shortDescription: 'Design clear, user-friendly interfaces and learn the design process end to end.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/technician.jpg',
    duration: '3 months',
    level: 'beginner',
    technologies: ['CCTV Systems', 'Networking', 'Troubleshooting'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 11,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },

  {
    id: 12,
    title: 'Devops Engineering',
    slug: 'devops-engineering',
    category: 'networking-cloud',
    shortDescription: 'Design clear, user-friendly interfaces and learn the design process end to end.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/devops.jpg',
    duration: '3 months',
    level: 'intermediate',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 12,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },

  {
    id: 13,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    category: 'business-analytics',
    shortDescription: 'Design clear, user-friendly interfaces and learn the design process end to end.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/digi.jpg',
    duration: '2 months',
    level: 'beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 13,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },
  {
    id: 14,
    title: 'Artificial Intelligence & Machine Learning',
    slug: 'artificial-intelligence-machine-learning',
    category: 'programming',
    shortDescription: 'Design clear, user-friendly interfaces and learn the design process end to end.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/ai.webp',
    duration: '5 months',
    level: 'beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 14,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },
  {
    id: 15,
    title: 'Mobile Phone Technician',
    slug: 'mobile-phone-technician',
    category: 'hardware',
    shortDescription: 'Learn the fundamentals of mobile phone repair and maintenance.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/mobile.webp',
    duration: '6 months',
    level: 'beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 15,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },
  {
    id: 16,
    title: 'Graphic Design',
    slug: 'graphic-design',
    category: 'design',
    shortDescription: 'Learn the fundamentals of graphic design and branding.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/gd.webp',
    duration: '2 months',
    level: 'beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 16,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },
  {
    id: 17,
    title: 'Laptop Technician',
    slug: 'laptop-technician',
    category: 'hardware',
    shortDescription: 'Learn the fundamentals of laptop repair and maintenance.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/laptop.jpeg',
    duration: '2 months',
    level: 'beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 17,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },
  {
    id: 18,
    title: 'Linux Administration',
    slug: 'linux-administration',
    category: 'programming',
    shortDescription: 'Learn the fundamentals of Linux system administration.',
    description:
      'Placeholder description. Learners practise research, wireframing and visual design on real-world style projects.',
    thumbnail: '/images/courses/linux.webp',
    duration: '2 months',
    level: 'beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
    careerOpportunities: ['UI Designer', 'UX Designer'],
    projects: ['Mobile app design', 'Website redesign case study'],
    featured: false,
    isActive: true,
    displayOrder: 18,
    syllabus: [
      { moduleTitle: 'Design Principles', moduleDescription: 'Layout, colour, typography and usability basics.' },
      { moduleTitle: 'Wireframes and Prototypes', moduleDescription: 'Planning and testing designs before development.' },
      { moduleTitle: 'Portfolio Projects', moduleDescription: 'Completing case studies to present to employers.' },
    ],
  },
]

export default courses
