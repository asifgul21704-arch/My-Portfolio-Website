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
  { id: "foody-platform", title: "Foody — Food Delivery Platform", category: "Full-Stack FoodTech", description: "Food delivery and kitchen operations platform with customer ordering, dispatch workflows, and restaurant management interfaces.", tags: ["React", "TypeScript", "Tailwind CSS", "Vite"], githubUrl: "https://github.com/asifgul21704-arch/Resturent_Web", accentColor: "emerald", previewType: "restaurant" },
  { id: "bakery-website", title: "BAKEO — Bakery Storefront", category: "E-commerce & Operations", description: "Bakery storefront with product catalog, cart, checkout screens, customer orders, and admin operations interface.", tags: ["React", "TypeScript", "Node.js", "Express"], githubUrl: "https://github.com/asifgul21704-arch/Bakery_Website", accentColor: "amber", previewType: "bakery" },
  { id: "maktaba-haqqania", title: "Maktaba Haqqania", category: "Full-Stack Bookstore", description: "Digital Islamic bookstore concept with catalog, customer-facing shopping experience, and administration workflows.", tags: ["React", "Node.js", "Express", "MongoDB"], githubUrl: "https://github.com/asifgul21704-arch/Maktaba-Haqanya-web-app", accentColor: "blue", previewType: "books" },
  { id: "book-agency", title: "Book Agency Web App", category: "Publishing & Catalog", description: "Responsive book agency application with categorized listings and a modern catalog-focused interface.", tags: ["React", "TypeScript", "Express", "Tailwind CSS"], githubUrl: "https://github.com/asifgul21704-arch/BOOK-AGNCY", accentColor: "sky", previewType: "books" },
  { id: "novastore", title: "NovaStore — E-commerce", category: "Full-Stack Commerce", description: "Storefront and API project covering customer authentication, products, categories, cart, wishlist, orders, and admin routes.", tags: ["React", "TypeScript", "Node.js", "Express", "JWT"], githubUrl: "https://github.com/asifgul21704-arch/e-comerce-web", accentColor: "indigo", previewType: "ecommerce" },
  { id: "ecommerce-web-platform", title: "E-commerce Web Platform", category: "Commerce Application", description: "React and Express application with Redux Toolkit, routing, and authentication-related dependencies.", tags: ["React", "TypeScript", "Redux Toolkit", "Express"], githubUrl: "https://github.com/asifgul21704-arch/E-ComerceWeb", accentColor: "violet", previewType: "ecommerce" },
  { id: "healthcare-dashboard", title: "Healthcare Management Dashboard", category: "HealthTech Dashboard", description: "Healthcare administration interface focused on clinic operations, appointment workflows, and patient information screens.", tags: ["React", "Tailwind CSS", "Dashboard UI"], githubUrl: "https://github.com/asifgul21704-arch/Health-Care-Managment-DashBoard", accentColor: "cyan", previewType: "healthcare" },
  { id: "healthcare-management-system", title: "Healthcare Management System", category: "Healthcare Application", description: "Healthcare-focused application concept and interface; review the repository for the current implementation scope.", tags: ["Web Development", "Healthcare"], githubUrl: "https://github.com/asifgul21704-arch/Health-Care-Management-System", accentColor: "teal", previewType: "healthcare" },
  { id: "jarvis-ai", title: "JARVIS — Desktop AI Assistant", category: "AI & Desktop Automation", description: "Windows desktop assistant with multilingual voice interaction, Gemini tool calling, and a permission-based system action model.", tags: ["React", "Node.js", "Express", "Gemini", "Python"], githubUrl: "https://github.com/asifgul21704-arch/Ai_Assistent", accentColor: "purple", previewType: "generic" },
  { id: "pet-commerce", title: "Oskies — Pet Nutrition Store", category: "Pet E-commerce", description: "Pet nutrition storefront with product discovery, customer account flows, cart and coupon interactions, and pet profiles.", tags: ["React", "TypeScript", "Tailwind CSS", "Motion"], githubUrl: "https://github.com/asifgul21704-arch/pets_website", accentColor: "orange", previewType: "ecommerce" },
  { id: "velour-fashion", title: "Velour Fashion", category: "Fashion Commerce", description: "Fashion commerce web application with a modern storefront and server-side authentication architecture.", tags: ["React", "Node.js", "Express", "MongoDB", "JWT"], githubUrl: "https://github.com/asifgul21704-arch/velour-fashion-web", accentColor: "rose", previewType: "generic" },
  { id: "griffly-frontend", title: "Griffly — Restaurant Ordering UI", category: "Restaurant Frontend", description: "Responsive restaurant ordering frontend with menu browsing, cart, checkout, order tracking, customer screens, and admin UI.", tags: ["React", "TypeScript", "Tailwind CSS", "Context API"], liveUrl: "https://griffly-web-app.vercel.app/", githubUrl: "https://github.com/asifgul21704-arch/Griffly-Web-App", accentColor: "lime", previewType: "restaurant" },
  { id: "college-management", title: "College Management System", category: "Education Management", description: "Education administration project with a Node.js and Express server architecture; review its source and runtime status before deployment.", tags: ["React", "Node.js", "Express", "MongoDB"], githubUrl: "https://github.com/asifgul21704-arch/colege-managment-system", accentColor: "blue", previewType: "generic" },
  { id: "school-college-management", title: "School & College Management System", category: "Education ERP", description: "School and college management project covering academic and administrative workflows.", tags: ["React", "Node.js", "Express", "MongoDB"], githubUrl: "https://github.com/asifgul21704-arch/school-college_managment-system", accentColor: "indigo", previewType: "generic" }
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
