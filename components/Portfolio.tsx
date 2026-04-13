'use client'

import { useState } from 'react'
import {
  Code2, Database, Globe,
  Github, Linkedin, Mail, Download,
  ChevronRight, Briefcase, GraduationCap,
  User, Send, ExternalLink, MessageSquareQuote,
  Award, Star, Menu, X, Sun, Moon, Phone,
} from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'

// ─── Translations ─────────────────────────────────────────────────────────────
const t = {
  es: {
    nav: ['Sobre mí', 'Experiencia', 'Certificaciones', 'Proyectos', 'Stack', 'Testimonios', 'Visión', 'Contacto'],
    welcome: '~/bienvenidos a mi portafolio',
    role: 'Ingeniero de Software',
    university: 'Universidad Cooperativa de Colombia',
    tagline: 'Comprometido con transformar ideas complejas en experiencias web interactivas y escalables.',
    downloadCV: 'Descargar CV',
    viewProjects: 'Ver proyectos',
    aboutTitle: '02. Acerca de Mí',
    profileTitle: 'PERFIL PROFESIONAL',
    profileItems: [
      'Soy un <strong>desarrollador en formación</strong> enfocado en construir software robusto y eficiente.',
      'Actualmente cursando la carrera de <strong>Ingeniería de Software</strong>, con fuerte enfoque analítico.',
      'Interesado en la <strong>arquitectura de sistemas</strong>, desarrollo web moderno y bases de datos.',
      'Mi objetivo es unirme a un equipo dinámico donde pueda <strong>aportar valor</strong> y seguir aprendiendo.',
    ],
    focusTitle: 'Áreas de Enfoque',
    focusSubtitle: 'Las disciplinas en las que concentro mi formación y desarrollo profesional.',
    focusAreas: [
      { title: 'Programación', desc: 'Escribo código limpio, estructurado y mantenible aplicando buenas prácticas y patrones de diseño.' },
      { title: 'Bases de Datos', desc: 'Diseño esquemas relacionales eficientes y optimizo consultas SQL para sistemas de alto rendimiento.' },
      { title: 'Desarrollo Web', desc: 'Construyo interfaces responsivas e interactivas con tecnologías modernas como React y Next.js.' },
    ],
    techSkills: 'Habilidades Técnicas',
    softSkills: 'Habilidades Blandas',
    softSkillsList: ['🤝 Trabajo en equipo','💬 Comunicación efectiva','🧩 Resolución de problemas','⏱ Gestión del tiempo','🔄 Adaptabilidad','📚 Aprendizaje continuo','🎯 Orientado a resultados','🗂 Metodologías ágiles','🧠 Pensamiento analítico','🤔 Pensamiento crítico'],
    expTitle: '03. Experiencia Académica y Laboral',
    exp: [
      {
        badge: 'Académico (Actualidad)',
        title: 'Ingeniería de Software',
        sub: 'Universidad Cooperativa de Colombia',
        desc: 'Formación integral en ciencias computacionales, algoritmos, metodologías ágiles de desarrollo de software y arquitectura de sistemas.',
        bullets: [
          'Desarrollo de proyectos académicos aplicando patrones de diseño y principios SOLID.',
          'Participación en equipos de trabajo bajo metodología Scrum para entrega de software funcional.',
          'Implementación de bases de datos relacionales y consultas SQL optimizadas.',
          'Promedio académico destacado con enfoque en materias de programación y estructuras de datos.',
        ],
      },
      {
        badge: 'Prácticas / Laboral',
        title: 'Desarrollador Junior (Freelance)',
        sub: 'Sistemas Web & Bases de Datos',
        desc: 'Construcción de aplicaciones web completas para clientes independientes.',
        bullets: [
          'Diseño y desarrollo de interfaces responsivas con React y Tailwind CSS.',
          'Modelado de bases de datos relacionales y creación de APIs REST con Node.js.',
          'Entrega de proyectos en tiempo acordado manteniendo comunicación constante con el cliente.',
          'Implementación de control de versiones con Git y GitLab en todos los proyectos.',
        ],
      },
    ],
    projectsTitle: '04. Mis Proyectos',
    projects: [
      { title: 'MusicON', desc: 'Reproductor de música MP3 con interfaz fluida tipo "liquid". Permite subir archivos MP3, gestionar una lista de reproducción y disfrutar de una experiencia visual inmersiva.', github: 'https://github.com/StevenInsuasti/MusicON', demo: 'https://music-on-six.vercel.app' },
      { title: 'Aerotickets', desc: 'Sistema de reservas de vuelos con búsqueda de rutas, selección de asientos y gestión de pasajeros. Interfaz moderna e intuitiva para simular una aerolínea real.', github: 'https://github.com/StevenInsuasti/Aerotickets', demo: 'https://aerotickets-frontend.vercel.app' },
      { title: 'Reloj Análogo', desc: 'Reloj analógico interactivo con manecillas animadas en tiempo real y sistema de alarma configurable. Desarrollado con JavaScript puro.', github: 'https://github.com/StevenInsuasti/RelojAnalogo', demo: 'https://reloj-analogo-beta.vercel.app' },
      { title: 'Clon Mercado Libre', desc: 'Clon funcional de Mercado Libre con listado de productos, búsqueda y carrito de compras. Proyecto de práctica para dominar HTML, CSS y JavaScript.', github: 'https://github.com/StevenInsuasti/TalleGit', demo: 'https://steveninsuasti.github.io/TalleGit' },
      { title: 'YoJobs', desc: 'Red social profesional inspirada en LinkedIn. Permite registro de usuarios, creación de perfil, publicación de ofertas laborales y conexión entre profesionales.', github: 'https://github.com/StevenInsuasti/RedSocialYoJobs', demo: 'https://red-social-yo-jobs.vercel.app/users/register' },
      { title: 'Cálculo Multivariable', desc: 'Aplicativo interactivo para cálculo multivariable con visualizaciones 3D, gradientes, integrales dobles y triples. Desarrollado con Python y Streamlit.', github: 'https://github.com/StevenInsuasti/AplicativoMultivariable', demo: 'https://aplicativomultivariable-proyecto.streamlit.app' },
    ],
    code: 'Código', demo: 'Demo', comingSoon: 'Próximamente',
    testimonialsTitle: '05. Testimonios',
    testimonials: [
      { quote: '"Steven tiene un gran talento para resolver problemas complejos. Entregó el proyecto antes del plazo acordado y el código era muy limpio y fácil de mantener."', name: 'Laura Gómez', role: 'Project Manager / Tech Corp' },
      { quote: '"Excelente estudiante y profesional. Trabajamos en una integración de bases de datos que superó nuestras expectativas en rendimiento."', name: 'Carlos Ruiz', role: 'CTO / InnovaTech' },
      { quote: '"Su dedicación por aprender e implementar nuevas herramientas es asombrosa. La interfaz que construyó es super intuitiva y a nuestros usuarios les encantó."', name: 'Ana Martínez', role: 'Diseñadora UI/UX' },
    ],
    certsTitle: '06. Certificaciones',
    certs: [
      { title: 'Desarrollo Web Frontend', issuer: 'Meta / Coursera', date: 'Sept 2023' },
      { title: 'Bases de Datos con SQL', issuer: 'Universidad Cooperativa', date: 'Mar 2023' },
      { title: 'Scrum Fundamentals', issuer: 'ScrumStudy', date: 'Ene 2024' },
      { title: 'GitLab 101', issuer: 'GitLab University', date: '2024' },
      { title: 'JavaScript Moderno', issuer: 'Juan Pablo de la Torre — Udemy', date: '2024' },
      { title: 'Algoritmos y Estructuras de Datos en JS', issuer: 'FreeCodeCamp', date: '2024' },
    ],
    stackTitle: '05. Stack Tecnológico',
    stackSubtitle: 'Tecnologías y herramientas con las que trabajo día a día.',
    goalsTitle: '07. Visión Profesional',
    goalsSubtitle: '¿Qué busco y hacia dónde voy?',
    goals: [
      { icon: '🎯', title: 'Rol que busco', desc: 'Unirme como Desarrollador Frontend o Fullstack Junior a un equipo donde pueda contribuir con soluciones reales, aprender de profesionales con experiencia y crecer dentro de un entorno ágil y colaborativo.' },
      { icon: '🚀', title: 'Crecimiento técnico', desc: 'Profundizar en arquitecturas de software escalables, cloud computing (AWS / GCP) y buenas prácticas de DevOps. Mi meta es convertirme en un ingeniero capaz de diseñar sistemas robustos de principio a fin.' },
      { icon: '🤝', title: 'Aporte al equipo', desc: 'Traigo compromiso, capacidad de aprendizaje rápido y una mentalidad orientada a resultados. Me adapto fácilmente a nuevos entornos y disfruto trabajar en equipo para resolver problemas complejos.' },
      { icon: '🌍', title: 'Visión a largo plazo', desc: 'Participar en proyectos de impacto real, idealmente con alcance internacional, donde la tecnología sea un puente para mejorar la vida de las personas. Aspiro a liderar equipos técnicos en el futuro.' },
    ],
    contactTitle: '08. Contacto',
    sendMsg: 'Envíame un mensaje',
    nameLabel: 'Nombre Completo', namePlaceholder: 'Ej. Juan Pérez',
    emailLabel: 'Correo Electrónico', emailPlaceholder: 'juan@ejemplo.com',
    msgLabel: 'Tu Mensaje', msgPlaceholder: '¡Hola! Me gustaría conversar sobre...',
    sendBtn: 'Enviar Mensaje',
    linkedinDesc: 'Conectemos y hablemos de tecnología.',
    githubDesc: 'Revisa mis repositorios y código.',
    footerText: 'Todos los derechos reservados.',
  },
  en: {
    nav: ['About', 'Experience', 'Certifications', 'Projects', 'Stack', 'Testimonials', 'Vision', 'Contact'],
    welcome: '~/welcome to my portfolio',
    role: 'Software Engineer',
    university: 'Cooperative University of Colombia',
    tagline: 'Committed to transforming complex ideas into interactive and scalable web experiences.',
    downloadCV: 'Download CV',
    viewProjects: 'View projects',
    aboutTitle: '02. About Me',
    profileTitle: 'PROFESSIONAL PROFILE',
    profileItems: [
      'I am a <strong>developer in training</strong> focused on building robust and efficient software.',
      'Currently studying <strong>Software Engineering</strong>, with a strong analytical focus.',
      'Interested in <strong>systems architecture</strong>, modern web development and databases.',
      'My goal is to join a dynamic team where I can <strong>add value</strong> and keep learning.',
    ],
    focusTitle: 'Focus Areas',
    focusSubtitle: 'The disciplines where I concentrate my training and professional development.',
    focusAreas: [
      { title: 'Programming', desc: 'I write clean, structured and maintainable code applying best practices and design patterns.' },
      { title: 'Databases', desc: 'I design efficient relational schemas and optimize SQL queries for high-performance systems.' },
      { title: 'Web Development', desc: 'I build responsive and interactive interfaces with modern technologies like React and Next.js.' },
    ],
    techSkills: 'Technical Skills',
    softSkills: 'Soft Skills',
    softSkillsList: ['🤝 Teamwork','💬 Effective communication','🧩 Problem solving','⏱ Time management','🔄 Adaptability','📚 Continuous learning','🎯 Results-oriented','🗂 Agile methodologies','🧠 Analytical thinking','🤔 Critical thinking'],
    expTitle: '03. Academic & Work Experience',
    exp: [
      {
        badge: 'Academic (Current)',
        title: 'Software Engineering',
        sub: 'Universidad Cooperativa de Colombia',
        desc: 'Comprehensive training in computer science, algorithms, agile methodologies and systems architecture.',
        bullets: [
          'Developed academic projects applying design patterns and SOLID principles.',
          'Worked in Scrum teams to deliver functional software within deadlines.',
          'Implemented relational databases and optimized SQL queries.',
          'Strong academic performance with focus on programming and data structures courses.',
        ],
      },
      {
        badge: 'Internship / Work',
        title: 'Junior Developer (Freelance)',
        sub: 'Web Systems & Databases',
        desc: 'Built complete web applications for independent clients.',
        bullets: [
          'Designed and developed responsive interfaces using React and Tailwind CSS.',
          'Modeled relational databases and built REST APIs with Node.js.',
          'Delivered projects on time while maintaining constant client communication.',
          'Applied version control with Git and GitLab across all projects.',
        ],
      },
    ],
    projectsTitle: '04. My Projects',
    projects: [
      { title: 'MusicON', desc: 'MP3 music player with a fluid "liquid" interface. Upload MP3 files, manage a playlist and enjoy an immersive visual experience.', github: 'https://github.com/StevenInsuasti/MusicON', demo: 'https://music-on-six.vercel.app' },
      { title: 'Aerotickets', desc: 'Flight booking system with route search, seat selection and passenger management. Modern and intuitive interface simulating a real airline.', github: 'https://github.com/StevenInsuasti/Aerotickets', demo: 'https://aerotickets-frontend.vercel.app' },
      { title: 'Analog Clock', desc: 'Interactive analog clock with real-time animated hands and configurable alarm system. Built with vanilla JavaScript.', github: 'https://github.com/StevenInsuasti/RelojAnalogo', demo: 'https://reloj-analogo-beta.vercel.app' },
      { title: 'MercadoLibre Clone', desc: 'Functional clone of MercadoLibre with product listing, search and shopping cart. Practice project to master HTML, CSS and JavaScript.', github: 'https://github.com/StevenInsuasti/TalleGit', demo: 'https://steveninsuasti.github.io/TalleGit' },
      { title: 'YoJobs', desc: 'Professional social network inspired by LinkedIn. Allows user registration, profile creation, job posting and professional networking.', github: 'https://github.com/StevenInsuasti/RedSocialYoJobs', demo: 'https://red-social-yo-jobs.vercel.app/users/register' },
      { title: 'Multivariable Calculus', desc: 'Interactive app for multivariable calculus with 3D visualizations, gradients, double and triple integrals. Built with Python and Streamlit.', github: 'https://github.com/StevenInsuasti/AplicativoMultivariable', demo: 'https://aplicativomultivariable-proyecto.streamlit.app' },
    ],
    code: 'Code', demo: 'Demo', comingSoon: 'Coming soon',
    testimonialsTitle: '05. Testimonials',
    testimonials: [
      { quote: '"Steven has a great talent for solving complex problems. He delivered the project ahead of schedule and the code was very clean and easy to maintain."', name: 'Laura Gómez', role: 'Project Manager / Tech Corp' },
      { quote: '"Excellent student and professional. We worked on a database integration that exceeded our performance expectations."', name: 'Carlos Ruiz', role: 'CTO / InnovaTech' },
      { quote: '"His dedication to learning and implementing new tools is amazing. The interface he built is super intuitive and our users loved it."', name: 'Ana Martínez', role: 'UI/UX Designer' },
    ],
    certsTitle: '06. Certifications',
    certs: [
      { title: 'Frontend Web Development', issuer: 'Meta / Coursera', date: 'Sept 2023' },
      { title: 'Databases with SQL', issuer: 'Universidad Cooperativa', date: 'Mar 2023' },
      { title: 'Scrum Fundamentals', issuer: 'ScrumStudy', date: 'Jan 2024' },
      { title: 'GitLab 101', issuer: 'GitLab University', date: '2024' },
      { title: 'Modern JavaScript', issuer: 'Juan Pablo de la Torre — Udemy', date: '2024' },
      { title: 'Algorithms & Data Structures in JS', issuer: 'FreeCodeCamp', date: '2024' },
    ],
    stackTitle: '05. Tech Stack',
    stackSubtitle: 'Technologies and tools I work with on a daily basis.',
    goalsTitle: '07. Professional Vision',
    goalsSubtitle: 'What I am looking for and where I am headed.',
    goals: [
      { icon: '🎯', title: 'Role I am seeking', desc: 'Join as a Junior Frontend or Fullstack Developer in a team where I can contribute real solutions, learn from experienced professionals and grow within an agile and collaborative environment.' },
      { icon: '🚀', title: 'Technical growth', desc: 'Deepen my knowledge in scalable software architectures, cloud computing (AWS / GCP) and DevOps best practices. My goal is to become an engineer capable of designing robust systems end to end.' },
      { icon: '🤝', title: 'Team contribution', desc: 'I bring commitment, fast learning ability and a results-oriented mindset. I adapt easily to new environments and enjoy working in teams to solve complex problems.' },
      { icon: '🌍', title: 'Long-term vision', desc: "Participate in high-impact projects, ideally with international reach, where technology bridges the gap to improve people's lives. I aspire to lead technical teams in the future." },
    ],
    contactTitle: '08. Contact',
    sendMsg: 'Send me a message',
    nameLabel: 'Full Name', namePlaceholder: 'e.g. John Doe',
    emailLabel: 'Email Address', emailPlaceholder: 'john@example.com',
    msgLabel: 'Your Message', msgPlaceholder: 'Hi! I would like to talk about...',
    sendBtn: 'Send Message',
    linkedinDesc: "Let's connect and talk about technology.",
    githubDesc: 'Check out my repositories and code.',
    footerText: 'All rights reserved.',
  },
}

