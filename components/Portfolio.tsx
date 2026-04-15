'use client'

import { useState } from 'react'
import {
  Code2, Database, Globe,
  Github, Linkedin, Mail, Download,
  ChevronRight, Briefcase, GraduationCap,
  User, Send, ExternalLink, MessageSquareQuote,
  Award, Star, Menu, X, Sun, Moon, Phone, MapPin, Eye,
} from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'
import MetaballsBadge from './MetaballsBadge'
import SidebarTrail from './SidebarTrail'

// --- Translations -------------------------------------------------------------
const t = {
  es: {
    nav: ['Acerca de Mí', 'Stack', 'Proyectos', 'Experiencia', 'Certificaciones', 'Testimonios', 'Visión', 'Contacto'],
    welcome: '~/bienvenidos a mi portafolio',
    role: 'Ingeniero de Software',
    university: 'Universidad Cooperativa de Colombia',
    tagline: 'Comprometido con transformar ideas complejas en experiencias web interactivas y escalables.',
    downloadCV: 'Descargar CV',
    viewProjects: 'Ver proyectos',
    aboutTitle: '01. Acerca de Mí',
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
    expTitle: '04. Experiencia Académica y Laboral',
    exp: [
      {
        badge: 'Académico (Actualidad)',
        title: 'Ingeniería de Software',
        sub: 'Universidad Cooperativa de Colombia · 5.º semestre',
        desc: 'Formación en arquitectura de software, estructuras de datos, algoritmos y desarrollo de sistemas completos aplicando metodologías ágiles.',
        bullets: [
          'Arquitectura y desarrollo de sistemas completos, como un Sistema de Gestión de Turnos para laboratorios, aplicando principios SOLID e integrando backend en Java con bases de datos como MongoDB.',
          'Aplicación práctica de Scrum y diseño UI/UX en el desarrollo de aplicaciones y prototipos interactivos.',
          'Implementación de estructuras de datos avanzadas (listas enlazadas, árboles, grafos) en proyectos funcionales.',
          'Promedio académico destacado con enfoque en programación, bases de datos y arquitectura de sistemas.',
        ],
      },
      {
        badge: 'Prácticas / Laboral',
        title: 'Desarrollador Junior (Freelance)',
        sub: 'Sistemas Web & Bases de Datos',
        desc: 'Desarrollo de aplicaciones web completas para clientes independientes, desde la toma de requerimientos hasta el despliegue en producción.',
        bullets: [
          'Diseño y desarrollo de interfaces altamente responsivas y optimizadas con React y Tailwind CSS, priorizando la experiencia de usuario (UX).',
          'Modelado de bases de datos relacionales y creación de APIs REST con Node.js y PostgreSQL.',
          'Gestión integral de proyectos end-to-end, asegurando comunicación constante con el cliente y cumplimiento de plazos.',
          'Implementación de control de versiones con Git y GitLab en todos los proyectos.',
        ],
      },
    ],
    projectsTitle: '03. Mis Proyectos',
    projects: [
      { title: 'MusicON', desc: 'Reproductor de música MP3 con interfaz fluida tipo "liquid". Permite subir archivos MP3, gestionar una lista de reproducción y disfrutar de una experiencia visual inmersiva.', github: 'https://github.com/StevenInsuasti/MusicON', demo: 'https://music-on-six.vercel.app',
        detail: { title: 'MusicON — Reproductor de Música Web', subtitle: 'Plataforma Full-stack · Next.js + Python', body: 'Construí un reproductor web que permite subir archivos MP3 y gestionarlos en una playlist interactiva: reproducir, pausar, navegar, reordenar y marcar favoritos desde el navegador.', stack: 'Next.js 14 · TypeScript · Tailwind · Python/Flask · Vercel + Render', challenge: 'La playlist está implementada como una lista doblemente enlazada desde cero en Python, lo que permite mover canciones sin recalcular toda la lista. El reto fue mantener los punteros prev y next consistentes en cada operación y exponerlos como endpoints REST consumidos en tiempo real por el frontend.' } },
      { title: 'Aerotickets', desc: 'Sistema de reservas de vuelos con búsqueda de rutas, selección de asientos y gestión de pasajeros. Interfaz moderna e intuitiva para simular una aerolínea real.', github: 'https://github.com/StevenInsuasti/Aerotickets', demo: 'https://aerotickets-frontend.vercel.app',
        detail: { title: 'Aerotickets — Plataforma de Reservas de Vuelos', subtitle: 'Full-stack · Spring Boot + React', body: 'Plataforma para reservar vuelos domésticos en Colombia: búsqueda por ruta y fecha, selección de asientos, pago en línea, chatbot de IA para asistencia y seguimiento de vuelos en tiempo real.', stack: 'Spring Boot 3 · Java · PostgreSQL · React · TypeScript · Tailwind · Stripe · OpenAI API · Docker · Vercel + Render', challenge: 'Si dos usuarios intentaban reservar el mismo asiento al mismo tiempo, ambos lo veían disponible y podían confirmarlo. Lo resolví con optimistic locking — cada reserva tiene un campo version que PostgreSQL usa para detectar conflictos: si dos operaciones tocan el mismo registro a la vez, la segunda falla de forma controlada en lugar de guardar datos inconsistentes.' } },
      { title: 'Reloj Análogo', desc: 'Reloj analógico interactivo con manecillas animadas en tiempo real y sistema de alarma configurable. Desarrollado con JavaScript puro.', github: 'https://github.com/StevenInsuasti/RelojAnalogo', demo: 'https://reloj-analogo-beta.vercel.app',
        detail: { title: 'Reloj Análogo — Reloj Mundial con Alarmas', subtitle: 'Full-stack · Python/Flask + Canvas API', body: 'Reloj analógico que muestra la hora en tiempo real de cualquier zona horaria del mundo, con sistema de alarmas y sonido personalizado. El reloj se dibuja completamente con código usando HTML5 Canvas, sin imágenes.', stack: 'Python · Flask · HTML5 Canvas · JavaScript · Intl API · Vercel', challenge: 'El reloj original usaba una lista circular doblemente enlazada en Python con un thread que hacía tick cada segundo — funciona perfecto en local, pero Vercel es serverless: no hay procesos persistentes. Lo resolví eliminando el estado del servidor por completo y delegando todo el manejo del tiempo al navegador con Intl.DateTimeFormat, que soporta cualquier zona horaria de forma nativa. El backend pasó a ser stateless y el frontend calcula la hora correcta en cada tick.' } },
      { title: 'Clon Mercado Libre', desc: 'Clon funcional de Mercado Libre con listado de productos, búsqueda y carrito de compras. Proyecto de práctica para dominar HTML, CSS y JavaScript.', github: 'https://github.com/StevenInsuasti/TalleGit', demo: 'https://steveninsuasti.github.io/TalleGit',
        detail: { title: 'Clon Mercado Libre — Landing Page Colaborativa', subtitle: 'Proyecto en equipo · HTML + CSS + JavaScript', body: 'Repliqué la experiencia de MercadoLibre Colombia trabajando en equipo con un flujo real de GitFlow: ramas por feature, Pull Requests y resolución de conflictos. El objetivo no era solo la página, sino aprender a colaborar como lo haría un equipo profesional.', stack: 'HTML5 · CSS3 · JavaScript vanilla · Git/GitHub · GitHub Pages', challenge: 'Al hacer merge de las ramas, el index.html quedó lleno de conflictos porque todos tocaban el mismo archivo. Lo resolví analizando manualmente cada sección, eliminando duplicados y unificando la estructura. Desde ahí establecimos una regla: cada desarrollador con su propio archivo CSS independiente para evitar futuros choques.' } },
      { title: 'YoJobs', desc: 'Red social profesional inspirada en LinkedIn. Permite registro de usuarios, creación de perfil, publicación de ofertas laborales y conexión entre profesionales.', github: 'https://github.com/StevenInsuasti/RedSocialYoJobs', demo: 'https://red-social-yo-jobs.vercel.app/users/register',
        detail: { title: 'YoJobs — Red Social Profesional', subtitle: 'Full-stack · Django + PostgreSQL', body: 'Un LinkedIn simplificado: perfiles profesionales, publicación de ofertas laborales, solicitudes de conexión y mensajes directos entre usuarios.', stack: 'Django · PostgreSQL (Neon) · WhiteNoise · Pillow · Vercel · HTML/CSS', challenge: 'Django no está pensado para entornos serverless y SQLite no funciona en sistemas de archivos de solo lectura como el de Vercel. Lo resolví migrando la base de datos a PostgreSQL en Neon, usando WhiteNoise para servir los archivos estáticos directamente desde Django, y configurando el vercel.json para enrutar todo al WSGI. El resultado: una app Django completamente funcional corriendo en infraestructura serverless.' } },
      { title: 'Cálculo Multivariable', desc: 'Aplicativo interactivo para cálculo multivariable con visualizaciones 3D, gradientes, integrales dobles y triples. Desarrollado con Python y Streamlit.', github: 'https://github.com/StevenInsuasti/AplicativoMultivariable', demo: 'https://aplicativomultivariable-proyecto.streamlit.app',
        detail: { title: 'Cálculo Multivariable — Herramienta Educativa Interactiva', subtitle: 'Python · Streamlit + SymPy', body: 'Herramienta que permite explorar cálculo multivariable de forma visual: superficies 3D, gradientes, integrales dobles/triples y optimización con Lagrange. El usuario ingresa cualquier función y la app calcula y grafica todo en tiempo real, sin escribir código.', stack: 'Python · Streamlit · SymPy · NumPy · mpmath · Plotly', challenge: 'SymPy no siempre puede resolver integrales o límites complejos — simplemente falla. Lo resolví con un sistema de fallback en dos capas: primero intenta resolverlo simbólicamente, y si lanza una excepción, cae automáticamente a evaluación numérica con mpmath. Así la app funciona con cualquier función que el usuario ingrese, sin romperse.' } },
    ],
    code: 'Código', demo: 'Demo', comingSoon: 'Próximamente',
    testimonialsTitle: '06. Testimonios',
    testimonials: [
      { quote: '"Trabajar con Steven fue una experiencia muy positiva. Tiene una gran capacidad para entender los problemas rápidamente y proponer soluciones claras y efectivas. Se nota su interés por aprender constantemente y mejorar en cada proyecto."', name: 'Ingrid Lizeth Insuasti', role: 'Colega / Colaboradora' },
      { quote: '"Steven es una persona muy dedicada al desarrollo de software. Algo que valoro mucho es su capacidad para explicar ideas complejas de manera sencilla. Es alguien confiable, organizado y enfocado en entregar resultados de calidad."', name: 'Martin Alejandro Melo', role: 'Desarrollador / Colega' },
      { quote: '"Steven tiene una excelente actitud para el trabajo en equipo. Sabe escuchar, aportar ideas y adaptarse a diferentes situaciones. Sin duda, es alguien en quien se puede confiar para sacar adelante cualquier desarrollo."', name: 'Jose Arnovi Agudelo', role: 'Compañero de equipo' },
      { quote: '"Me impresionó la creatividad de Steven al momento de diseñar y desarrollar soluciones. No solo se enfoca en que funcione, sino en que sea intuitivo y bien estructurado. Es una persona comprometida con muy buena ética de trabajo."', name: 'Michael Andres Ordoñez', role: 'Colaborador / Proyecto' },
    ],
    certsTitle: '05. Certificaciones',
    certs: [
      { title: 'Desarrollo Web Frontend', issuer: 'Meta / Coursera', date: 'Mar 2024' },
      { title: 'Bases de Datos con SQL', issuer: 'Universidad Cooperativa', date: 'Jun 2024' },
      { title: 'Inglés B2 — Intermedio Alto', issuer: 'Cambridge Academy', date: 'Sep 2024' },
      { title: 'GitLab 101', issuer: 'GitLab University', date: 'Nov 2024' },
      { title: 'JavaScript Moderno', issuer: 'Juan Pablo de la Torre — Udemy', date: 'Ene 2025' },
      { title: 'Algoritmos y Estructuras de Datos en JS', issuer: 'FreeCodeCamp', date: 'Mar 2025' },
    ],
    stackTitle: '02. Stack Tecnológico',
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
  },  en: {
    nav: ['About', 'Stack', 'Projects', 'Experience', 'Certifications', 'Testimonials', 'Vision', 'Contact'],
    welcome: '~/welcome to my portfolio',
    role: 'Software Engineer',
    university: 'Cooperative University of Colombia',
    tagline: 'Committed to transforming complex ideas into interactive and scalable web experiences.',
    downloadCV: 'Download CV',
    viewProjects: 'View projects',
    aboutTitle: '01. About Me',
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
    softSkillsList: ['?? Teamwork','?? Effective communication','?? Problem solving','? Time management','?? Adaptability','?? Continuous learning','?? Results-oriented','?? Agile methodologies','?? Analytical thinking','?? Critical thinking'],
    expTitle: '04. Academic & Work Experience',
    exp: [
      {
        badge: 'Academic (Current)',
        title: 'Software Engineering',
        sub: 'Universidad Cooperativa de Colombia · 5th semester',
        desc: 'Training in software architecture, data structures, algorithms and full system development using agile methodologies.',
        bullets: [
          'Architecture and development of complete systems, such as a Lab Queue Management System, applying SOLID principles and integrating a Java backend with MongoDB.',
          'Practical application of Scrum and UI/UX design in the development of applications and interactive prototypes.',
          'Implementation of advanced data structures (linked lists, trees, graphs) in functional projects.',
          'Strong academic performance with focus on programming, databases and systems architecture.',
        ],
      },
      {
        badge: 'Internship / Work',
        title: 'Junior Developer (Freelance)',
        sub: 'Web Systems & Databases',
        desc: 'Full-stack web development for independent clients, from requirements gathering to production deployment.',
        bullets: [
          'Designed and developed highly responsive, optimized interfaces with React and Tailwind CSS, prioritizing user experience (UX).',
          'Modeled relational databases and built REST APIs with Node.js and PostgreSQL.',
          'End-to-end project management, ensuring constant client communication and on-time delivery.',
          'Applied version control with Git and GitLab across all projects.',
        ],
      },
    ],
    projectsTitle: '03. My Projects',
    projects: [
      { title: 'MusicON', desc: 'MP3 music player with a fluid "liquid" interface. Upload MP3 files, manage a playlist and enjoy an immersive visual experience.', github: 'https://github.com/StevenInsuasti/MusicON', demo: 'https://music-on-six.vercel.app',
        detail: { title: 'MusicON — Web Music Player', subtitle: 'Full-stack Platform · Next.js + Python', body: 'I built a web player that lets users upload MP3 files and manage them in an interactive playlist: play, pause, navigate, reorder and mark favorites — all from the browser.', stack: 'Next.js 14 · TypeScript · Tailwind · Python/Flask · Vercel + Render', challenge: 'The playlist is implemented as a doubly linked list from scratch in Python, allowing songs to be moved without recalculating the entire list. The challenge was keeping the prev and next pointers consistent across every operation and exposing them as REST endpoints consumed in real time by the frontend.' } },
      { title: 'Aerotickets', desc: 'Flight booking system with route search, seat selection and passenger management. Modern and intuitive interface simulating a real airline.', github: 'https://github.com/StevenInsuasti/Aerotickets', demo: 'https://aerotickets-frontend.vercel.app',
        detail: { title: 'Aerotickets — Flight Booking Platform', subtitle: 'Full-stack · Spring Boot + React', body: 'Platform for booking domestic flights in Colombia: route and date search, seat selection, online payment, AI chatbot for assistance and real-time flight tracking.', stack: 'Spring Boot 3 · Java · PostgreSQL · React · TypeScript · Tailwind · Stripe · OpenAI API · Docker · Vercel + Render', challenge: 'If two users tried to book the same seat at the same time, both would see it as available and could confirm it. I solved this with optimistic locking — each reservation has a version field that PostgreSQL uses to detect conflicts: if two operations touch the same record at once, the second one fails in a controlled way instead of saving inconsistent data.' } },
      { title: 'Analog Clock', desc: 'Interactive analog clock with real-time animated hands and configurable alarm system. Built with vanilla JavaScript.', github: 'https://github.com/StevenInsuasti/RelojAnalogo', demo: 'https://reloj-analogo-beta.vercel.app',
        detail: { title: 'Analog Clock — World Clock with Alarms', subtitle: 'Full-stack · Python/Flask + Canvas API', body: 'Analog clock that shows real-time hours for any timezone in the world, with an alarm system and custom sound. The clock is drawn entirely with code using HTML5 Canvas — no images.', stack: 'Python · Flask · HTML5 Canvas · JavaScript · Intl API · Vercel', challenge: 'The original clock used a circular doubly linked list in Python with a thread ticking every second — works perfectly locally, but Vercel is serverless: no persistent processes. I solved it by removing all server state and delegating time management to the browser using Intl.DateTimeFormat, which natively supports any timezone. The backend became stateless and the frontend calculates the correct time on every tick.' } },
      { title: 'MercadoLibre Clone', desc: 'Functional clone of MercadoLibre with product listing, search and shopping cart. Practice project to master HTML, CSS and JavaScript.', github: 'https://github.com/StevenInsuasti/TalleGit', demo: 'https://steveninsuasti.github.io/TalleGit',
        detail: { title: 'MercadoLibre Clone — Collaborative Landing Page', subtitle: 'Team project · HTML + CSS + JavaScript', body: 'I replicated the MercadoLibre Colombia experience working as a team with a real GitFlow workflow: feature branches, Pull Requests and conflict resolution. The goal was not just the page itself, but learning to collaborate the way a professional team would.', stack: 'HTML5 · CSS3 · Vanilla JavaScript · Git/GitHub · GitHub Pages', challenge: 'When merging branches, the index.html was full of conflicts because everyone was editing the same file. I resolved it by manually analyzing each section, removing duplicates and unifying the structure. From there we set a rule: each developer with their own independent CSS file to avoid future clashes.' } },
      { title: 'YoJobs', desc: 'Professional social network inspired by LinkedIn. Allows user registration, profile creation, job posting and professional networking.', github: 'https://github.com/StevenInsuasti/RedSocialYoJobs', demo: 'https://red-social-yo-jobs.vercel.app/users/register',
        detail: { title: 'YoJobs — Professional Social Network', subtitle: 'Full-stack · Django + PostgreSQL', body: 'A simplified LinkedIn: professional profiles, job postings, connection requests and direct messages between users.', stack: 'Django · PostgreSQL (Neon) · WhiteNoise · Pillow · Vercel · HTML/CSS', challenge: 'Django is not designed for serverless environments and SQLite does not work on read-only file systems like Vercel. I solved it by migrating the database to PostgreSQL on Neon, using WhiteNoise to serve static files directly from Django, and configuring vercel.json to route everything to the WSGI. The result: a fully functional Django app running on serverless infrastructure.' } },
      { title: 'Multivariable Calculus', desc: 'Interactive app for multivariable calculus with 3D visualizations, gradients, double and triple integrals. Built with Python and Streamlit.', github: 'https://github.com/StevenInsuasti/AplicativoMultivariable', demo: 'https://aplicativomultivariable-proyecto.streamlit.app',
        detail: { title: 'Multivariable Calculus — Interactive Educational Tool', subtitle: 'Python · Streamlit + SymPy', body: 'Tool for exploring multivariable calculus visually: 3D surfaces, gradients, double/triple integrals and Lagrange optimization. The user enters any function and the app calculates and plots everything in real time — no coding required.', stack: 'Python · Streamlit · SymPy · NumPy · mpmath · Plotly', challenge: 'SymPy cannot always solve complex integrals or limits — it simply fails. I solved it with a two-layer fallback system: it first tries to resolve symbolically, and if it throws an exception, it automatically falls back to numerical evaluation with mpmath. This makes the app robust with any function the user enters, without breaking.' } },
    ],
    code: 'Code', demo: 'Demo', comingSoon: 'Coming soon',
    testimonialsTitle: '06. Testimonials',
    testimonials: [
      { quote: '"Working with Steven was a very positive experience. He has a great ability to quickly understand problems and propose clear and effective solutions. His interest in constantly learning and improving in every project is evident."', name: 'Ingrid Lizeth Insuasti', role: 'Colleague / Collaborator' },
      { quote: '"Steven is a very dedicated software developer. Something I value greatly is his ability to explain complex ideas in a simple way. He is reliable, organized and focused on delivering quality results."', name: 'Martin Alejandro Melo', role: 'Developer / Colleague' },
      { quote: '"Steven has an excellent attitude for teamwork. He knows how to listen, contribute ideas and adapt to different situations. He is definitely someone you can trust to move any development forward."', name: 'Jose Arnovi Agudelo', role: 'Team Member' },
      { quote: '"I was impressed by Steven\'s creativity when designing and developing solutions. He not only focuses on making it work, but on making it intuitive and well-structured. He is a committed person with a very good work ethic."', name: 'Michael Andres Ordoñez', role: 'Collaborator / Project' },
    ],
    certsTitle: '05. Certifications',
    certs: [
      { title: 'Frontend Web Development', issuer: 'Meta / Coursera', date: 'Mar 2024' },
      { title: 'Databases with SQL', issuer: 'Universidad Cooperativa', date: 'Jun 2024' },
      { title: 'English B2 — Upper Intermediate', issuer: 'Cambridge Academy', date: 'Sep 2024' },
      { title: 'GitLab 101', issuer: 'GitLab University', date: 'Nov 2024' },
      { title: 'Modern JavaScript', issuer: 'Juan Pablo de la Torre — Udemy', date: 'Jan 2025' },
      { title: 'Algorithms & Data Structures in JS', issuer: 'FreeCodeCamp', date: 'Mar 2025' },
    ],
    stackTitle: '02. Tech Stack',
    stackSubtitle: 'Technologies and tools I work with on a daily basis.',
    goalsTitle: '07. Professional Vision',
    goalsSubtitle: 'What I am looking for and where I am headed.',
    goals: [
      { icon: '??', title: 'Role I am seeking', desc: 'Join as a Junior Frontend or Fullstack Developer in a team where I can contribute real solutions, learn from experienced professionals and grow within an agile and collaborative environment.' },
      { icon: '??', title: 'Technical growth', desc: 'Deepen my knowledge in scalable software architectures, cloud computing (AWS / GCP) and DevOps best practices. My goal is to become an engineer capable of designing robust systems end to end.' },
      { icon: '??', title: 'Team contribution', desc: 'I bring commitment, fast learning ability and a results-oriented mindset. I adapt easily to new environments and enjoy working in teams to solve complex problems.' },
      { icon: '??', title: 'Long-term vision', desc: "Participate in high-impact projects, ideally with international reach, where technology bridges the gap to improve people's lives. I aspire to lead technical teams in the future." },
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

const navIds = ['sobre-mi', 'stack', 'proyectos', 'experiencia', 'certificaciones', 'testimonios', 'objetivos', 'contacto']

const techSkillsList = [
  { label: 'JavaScript / TypeScript', level: 3 },
  { label: 'React / Next.js', level: 3 },
  { label: 'SQL / Bases de Datos', level: 3 },
  { label: 'Python', level: 3 },
  { label: 'Git & Control de Versiones', level: 3 },
  { label: 'HTML & CSS / Tailwind', level: 3 },
  { label: 'Inglés / English', level: 3 },
]

const projectImgs = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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

// --- Stack data ---------------------------------------------------------------
const stackCategories = [
  {
    icon: <Code2 size={20} />,
    title: 'Frontend',
    desc: { es: 'Interfaces escalables con tipado fuerte, componentes reutilizables y diseño responsivo.', en: 'Scalable interfaces with strong typing, reusable components and responsive design.' },
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', tip: { es: 'Componentes reutilizables y UI dinámica', en: 'Reusable components & dynamic UI' } },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', tip: { es: 'Apps web con SSR y despliegue en Vercel', en: 'Web apps with SSR & Vercel deploy' } },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', tip: { es: 'Tipado estático para código más seguro', en: 'Static typing for safer code' } },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', tip: { es: 'Estilos rápidos y consistentes', en: 'Fast & consistent styling' } },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', tip: { es: 'Lenguaje base del desarrollo web', en: 'Core language of web development' } },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', tip: { es: 'Animaciones y layouts personalizados', en: 'Custom animations & layouts' } },
    ],
  },
  {
    icon: <Database size={20} />,
    title: 'Backend & DB',
    desc: { es: 'APIs robustas, lógica de negocio eficiente y bases de datos bien estructuradas.', en: 'Robust APIs, efficient business logic and well-structured databases.' },
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', tip: { es: 'APIs REST rápidas con JavaScript', en: 'Fast REST APIs with JavaScript' } },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', tip: { es: 'Scripts, automatización y análisis de datos', en: 'Scripts, automation & data analysis' } },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', tip: { es: 'Base de datos relacional para producción', en: 'Relational database for production' } },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', tip: { es: 'ORM moderno para consultas seguras y tipadas', en: 'Modern ORM for safe, typed queries' } },
    ],
  },
  {
    icon: <Globe size={20} />,
    title: 'Tools & DevOps',
    desc: { es: 'Control de versiones, pruebas de API y despliegue continuo de aplicaciones.', en: 'Version control, API testing and continuous application deployment.' },
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', tip: { es: 'Control de versiones en todos mis proyectos', en: 'Version control across all my projects' } },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', tip: { es: 'Repositorios, PRs y colaboración', en: 'Repositories, PRs & collaboration' } },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', tip: { es: 'Contenedores para entornos reproducibles', en: 'Containers for reproducible environments' } },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', tip: { es: 'Pruebas y documentación de APIs REST', en: 'REST API testing & documentation' } },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', tip: { es: 'Editor principal con extensiones clave', en: 'Main editor with key extensions' } },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', tip: { es: 'Despliegue automático de apps Next.js', en: 'Automatic deployment of Next.js apps' } },
    ],
  },
]

