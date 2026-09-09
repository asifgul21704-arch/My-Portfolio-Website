import { ProjectItem, ServiceItem, ProcessStep, CVData } from '../types';

/**
 * PROFILE IMAGE CONFIGURATION
 * Set this to your actual photo URL when ready (e.g. '/profile.jpg' or hosted image URL).
 * When empty or null, a high-end abstract developer tech visual is rendered automatically.
 */
export const PROFILE_IMAGE_URL: string = "";

export const PERSONAL_INFO = {
  name: "M. Asif Khan",
  role: "Full-Stack Web Developer",
  subtitle: "Full-Stack Developer",
  headline: "Modern Websites. Built to Grow.",
  bioShort: "Full-Stack Developer creating modern websites and web applications for businesses worldwide.",
  aboutText: "I'm M. Asif Khan, a Full-Stack Web Developer with 3+ years of experience building modern and functional web solutions. I focus on clean design, reliable development and practical solutions that help businesses grow online.",
  education: {
    degree: "BS Software Engineering",
    institution: "Gomal University",
  },
  experience: "3+ Years",
  email: "asifjanmsd3@gmail.com",
  phone: "+92 3370652074",
  whatsappNumber: "923370652074",
  whatsappUrl: "https://wa.me/923370652074?text=Hello%20M.%20Asif%20Khan,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  githubUrl: "https://github.com/asifgul21704-arch",
  location: "Available for Worldwide Remote Work",
};

export const QUICK_STATS = [
  {
    value: "3+ Years",
    label: "Experience",
  },
  {
    value: "Full-Stack",
    label: "Development",
  },
  {
    value: "Worldwide",
    label: "Clients",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business",
    title: "Business Websites",
    description: "Fast, responsive corporate websites tailored to turn visitors into clients.",
    iconName: "Briefcase",
  },
  {
    id: "restaurant",
    title: "Restaurant Websites",
    description: "Custom menu showcases, reservation flows, and modern digital dining presence.",
    iconName: "Utensils",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "High-converting online shops with seamless cart, checkout, and inventory UI.",
    iconName: "ShoppingBag",
  },
  {
    id: "dashboards",
    title: "Admin Dashboards",
    description: "Clear data visualizers, role-based workflows, and intuitive operational control.",
    iconName: "LayoutDashboard",
  },
  {
    id: "landing",
    title: "Landing Pages",
    description: "High-impact, conversion-focused single-page sites built for rapid growth.",
    iconName: "Zap",
  },
  {
    id: "fullstack",
    title: "Full-Stack Apps",
    description: "Scalable web applications with secure backends, robust APIs, and databases.",
    iconName: "Layers",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "green-bite",
    title: "Green Bite Restaurant",
    category: "Restaurant Web Platform",
    description: "Modern restaurant web experience with interactive culinary menus, fresh dish showcases, and direct reservation flow.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://green-bite-website-aexp.vercel.app/",
    githubUrl: "https://github.com/asifgul21704-arch/Resturent_Web",
    accentColor: "emerald",
    previewType: "restaurant",
  },
  {
    id: "bakery-website",
    title: "Bakery Website",
    category: "Food & Beverage",
    description: "Artisanal bakery showcase highlighting daily oven batches, specialty cakes, order inquiry, and localized pickup details.",
    tags: ["JavaScript", "HTML5", "CSS3", "Modern UI"],
    // No liveUrl - GitHub only as specified
    githubUrl: "https://github.com/asifgul21704-arch/Bakery_Website",
    accentColor: "amber",
    previewType: "bakery",
  },
  {
    id: "maktaba",
    title: "Maktaba / Book Agency",
    category: "Publishing Platform",
    description: "Clean literature catalog and publication management platform with categorized book listings and inquiry tools.",
    tags: ["React", "JavaScript", "Catalog UI", "Responsive"],
    // No liveUrl - GitHub only as specified
    githubUrl: "https://github.com/asifgul21704-arch/BOOK-AGNCY",
    accentColor: "blue",
    previewType: "books",
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    category: "Online Retail",
    description: "Feature-complete digital store with categorized product feed, dynamic cart state management, and streamlined checkout interface.",
    tags: ["React", "Node.js", "Express", "REST API"],
    // No liveUrl - GitHub only as specified
    githubUrl: "https://github.com/asifgul21704-arch/e-comerce-web",
    accentColor: "indigo",
    previewType: "ecommerce",
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Management Dashboard",
    category: "HealthTech & Operations",
    description: "Medical administration dashboard providing clinic workflow tracking, appointment scheduling, and patient record oversight.",
    tags: ["React", "Tailwind CSS", "Analytics", "Admin UI"],
    // No liveUrl - GitHub only as specified
    githubUrl: "https://github.com/asifgul21704-arch/Health-Care-Managment-DashBoard",
    accentColor: "cyan",
    previewType: "healthcare",
  },
];

export const SKILLS: string[] = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "GitHub",
  "Vercel",
  "AI Development",
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discuss",
  },
  {
    step: "02",
    title: "Design",
  },
  {
    step: "03",
    title: "Build",
  },
  {
    step: "04",
    title: "Launch",
  },
];

export const CV_DATA: CVData = {
  name: "M. Asif Khan",
  title: "Full-Stack Web Developer",
  experience: "3+ Years Experience",
  education: {
    degree: "BS Software Engineering",
    institution: "Gomal University",
  },
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "Git/GitHub",
    "Vercel",
    "AI Development",
  ],
  training: [
    "DIT",
    "Full-Stack Web Development — 3 Month Certificate",
    "Shorthand Course",
    "AI Automation",
    "Graphic Designing",
  ],
  languages: [
    "English",
    "Urdu",
    "Pashto",
  ],
  contact: {
    email: "asifjanmsd3@gmail.com",
    phone: "+92 3370652074",
    github: "https://github.com/asifgul21704-arch",
    location: "KPK, Pakistan (Available Worldwide)",
  },
  freelanceExperience: {
    role: "Freelance Full-Stack Web Developer",
    period: "2023 – Present",
    points: [
      "Built high-performance, responsive full-stack websites and web applications for international clients.",
      "Engineered reliable REST APIs, database schemas, and modern user interfaces with React and Tailwind CSS.",
      "Delivered production deployments on Vercel and cloud platforms with clean code standards.",
    ],
  },
};