const navIds = ['sobre-mi', 'experiencia', 'certificaciones', 'proyectos', 'stack', 'testimonios', 'objetivos', 'contacto']

const techSkillsList = [
  { label: 'JavaScript / TypeScript', pct: 65 },
  { label: 'React / Next.js', pct: 70 },
  { label: 'SQL / Bases de Datos', pct: 70 },
  { label: 'Python', pct: 75 },
  { label: 'Git & Control de Versiones', pct: 78 },
  { label: 'HTML & CSS / Tailwind', pct: 70 },
  { label: 'Inglés / English', pct: 80 },
]

const projectImgs = [
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1501139083538-0139583c060f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
]
const projectTags = [
  [{ label: 'React', color: 'bg-[#bfdbfe]' }, { label: 'JavaScript', color: 'bg-[#fef08a]' }],
  [{ label: 'React', color: 'bg-[#bfdbfe]' }, { label: 'Node.js', color: 'bg-[#bbf7d0]' }],
  [{ label: 'JavaScript', color: 'bg-[#fef08a]' }, { label: 'CSS3', color: 'bg-[#bfdbfe]' }],
  [{ label: 'HTML', color: 'bg-[#fecaca]' }, { label: 'JavaScript', color: 'bg-[#fef08a]' }],
  [{ label: 'React', color: 'bg-[#bfdbfe]' }, { label: 'Node.js', color: 'bg-[#bbf7d0]' }],
  [{ label: 'Python', color: 'bg-[#fef08a]' }, { label: 'Streamlit', color: 'bg-[#e9d5ff]' }],
]
const testimonialImgs = [
  'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDE5MzY5NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzMDM4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1672462478040-a5920e2c23d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwcGVyc29uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0MzA4NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
]
const certColors = ['bg-[#bfdbfe]', 'bg-[#fef08a]', 'bg-[#bfdbfe]']