// --- Component ----------------------------------------------------------------
export default function Portfolio() {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [dark, setDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSent, setFormSent] = useState(false)
  const [activeDetail, setActiveDetail] = useState<null | { title: string; subtitle: string; body: string; stack: string; challenge: string }>(null)
  const tr = t[lang]

  // -- Theme tokens ----------------------------------------------------------
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

  // -- Scroll helper ---------------------------------------------------------
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  // -- Form ------------------------------------------------------------------
  const [formError, setFormError] = useState(false)
  const [formErrorMsg, setFormErrorMsg] = useState('')
  const [formLoading, setFormLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(false)
    setFormErrorMsg('')

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormError(true)
      setFormErrorMsg(lang === 'es' ? 'El correo electrónico no es válido.' : 'The email address is not valid.')
      return
    }

    setFormLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/xwvaekdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      if (res.ok) {
        setFormSent(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setFormSent(false), 3500)
      } else {
        setFormError(true)
        setFormErrorMsg(lang === 'es' ? 'No se pudo enviar el mensaje. Intenta de nuevo.' : 'Could not send the message. Please try again.')
      }
    } catch {
      setFormError(true)
      setFormErrorMsg(lang === 'es' ? 'Error de conexión. Verifica tu internet.' : 'Connection error. Check your internet.')
    } finally {
      setFormLoading(false)
    }
  }

  // -- Nav icon helpers ------------------------------------------------------
  const navIcons = [User, Briefcase, Award, ExternalLink, Code2, MessageSquareQuote, Star, Mail]

  return (
    <div className={`min-h-screen font-sans selection:bg-[#fef08a] ${bg}`}>

      {/* -- Project detail modal -- */}
      {activeDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setActiveDetail(null)}>
          <div className={`relative max-w-lg w-full rounded-2xl border-2 p-6 shadow-2xl cursor-default ${dark ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-[#e5e7eb]'}`}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveDetail(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={18} />
            </button>
            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${dark ? 'text-[#888]' : 'text-[#666]'}`}>{activeDetail.subtitle}</p>
            <h3 className="text-xl font-black mb-3">{activeDetail.title}</h3>
            {activeDetail.body ? (<>
            <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-[#ccc]' : 'text-[#444]'}`}>{activeDetail.body}</p>
            <div className={`rounded-xl p-3 mb-4 ${dark ? 'bg-[#0f0f0f]' : 'bg-[#f9fafb]'}`}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1 text-[#6366f1]">Stack</p>
              <p className={`text-sm font-medium ${dark ? 'text-[#ccc]' : 'text-[#444]'}`}>{activeDetail.stack}</p>
            </div>
            <div className={`rounded-xl p-3 ${dark ? 'bg-[#0f0f0f]' : 'bg-[#f9fafb]'}`}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1 text-[#f59e0b]">{lang === 'es' ? 'Reto Técnico' : 'Technical Challenge'}</p>
              <p className={`text-sm leading-relaxed ${dark ? 'text-[#ccc]' : 'text-[#444]'}`}>{activeDetail.challenge}</p>
            </div>
            </>) : (
              <p className={`text-sm ${dark ? 'text-[#888]' : 'text-[#666]'}`}>{lang === 'es' ? '✍️ Descripción detallada próximamente.' : '✍️ Detailed description coming soon.'}</p>
            )}
          </div>
        </div>
      )}

      {/* -- Toast -- */}
      {formSent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer"
          onClick={() => setFormSent(false)}
        >
          <div
            className="flex flex-col items-center gap-4 bg-black text-white border-4 border-[#bbf7d0] px-12 py-10 shadow-[8px_8px_0px_0px_rgba(187,247,208,0.6)] max-w-sm w-full mx-4 text-center cursor-default"
            onClick={e => e.stopPropagation()}
          >
            <span className="text-6xl">✅</span>
            <div>
              <p className="font-black text-2xl uppercase tracking-wide mb-2">
                {lang === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}
              </p>
              <p className="text-gray-400 font-medium">
                {lang === 'es' ? 'Me pondré en contacto contigo pronto.' : "I'll get back to you soon."}
              </p>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-[#bbf7d0] animate-[shrink_2s_linear_forwards]" style={{width:'100%'}}/>
            </div>
          </div>
        </div>
      )}

      {/* -- Mobile top bar -- */}
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

      {/* -- Mobile dropdown menu -- */}
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

      {/* -- Layout wrapper -- */}
      <div className="flex min-h-screen">

        {/* -- Sidebar (desktop only) -- */}
        <aside className="hidden lg:flex flex-col fixed right-0 top-0 h-full w-[160px] z-50">
          {/* Always dark background */}
          <div className="absolute inset-0 bg-[#0a0a0a] border-l border-gray-800" />
          <SidebarTrail />

          <div className="relative flex flex-col h-full z-10 py-4 px-3">

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <button onClick={() => scrollToSection('inicio')} aria-label="Home"
                className="group relative transition-all duration-300 hover:scale-110 active:scale-95">
                <div className="absolute inset-0 rounded-2xl bg-[#6366f1] blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative p-1.5 rounded-2xl border-2 border-gray-700 bg-[#111] shadow-lg group-hover:border-[#6366f1] transition-colors duration-300">
                  <ImageWithFallback src="/logo.png" alt="Logo" className="w-11 h-11 rounded-xl" />
                </div>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col flex-1 justify-around gap-1">
              {navIds.map((id, i) => {
                const accents = [
                  '#fef08a', '#fecaca', '#d8b4fe', '#e9d5ff',
                  '#bfdbfe', '#fed7aa', '#bfdbfe', '#a7f3d0',
                ]
                const a = accents[i]
                const radius = i % 2 === 0
                  ? 'rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md'
                  : 'rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md'
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`group relative w-full py-2 px-3 text-[10px] font-black uppercase tracking-widest text-center text-gray-500 border border-gray-800 overflow-hidden transition-all duration-200 hover:border-transparent hover:scale-[1.03] ${radius}`}
                  >
                    <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" style={{ backgroundColor: a }} />
                    <span className="relative group-hover:text-black transition-colors duration-200">{tr.nav[i]}</span>
                  </button>
                )
              })}
            </nav>

            {/* Controls */}
            <div className="flex justify-center gap-2 pt-3">
              <button onClick={() => setDark(!dark)}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 border border-gray-700 bg-[#1a1a1a] text-gray-400 hover:bg-[#fef08a] hover:text-black hover:border-[#fef08a]">
                {dark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
              <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="w-9 h-9 rounded-xl text-[10px] font-black flex items-center justify-center transition-all duration-200 border border-gray-700 bg-[#1a1a1a] text-gray-400 hover:bg-[#fef08a] hover:text-black hover:border-[#fef08a]">
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            </div>

          </div>
        </aside>

        {/* -- Main content -- */}
        <main className="flex-1 lg:mr-[160px] pt-[53px] lg:pt-0">

          {/* ----------------------------------------------------------------
              HERO
          ---------------------------------------------------------------- */}
          <section id="inicio" className={`min-h-screen md:min-h-screen mb-8 md:mb-24 relative overflow-hidden`}>

            {/* Floating code snippets — decorative background */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              <pre className={`absolute top-8 left-[30%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`const dev = {\n  name: "Steven",\n  role: "Software Eng.",\n  passion: "clean code"\n};`}</pre>
              <pre className={`absolute top-12 right-[20%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`function build(idea) {\n  return idea\n    .design()\n    .develop()\n    .deploy();\n}`}</pre>
              <pre className={`absolute bottom-[30%] left-[38%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`if (problem) {\n  solve(it);\n} else {\n  improve();\n}`}</pre>
              <pre className={`absolute bottom-[42%] right-[22%] text-[10px] font-mono opacity-10 leading-relaxed ${dark ? 'text-green-400' : 'text-gray-500'}`}>{`git commit -m\n  "feat: new idea"\ngit push origin\n  main`}</pre>
            </div>

            {/* Social icons — fixed right column (desktop only) */}
            <div className="hidden md:flex absolute top-6 right-6 flex-col gap-4 z-20">
              {[
                { Icon: Github, href: 'https://github.com/StevenInsuasti', img: null },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/steven-eraso-insuasti/', img: null },
                { Icon: Mail, href: 'mailto:steveninsuasti@gmail.com', img: null },
                { Icon: null, href: 'https://wa.me/573017824030', img: `https://img.icons8.com/?size=100&id=16733&format=png&color=${dark ? 'ffffff' : '000000'}` },
              ].map(({ Icon, href, img }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] ${dark ? 'bg-[#1a1a1a] hover:bg-[#fef08a] hover:text-[#0f0f0f]' : 'bg-white hover:bg-black hover:text-white'} transition-colors group`}>
                  {img
                    ? <img src={img} alt="WhatsApp" className="w-[18px] h-[18px] group-hover:invert" />
                    : Icon && <Icon size={18} />
                  }
                </a>
              ))}
            </div>

            {/* Main 3-col grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:min-h-screen px-6 py-4 gap-4 relative z-10 md:items-stretch">

              {/* Badge mobile — solo visible en mobile, arriba del todo */}
              <div className="md:hidden order-1 pt-2 flex justify-center">
                <MetaballsBadge text={tr.welcome} />
              </div>

              {/* -- Col 2: photo -- */}
              <div className="flex flex-col justify-center items-stretch py-1 order-2 md:order-2">
                <div className={`relative w-full rounded-2xl overflow-hidden border-4 ${border} shadow-xl h-[42vh] md:h-auto md:min-h-[75vh]`}>
                  <ImageWithFallback
                    src="/steven.png"
                    alt="Steven Eraso Insuasti"
                    className="w-full h-full object-contain md:object-cover object-top absolute inset-0"
                  />
                </div>
                {/* Social icons — mobile only, below photo */}
                <div className="md:hidden flex justify-center gap-3 mt-3">
                  {[
                    { Icon: Github, href: 'https://github.com/StevenInsuasti', img: null },
                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/steven-eraso-insuasti/', img: null },
                    { Icon: Mail, href: 'mailto:steveninsuasti@gmail.com', img: null },
                    { Icon: null, href: 'https://wa.me/573017824030', img: `https://img.icons8.com/?size=100&id=16733&format=png&color=${dark ? 'ffffff' : '000000'}` },
                  ].map(({ Icon, href, img }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] ${dark ? 'bg-[#1a1a1a] hover:bg-[#fef08a] hover:text-[#0f0f0f]' : 'bg-white hover:bg-black hover:text-white'} transition-colors group`}>
                      {img
                        ? <img src={img} alt="WhatsApp" className="w-[18px] h-[18px] group-hover:invert" />
                        : Icon && <Icon size={18} />
                      }
                    </a>
                  ))}
                </div>
              </div>

              {/* -- Col 1: name + role + stack badges -- */}
              <div className="flex flex-col md:justify-between py-1 order-3 md:order-1">
                {/* Badge — desktop only (mobile badge is above) */}
                <div className="hidden md:block">
                  <MetaballsBadge text={tr.welcome} />
                </div>

                {/* Name block */}
                <div className="flex flex-col gap-1 md:mt-auto md:mb-auto pt-4">
                  <h1 className="text-4xl md:text-4xl xl:text-5xl font-black leading-[1.1] tracking-wide"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    Steven<br />Eraso<br />Insuasti
                  </h1>
                  <p className="text-base font-semibold mt-1">{tr.role}</p>
                  <p className={`flex items-center gap-2 mt-1 text-xs font-medium ${muted}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>{tr.university}</span>
                  </p>
                </div>

                {/* Stack badges */}
                <div className="mt-3 cursor-pointer" onClick={() => scrollToSection('stack')}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className={`inline-block w-4 h-[2px] ${dark ? 'bg-[#fecaca]' : 'bg-black'}`}/>
                    {lang === 'es' ? 'Stack Principal' : 'Main Stack'}
                  </p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
                      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                    ].map((tech) => (
                      <div key={tech.name} className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl border ${border} ${dark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md cursor-default`}
                        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                        <span className="text-[8px] font-bold">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* -- Col 3: tagline + buttons + stats -- */}
              <div className="flex flex-col justify-between gap-3 pb-0 md:py-1 pr-0 md:pr-16 order-3 md:order-3">
                <div className="pt-4 md:pt-[120px]">
                  <p className="text-base leading-relaxed mb-4 font-medium tracking-normal"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    {tr.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="/cv.pdf" download="CV-Steven-Eraso-Insuasti.pdf"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 ${btn}`}>
                      <Download size={15} />{tr.downloadCV}
                    </a>
                    <button onClick={() => scrollToSection('proyectos')}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm border-2 border-current transition-colors hover:bg-[#bfdbfe] hover:text-[#0f0f0f] hover:border-[#bfdbfe]`}>
                      <ChevronRight size={15} />{tr.viewProjects}
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="inline-block w-4 h-[2px] bg-[#6366f1]"/>
                    {lang === 'es' ? 'Estadísticas' : 'Stats'}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: '3+', label: lang === 'es' ? 'Proyectos' : 'Projects', Icon: ExternalLink },
                      { value: '6+', label: lang === 'es' ? 'Certificaciones' : 'Certifications', Icon: Award },
                      { value: '16+', label: lang === 'es' ? 'Tecnologías' : 'Technologies', Icon: Code2 },
                      { value: '80%', label: lang === 'es' ? 'Inglés' : 'English', Icon: Star },
                    ].map((stat, i) => (
                      <div key={i}
                        className="rounded-xl p-2.5 flex items-center justify-between relative overflow-hidden transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 cursor-default"
                        style={{
                          background: dark
                            ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)'
                            : 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)',
                          backdropFilter: 'blur(12px) saturate(160%)',
                          WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                          border: dark ? '1.5px solid rgba(255,255,255,0.12)' : '1.5px solid rgba(255,255,255,0.3)',
                          boxShadow: dark
                            ? '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)'
                            : '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)',
                        }}>
                        <span className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full blur-2xl opacity-20 pointer-events-none bg-white" />
                        <div className="relative z-10">
                          <p className={`text-2xl font-black leading-none ${dark ? 'text-white' : 'text-[#0f0f0f]'}`}>{stat.value}</p>
                          <p className={`text-[9px] font-semibold mt-0.5 ${dark ? 'text-white/60' : 'text-[#0f0f0f]/70'}`}>{stat.label}</p>
                        </div>
                        <stat.Icon size={16} className={`relative z-10 ${dark ? 'text-white/40' : 'text-[#0f0f0f]/30'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ----------------------------------------------------------------
              SOBRE MÍ
          ---------------------------------------------------------------- */}
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
                        <ChevronRight size={16} className={`mt-0.5 shrink-0 ${dark ? 'text-white' : 'text-black'}`} />
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
              <div className="grid grid-cols-1 gap-8">
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

          {/* ----------------------------------------------------------------
              STACK
          ---------------------------------------------------------------- */}
          <section id="stack" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.stackTitle, 'bg-[#bbf7d0]')}
              <p className={`text-sm ${muted} mb-8`}>{tr.stackSubtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stackCategories.map((cat, i) => (
                  <div key={i} className={`rounded-2xl border-2 p-6 ${box}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-[#bfdbfe] text-[#0f0f0f] flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <h3 className="font-bold">{cat.title}</h3>
                    </div>
                    <p className={`text-xs ${muted} mb-4 leading-relaxed`}>{lang === 'es' ? cat.desc.es : cat.desc.en}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.items.map((item) => (
                        <div key={item.name} className={`group relative flex items-center gap-2 p-2 rounded-xl border ${border} ${dark ? 'bg-[#0f0f0f]' : 'bg-[#f9fafb]'} transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-[#6366f1] cursor-default`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.icon} alt={item.name} className={`w-6 h-6 shrink-0 ${dark && item.name === 'GitHub' ? 'invert' : ''}`} />
                          <span className="text-xs font-semibold truncate">{item.name}</span>
                          {/* Tooltip */}
                          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-lg text-[10px] font-medium text-white bg-[#0f0f0f] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-lg`}>
                            {lang === 'es' ? item.tip.es : item.tip.en}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0f0f0f]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------
              PROYECTOS
          ---------------------------------------------------------------- */}
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
                        {project.detail && (
                          <div className="relative group ml-auto">
                            <button
                              onClick={() => setActiveDetail(project.detail!)}
                              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border ${border} hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-colors`}>
                              <Eye size={13} />
                            </button>
                            <span className="absolute bottom-full right-0 mb-1.5 px-2 py-1 rounded-lg text-[10px] font-medium text-white bg-[#0f0f0f] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              {lang === 'es' ? 'Ver detalles' : 'View details'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------
              EXPERIENCIA
          ---------------------------------------------------------------- */}
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

          {/* ----------------------------------------------------------------
              CERTIFICACIONES
          ---------------------------------------------------------------- */}
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

          {/* ----------------------------------------------------------------
              TESTIMONIOS
          ---------------------------------------------------------------- */}
          <section id="testimonios" className="mb-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              {sectionTitle(tr.testimonialsTitle, 'bg-[#fed7aa]')}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tr.testimonials.map((t, i) => {
                  const initials = t.name.split(' ').slice(0,2).map(n => n[0]).join('')
                  const colors = ['bg-[#fef08a]', 'bg-[#bfdbfe]', 'bg-[#fecaca]', 'bg-[#d8b4fe]']
                  return (
                    <div key={i} className={`rounded-2xl border-2 p-6 ${box} flex flex-col gap-4`}>
                      <MessageSquareQuote size={24} className="text-[#6366f1]" />
                      <p className={`text-sm leading-relaxed italic flex-1 ${muted}`}>{t.quote}</p>
                      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-current/10">
                        <div className={`w-10 h-10 rounded-full ${colors[i]} flex items-center justify-center shrink-0 font-black text-sm text-black`}>
                          {initials}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{t.name}</p>
                          <p className={`text-xs ${muted}`}>{t.role}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------
              OBJETIVOS / VISIÓN
          ---------------------------------------------------------------- */}
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

          {/* ----------------------------------------------------------------
              CONTACTO
          ---------------------------------------------------------------- */}
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
                    className="shrink-0 inline-flex items-center gap-3 bg-[#25D366] text-white font-black py-4 px-8 rounded-xl text-lg uppercase tracking-wide transition-all duration-200 hover:scale-105 hover:bg-[#1ebe57] hover:shadow-[0_0_24px_rgba(37,211,102,0.6)] active:scale-95"
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
                      disabled={formLoading}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${btn}`}
                    >
                      <Send size={16} />
                      {formLoading ? (lang === 'es' ? 'Enviando...' : 'Sending...') : tr.sendBtn}
                    </button>
                    {formError && (
                      <p className="text-red-500 font-bold text-sm text-center">
                        ❌ {formErrorMsg}
                      </p>
                    )}
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

          {/* -- Footer -- */}
          <footer className="bg-[#0f0f0f] text-white mt-auto relative overflow-hidden">
            <SidebarTrail />
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
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
                      <MapPin size={14} className="shrink-0 text-green-400" />
                      <span>Pasto, Nariño, Colombia</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-gray-800 pt-6 flex items-center justify-center">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Steven Eraso Insuasti — {tr.footerText}
                </p>
              </div>
            </div>
          </footer>

        </main>
      </div>
    </div>
  )
}