// ─── Stack data ───────────────────────────────────────────────────────────────
const stackCategories = [
  {
    icon: <Code2 size={20} />,
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    icon: <Database size={20} />,
    title: 'Backend & DB',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    icon: <Globe size={20} />,
    title: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    ],
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [dark, setDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSent, setFormSent] = useState(false)

  const tr = t[lang]

  // ── Theme tokens ──────────────────────────────────────────────────────────
  const bg      = dark
    ? 'bg-[#0f0f0f] bg-[radial-gradient(#2a2a2a_1.5px,transparent_1.5px)] [background-size:24px_24px] text-[#f0f0f0]'
    : 'bg-[#fafafa] bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] text-[#0f0f0f]'
  const box     = dark ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#e5e7eb]'
  const btn     = dark ? 'bg-[#bbf7d0] text-[#0f0f0f] hover:bg-[#86efac]' : 'bg-[#0f0f0f] text-white hover:bg-[#1a1a1a]'
  const input   = dark ? 'bg-[#1a1a1a] border-[#2a2a2a] text-[#f0f0f0] placeholder-[#555]' : 'bg-white border-[#e5e7eb] text-[#0f0f0f] placeholder-[#aaa]'
  const border  = dark ? 'border-[#2a2a2a]' : 'border-[#e5e7eb]'
  const muted   = dark ? 'text-[#888]' : 'text-[#666]'
  const sectionLine  = dark ? 'bg-[#bbf7d0]' : 'bg-[#0f0f0f]'
  const sectionTitle = (label: string, color = 'bg-[#bbf7d0]') => (
    <div className="flex items-center gap-3 mb-10">
      <span className={`inline-block px-4 py-1 text-2xl font-black tracking-tight text-black ${color} border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]`}>{label}</span>
      <span className={`flex-1 h-0.5 ${dark ? 'bg-white/20' : 'bg-black/20'}`} />
    </div>
  )

  // ── Scroll helper ─────────────────────────────────────────────────────────
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setFormSent(false), 4000)
  }

  // ── Nav icon helpers ──────────────────────────────────────────────────────
  const navIcons = [User, Briefcase, Award, ExternalLink, Code2, MessageSquareQuote, Star, Mail]

  return (
    <div className={`min-h-screen font-sans selection:bg-[#fef08a] ${bg}`}>

      {/* ── Toast ── */}
      {formSent && (
        <div className="fixed bottom-6 right-6 z-[100] bg-[#fef08a] text-[#0f0f0f] px-5 py-3 rounded-xl shadow-lg font-semibold text-sm animate-bounce">
          ✅ {lang === 'es' ? 'Mensaje enviado correctamente' : 'Message sent successfully'}
        </div>
      )}

      {/* ── Mobile top bar ── */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 border-b-2 ${border} ${dark ? 'bg-[#0f0f0f]' : 'bg-[#fafafa]'}`}>
        <button onClick={() => scrollToSection('inicio')} className="flex items-center gap-2">
          <ImageWithFallback src="/logo.png" alt="Logo" width={28} height={28} className="rounded" />
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-lg border ${border} ${dark ? 'bg-[#1a1a1a]' : 'bg-white'}`}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className={`px-2 py-1 rounded-lg border text-xs font-bold ${border} ${dark ? 'bg-[#1a1a1a]' : 'bg-white'}`}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg border ${border} ${dark ? 'bg-[#1a1a1a]' : 'bg-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed top-[53px] left-0 right-0 z-40 border-b-2 ${border} ${dark ? 'bg-[#0f0f0f]' : 'bg-[#fafafa]'} shadow-lg`}>
          <nav className="flex flex-col py-2">
            {tr.nav.map((label, i) => (
              <button
                key={navIds[i]}
                onClick={() => scrollToSection(navIds[i])}
                className={`flex items-center gap-3 px-5 py-3 text-sm font-medium hover:bg-[#fef08a] hover:text-[#0f0f0f] transition-colors text-left`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* ── Layout wrapper ── */}
      <div className="flex min-h-screen">

        {/* ── Sidebar (desktop only) ── */}
        <aside className={`hidden lg:flex flex-col fixed right-0 top-0 h-full w-[140px] z-50 border-l-2 border-gray-800 bg-[#0f0f0f] text-white`}>
          {/* Logo */}
          <div className="flex items-center justify-center h-[72px] border-b-2 border-gray-800">
            <button onClick={() => scrollToSection('inicio')} aria-label="Home"
              className="transition-transform duration-200 hover:scale-110 hover:-rotate-3 active:scale-95">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-10 h-10 rounded drop-shadow-md hover:drop-shadow-xl transition-all" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col flex-1 overflow-hidden">
            {navIds.map((id, i) => {
              const colors = [
                'hover:bg-[#fef08a] hover:border-l-[#fef08a]',
                'hover:bg-[#fecaca] hover:border-l-[#fecaca]',
                'hover:bg-[#d8b4fe] hover:border-l-[#d8b4fe]',
                'hover:bg-[#e9d5ff] hover:border-l-[#e9d5ff]',
                'hover:bg-[#bfdbfe] hover:border-l-[#bfdbfe]',
                'hover:bg-[#fed7aa] hover:border-l-[#fed7aa]',
                'hover:bg-[#bfdbfe] hover:border-l-[#bfdbfe]',
                'hover:bg-[#a7f3d0] hover:border-l-[#a7f3d0]',
              ]
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative flex items-center px-4 py-0 text-xs font-black uppercase tracking-widest text-left border-b border-gray-800 border-l-4 border-l-transparent transition-all duration-200 hover:text-[#0f0f0f] hover:pl-5 text-gray-400 ${colors[i]}`}
                  style={{flex: 1, minHeight: 0}}>
                  {tr.nav[i]}
                </button>
              )
            })}
          </nav>

          {/* Dark + Lang at bottom */}
          <div className="flex flex-col items-center gap-2 pb-4 border-t-2 border-gray-800 pt-4">
            <button
              onClick={() => setDark(!dark)}
              title={dark ? 'Light mode' : 'Dark mode'}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 transition-colors hover:bg-[#fef08a] hover:text-[#0f0f0f] bg-[#1a1a1a] text-gray-400"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 text-xs font-bold transition-colors hover:bg-[#fef08a] hover:text-[#0f0f0f] bg-[#1a1a1a] text-gray-400"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 lg:mr-[140px] pt-[53px] lg:pt-0">

          {/* ════════════════════════════════════════════════════════════════
              HERO
          ════════════════════════════════════════════════════════════════ */}
          <section id="inicio" className={`min-h-screen border-b-2 ${border} mb-24 relative overflow-hidden`}>

            {/* Floating code snippets — decorative background */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              <pre className={`absolute top-8 left-[30%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`const dev = {\n  name: "Steven",\n  role: "Software Eng.",\n  passion: "clean code"\n};`}</pre>
              <pre className={`absolute top-12 right-[20%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`function build(idea) {\n  return idea\n    .design()\n    .develop()\n    .deploy();\n}`}</pre>
              <pre className={`absolute bottom-[30%] left-[38%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`if (problem) {\n  solve(it);\n} else {\n  improve();\n}`}</pre>
              <pre className={`absolute bottom-16 right-[22%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`git commit -m\n  "feat: new idea"\ngit push origin\n  main`}</pre>
            </div>

            {/* Social icons — fixed right column */}
            <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
              <a href="https://github.com/StevenInsuasti" target="_blank" rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] ${dark ? 'bg-[#1a1a1a] hover:bg-[#fef08a] hover:text-[#0f0f0f]' : 'bg-white hover:bg-black hover:text-white'} transition-colors`}>
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/steven-eraso-insuasti/" target="_blank" rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] ${dark ? 'bg-[#1a1a1a] hover:bg-[#fef08a] hover:text-[#0f0f0f]' : 'bg-white hover:bg-black hover:text-white'} transition-colors`}>
                <Linkedin size={18} />
              </a>
              <a href="mailto:steveninsuasti@gmail.com"
                className={`p-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] ${dark ? 'bg-[#1a1a1a] hover:bg-[#fef08a] hover:text-[#0f0f0f]' : 'bg-white hover:bg-black hover:text-white'} transition-colors`}>
                <Mail size={18} />
              </a>
              <a href="https://wa.me/573017824030" target="_blank" rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] ${dark ? 'bg-[#1a1a1a] hover:bg-[#fef08a]' : 'bg-white hover:bg-black'} transition-colors group`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://img.icons8.com/?size=100&id=16733&format=png&color=${dark ? 'ffffff' : '000000'}`} alt="WhatsApp" className="w-[18px] h-[18px] group-hover:invert" />
              </a>
            </div>

            {/* Main 3-col grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 min-h-screen px-6 py-12 gap-6 relative z-10">

              {/* ── Col 1: name + role + stack badges ── */}
              <div className="flex flex-col gap-4 justify-between py-4">
                <div className="flex flex-col gap-3">
                  <span className="inline-block bg-[#fef08a] text-[#0f0f0f] text-xs font-bold px-3 py-1 rounded-full w-fit">
                    {tr.welcome}
                  </span>
                  <div className="mt-6">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-none">
                      Steven<br />Eraso<br />Insuasti
                    </h1>
                    <p className="text-xl font-semibold mt-3">{tr.role}</p>
                    <p className={`text-sm ${muted} flex items-center gap-2 mt-1`}>
                      <GraduationCap size={16} />
                      {tr.university}
                    </p>
                  </div>
                </div>

                {/* Stack badges */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className={`inline-block w-4 h-[2px] ${dark ? 'bg-[#fecaca]' : 'bg-black'}`}/>
                    {lang === 'es' ? 'Stack Principal' : 'Main Stack'}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
                      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                    ].map((tech) => (
                      <div key={tech.name} className={`flex flex-col items-center gap-1 p-2 rounded-xl border ${border} ${dark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                        <span className="text-[9px] font-bold">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Col 2: photo full height ── */}
              <div className="flex justify-center items-stretch py-4">
                <div className={`relative w-full rounded-2xl overflow-hidden border-4 ${border} shadow-xl`} style={{minHeight: '70vh'}}>
                  <ImageWithFallback
                    src="/steven.png"
                    alt="Steven Eraso Insuasti"
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                </div>
              </div>

              {/* ── Col 3: tagline + buttons + stats ── */}
              <div className="flex flex-col gap-5 justify-between py-4 pr-16">
                {/* Top space aligned with social icons height (~4 icons * ~52px = ~210px) */}
                <div>
                  <div className="hidden md:block mb-[220px]" />
                  <p className="text-xl leading-relaxed mb-6 font-light italic tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                    {tr.tagline}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors ${btn}`}>
                      <Download size={16} />{tr.downloadCV}
                    </a>
                    <button onClick={() => scrollToSection('proyectos')}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border-2 ${border} transition-colors hover:bg-[#bfdbfe] hover:text-[#0f0f0f] hover:border-[#bfdbfe]`}>
                      <ChevronRight size={16} />{tr.viewProjects}
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="inline-block w-4 h-[2px] bg-[#6366f1]"/>
                    {lang === 'es' ? 'Estadísticas' : 'Stats'}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '3+', label: lang === 'es' ? 'Proyectos' : 'Projects', color: 'bg-[#bfdbfe]' },
                      { value: '6+', label: lang === 'es' ? 'Certificaciones' : 'Certifications', color: 'bg-[#e9d5ff]' },
                      { value: '16+', label: lang === 'es' ? 'Tecnologías' : 'Technologies', color: 'bg-[#fef08a]' },
                      { value: '80%', label: lang === 'es' ? 'Inglés' : 'English', color: 'bg-[#fecaca]' },
                    ].map((stat, i) => (
                      <div key={i} className={`rounded-xl border-2 border-black p-3 text-center ${stat.color}`}>
                        <p className="text-2xl font-black text-[#0f0f0f]">{stat.value}</p>
                        <p className="text-[10px] font-bold text-[#0f0f0f]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              SOBRE MÍ
          ════════════════════════════════════════════════════════════════ */}
          <section id="sobre-mi" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.aboutTitle, 'bg-[#fef08a]')}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Profile */}
                <div className={`rounded-2xl border-2 p-6 ${box}`}>
                  <h3 className="text-xs font-bold tracking-widest mb-4 text-white bg-black px-2 py-1 rounded w-fit">
                    {tr.profileTitle}
                  </h3>
                  <ul className="space-y-3">
                    {tr.profileItems.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed">
                        <ChevronRight size={16} className="mt-0.5 shrink-0 text-black" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Focus areas */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{tr.focusTitle}</h3>
                    <p className={`text-sm ${muted}`}>{tr.focusSubtitle}</p>
                  </div>
                  {tr.focusAreas.map((area, i) => {
                    const icons = [<Code2 key={0} size={18} />, <Database key={1} size={18} />, <Globe key={2} size={18} />]
                    return (
                      <div key={i} className={`flex gap-4 p-4 rounded-xl border-2 ${box}`}>
                        <div className="shrink-0 w-9 h-9 rounded-lg bg-[#bfdbfe] text-[#0f0f0f] flex items-center justify-center">
                          {icons[i]}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{area.title}</p>
                          <p className={`text-xs mt-1 ${muted}`}>{area.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tech skills */}
                <div className={`rounded-2xl border-2 p-6 ${box}`}>
                  <h3 className="font-bold mb-5">{tr.techSkills}</h3>
                  <div className="space-y-4">
                    {techSkillsList.map((skill) => (
                      <div key={skill.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.label}</span>
                          <span className={muted}>{skill.pct}%</span>
                        </div>
                        <div className={`h-2 rounded-full ${dark ? 'bg-[#2a2a2a]' : 'bg-[#e5e7eb]'}`}>
                          <div
                            className="h-2 rounded-full bg-[#6366f1]"
                            style={{ width: `${skill.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft skills */}
                <div className={`rounded-2xl border-2 p-6 ${box} flex flex-col`}>
                  <h3 className="font-bold mb-5">{tr.softSkills}</h3>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {tr.softSkillsList.map((skill, i) => {
                      const colors = ['bg-[#fef08a]','bg-[#bfdbfe]','bg-[#fecaca]','bg-[#e9d5ff]','bg-[#fed7aa]','bg-[#d8b4fe]','bg-[#fef08a]','bg-[#bfdbfe]','bg-[#fecaca]','bg-[#e9d5ff]']
                      return (
                        <div key={skill} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#0f0f0f] ${colors[i]}`}>
                          {skill}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              EXPERIENCIA
          ════════════════════════════════════════════════════════════════ */}
          <section id="experiencia" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.expTitle, 'bg-[#fecaca]')}
              <div className="space-y-6">
                {tr.exp.map((item, i) => (
                  <div key={i} className={`rounded-2xl border-2 p-6 ${box}`}>
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <span className="text-xs font-bold bg-[#fef08a] text-[#0f0f0f] px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                        <p className={`text-sm ${muted}`}>{item.sub}</p>
                      </div>
                    </div>
                    <p className={`text-sm mb-4 ${muted}`}>{item.desc}</p>
                    <ul className="space-y-2">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm">
                          <ChevronRight size={16} className="mt-0.5 shrink-0 text-[#6366f1]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              CERTIFICACIONES
          ════════════════════════════════════════════════════════════════ */}
          <section id="certificaciones" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.certsTitle, 'bg-[#d8b4fe]')}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tr.certs.map((cert, i) => (
                  <div key={i} className={`rounded-2xl border-2 p-5 ${box} flex flex-col gap-2`}>
                    <div className={`w-8 h-8 rounded-lg ${certColors[i % certColors.length]} flex items-center justify-center`}>
                      <Award size={16} className="text-[#0f0f0f]" />
                    </div>
                    <p className="font-semibold text-sm leading-snug">{cert.title}</p>
                    <p className={`text-xs ${muted}`}>{cert.issuer}</p>
                    <p className={`text-xs font-bold ${muted}`}>{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              PROYECTOS
          ════════════════════════════════════════════════════════════════ */}
          <section id="proyectos" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.projectsTitle, 'bg-[#e9d5ff]')}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tr.projects.map((project, i) => (
                  <div key={i} className={`rounded-2xl border-2 overflow-hidden ${box} flex flex-col`}>
                    <div className="relative h-44 overflow-hidden">
                      <ImageWithFallback
                        src={projectImgs[i]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {projectTags[i].map((tag) => (
                          <span key={tag.label} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tag.color} text-[#0f0f0f]`}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className={`text-sm ${muted} flex-1`}>{project.desc}</p>
                      <div className="flex gap-3 mt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border ${border} hover:bg-[#fef08a] hover:text-[#0f0f0f] transition-colors`}
                        >
                          <Github size={13} /> {tr.code}
                        </a>
                        {project.demo
                          ? <a href={project.demo} target="_blank" rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg ${btn} transition-colors`}>
                              <ExternalLink size={13} /> {tr.demo}
                            </a>
                          : <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border ${border} opacity-40 cursor-not-allowed`}>
                              <ExternalLink size={13} /> {tr.comingSoon}
                            </span>
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              STACK
          ════════════════════════════════════════════════════════════════ */}
          <section id="stack" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.stackTitle, 'bg-[#bbf7d0]')}
              <p className={`text-sm ${muted} mb-8`}>{tr.stackSubtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stackCategories.map((cat, i) => (
                  <div key={i} className={`rounded-2xl border-2 p-6 ${box}`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-[#bfdbfe] text-[#0f0f0f] flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <h3 className="font-bold">{cat.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.items.map((item) => (
                        <div key={item.name} className={`flex items-center gap-2 p-2 rounded-xl border ${border} ${dark ? 'bg-[#0f0f0f]' : 'bg-[#f9fafb]'}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.icon} alt={item.name} className="w-6 h-6 shrink-0" />
                          <span className="text-xs font-semibold truncate">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              TESTIMONIOS
          ════════════════════════════════════════════════════════════════ */}
          <section id="testimonios" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.testimonialsTitle, 'bg-[#fed7aa]')}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tr.testimonials.map((t, i) => (
                  <div key={i} className={`rounded-2xl border-2 p-6 ${box} flex flex-col gap-4`}>
                    <MessageSquareQuote size={24} className="text-[#6366f1]" />
                    <p className={`text-sm leading-relaxed italic ${muted}`}>{t.quote}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#bbf7d0] shrink-0">
                        <ImageWithFallback
                          src={testimonialImgs[i]}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className={`text-xs ${muted}`}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              OBJETIVOS / VISIÓN
          ════════════════════════════════════════════════════════════════ */}
          <section id="objetivos" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.goalsTitle, 'bg-[#bfdbfe]')}
              <p className={`text-sm ${muted} mb-8`}>{tr.goalsSubtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tr.goals.map((goal, i) => {
                  const icons8 = [
                    'https://img.icons8.com/pulsar-color/50/job.png',
                    'https://img.icons8.com/pulsar-color/50/growth.png',
                    'https://img.icons8.com/pulsar-color/50/conference-call.png',
                    'https://img.icons8.com/pulsar-color/50/rocket.png',
                  ]
                  return (
                    <div key={i} className={`rounded-2xl border-2 p-6 ${box} flex gap-4`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={icons8[i]} alt={goal.title} className="w-12 h-12 shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">{goal.title}</h3>
                        <p className={`text-sm leading-relaxed ${muted}`}>{goal.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              CONTACTO
          ════════════════════════════════════════════════════════════════ */}
          <section id="contacto" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.contactTitle, 'bg-[#a7f3d0]')}

              {/* CTA Banner */}
              <div className="relative overflow-hidden mb-8 p-8 md:p-10 rounded-2xl bg-black text-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
                <div className="absolute -right-6 -top-6 opacity-5"><Send size={120} /></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-mono text-green-400 mb-2">
                      {lang === 'es' ? '¿Tienes un proyecto en mente?' : 'Got a project in mind?'}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                      {lang === 'es'
                        ? <>Trabajemos <span className="underline decoration-[#06b6d4] decoration-4">juntos</span></>
                        : <>Let&apos;s work <span className="underline decoration-[#06b6d4] decoration-4">together</span></>}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300 max-w-md">
                      {lang === 'es'
                        ? 'Estoy disponible para proyectos freelance, prácticas profesionales o simplemente para conectar.'
                        : "I'm available for freelance projects, internships or just to connect."}
                    </p>
                  </div>
                  <button
                    onClick={() => window.open('https://wa.me/573017824030', '_blank')}
                    className="shrink-0 inline-flex items-center gap-3 bg-[#06b6d4] text-black font-black py-4 px-8 rounded-xl text-lg hover:bg-[#0891b2] transition-colors uppercase tracking-wide"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://img.icons8.com/color/30/whatsapp--v1.png" alt="WhatsApp" className="w-6 h-6" />
                    WhatsApp
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form */}
                <div className={`rounded-2xl border-2 p-6 ${box}`}>
                  <h3 className="font-bold mb-5">{tr.sendMsg}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${muted}`}>{tr.nameLabel}</label>
                      <input
                        type="text"
                        required
                        placeholder={tr.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border-2 text-sm outline-none focus:border-[#bbf7d0] transition-colors ${input}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${muted}`}>{tr.emailLabel}</label>
                      <input
                        type="email"
                        required
                        placeholder={tr.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border-2 text-sm outline-none focus:border-[#bbf7d0] transition-colors ${input}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${muted}`}>{tr.msgLabel}</label>
                      <textarea
                        required
                        rows={4}
                        placeholder={tr.msgPlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border-2 text-sm outline-none focus:border-[#bbf7d0] transition-colors resize-none ${input}`}
                      />
                    </div>
                    <button
                      type="submit"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors ${btn}`}
                    >
                      <Send size={16} />
                      {tr.sendBtn}
                    </button>
                  </form>
                </div>

                {/* Contact links */}
                <div className="flex flex-col gap-4">
                  {[
                    { href: 'https://linkedin.com/in/steven-eraso-insuasti/', Icon: Linkedin, label: 'LinkedIn', desc: tr.linkedinDesc },
                    { href: 'https://github.com/StevenInsuasti', Icon: Github, label: 'GitHub', desc: tr.githubDesc },
                    { href: 'mailto:steveninsuasti@gmail.com', Icon: Mail, label: 'Email', desc: 'steveninsuasti@gmail.com' },
                    { href: 'https://wa.me/573017824030', Icon: null, label: 'WhatsApp', desc: '+57 301 782 4030' },
                  ].map(({ href, Icon, label, desc }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-5 rounded-2xl border-2 ${box} hover:border-[#06b6d4] transition-colors group`}>
                      <div className={`w-11 h-11 rounded-xl border-2 ${border} flex items-center justify-center shrink-0 ${dark ? 'bg-[#1a1a1a]' : 'bg-white'} group-hover:bg-[#06b6d4] group-hover:border-[#06b6d4] transition-colors`}>
                        {Icon
                          ? <Icon size={20} />
                          : /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={`https://img.icons8.com/?size=100&id=16733&format=png&color=${dark ? 'ffffff' : '000000'}`} alt="WhatsApp" className="w-5 h-5 group-hover:brightness-0" />
                        }
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{label}</p>
                        <p className={`text-xs ${muted}`}>{desc}</p>
                      </div>
                      <ExternalLink size={16} className={`ml-auto ${muted} group-hover:text-current`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Footer ── */}
          <footer className="bg-[#0f0f0f] text-white mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                {/* Col 1 — Brand */}
                <div>
                  <button onClick={() => scrollToSection('inicio')}>
                    <ImageWithFallback src="/logo.png" alt="Logo" className="h-14 w-auto mb-4 hover:scale-105 transition-transform" />
                  </button>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
                    {lang === 'es'
                      ? 'Estudiante de Ingeniería de Software comprometido con construir soluciones web modernas, escalables y de impacto real.'
                      : 'Software Engineering student committed to building modern, scalable and impactful web solutions.'}
                  </p>
                  <div className="flex gap-3">
                    {[
                      { Icon: Github, href: 'https://github.com/StevenInsuasti' },
                      { Icon: Linkedin, href: 'https://www.linkedin.com/in/steven-eraso-insuasti/' },
                      { Icon: Mail, href: 'mailto:steveninsuasti@gmail.com' },
                      { Icon: null, href: 'https://wa.me/573017824030' },
                    ].map(({ Icon, href }, i) => (
                      <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-all rounded-lg">
                        {Icon
                          ? <Icon size={16} />
                          : /* eslint-disable-next-line @next/next/no-img-element */
                            <img src="https://img.icons8.com/?size=100&id=16733&format=png&color=ffffff" alt="WhatsApp" className="w-4 h-4" />
                        }
                      </a>
                    ))}
                  </div>
                </div>

                {/* Col 2 — Quick links */}
                <div>
                  <h4 className="font-black uppercase tracking-widest text-sm mb-5 border-b border-gray-700 pb-2">
                    {lang === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
                  </h4>
                  <ul className="space-y-2">
                    {tr.nav.map((label, i) => (
                      <li key={navIds[i]}>
                        <button onClick={() => scrollToSection(navIds[i])}
                          className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors">
                          <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3 — Contact */}
                <div>
                  <h4 className="font-black uppercase tracking-widest text-sm mb-5 border-b border-gray-700 pb-2">
                    {lang === 'es' ? 'Contacto' : 'Contact'}
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-center gap-3">
                      <Mail size={14} className="shrink-0" />
                      <a href="mailto:steveninsuasti@gmail.com" className="hover:text-white transition-colors">steveninsuasti@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Github size={14} className="shrink-0" />
                      <a href="https://github.com/StevenInsuasti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/StevenInsuasti</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Linkedin size={14} className="shrink-0" />
                      <a href="https://www.linkedin.com/in/steven-eraso-insuasti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">/in/steven-eraso-insuasti</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={14} className="shrink-0" />
                      <a href="https://wa.me/573017824030" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+57 301 782 4030</a>
                    </li>
                    <li className="flex items-center gap-3 mt-2">
                      <span className="text-xs font-mono text-green-400">📍</span>
                      <span>Pasto, Nariño, Colombia</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Steven Eraso Insuasti — {tr.footerText}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>Built with</span>
                  <span className="px-2 py-0.5 border border-gray-700 text-gray-400">Next.js</span>
                  <span className="px-2 py-0.5 border border-gray-700 text-gray-400">TypeScript</span>
                  <span className="px-2 py-0.5 border border-gray-700 text-gray-400">Tailwind</span>
                </div>
              </div>
            </div>
          </footer>

        </main>
      </div>
    </div>
  )
}

