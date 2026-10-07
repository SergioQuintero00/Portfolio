export type Locale = 'en' | 'es'

export const sharedProfile = {
  name: 'Sergio Quintero Mena',
  email: 'sqmena@gmail.com',
  phone: '+34 601 058 114',
  phoneHref: 'tel:+34601058114',
  linkedin: 'https://www.linkedin.com/in/sergio-quintero-mena',
  github: 'https://github.com/SergioQuintero00',
  logo: '/imagenes/logo-sergio.png',
  portrait: { src: '/imagenes/retrato-sergio.png' },
}

export const project = {
  videoUrl: 'https://youtu.be/McU3I_yYk_A',
  screenshot: '/imagenes/comandas-original.png',
  // Add the public application URL when a live demo is available.
  demoUrl: null as string | null,
  stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'Git'],
}

const en = {
  profile: {
    role: 'Full-Stack Web Developer',
    location: 'Zaragoza, Spain',
    cv: '/documentos/Sergio_Quintero_Mena_CV_EN.pdf',
    portraitAlt: 'Portrait of Sergio Quintero Mena',
    intro:
      'I build web software, from the interface to the API and database. My background combines retail software, React and Node.js projects, and competitive programming in Java.',
    focus: 'React · TypeScript · Node.js',
    award: 'ProgramaMe 2024 · Regional team winner',
  },
  sections: [
    { id: 'proyecto', label: 'Project', number: '01' },
    { id: 'experiencia', label: 'Experience', number: '02' },
    { id: 'sobre-mi', label: 'About', number: '03' },
    { id: 'contacto', label: 'Contact', number: '04' },
  ],
  ui: {
    skip: 'Skip to content',
    home: 'Sergio Quintero Mena, home',
    nav: 'Portfolio sections',
    language: 'Language',
    english: 'Read in English',
    spanish: 'Leer en español',
    light: 'Light theme',
    dark: 'Dark theme',
    switchLight: 'Switch to light theme',
    switchDark: 'Switch to dark theme',
    technologies: 'Technologies',
    linkedin: 'LinkedIn profile (opens in a new tab)',
    github: 'GitHub profile (opens in a new tab)',
    download: 'Download CV',
    downloadFull: 'Download my full CV',
    explore: 'Explore my work',
    top: 'Back to top',
  },
  project: {
    heading: 'Selected project',
    name: 'Restaurant ordering & kitchen',
    context: 'Internship project · Onushop',
    title: 'From the table',
    titleAccent: 'to the kitchen.',
    intro:
      'A web application for opening orders on a mobile device, sending items to the kitchen and keeping both sides connected in real time.',
    realTime: 'Real time',
    waiter: 'Waiting staff',
    kitchen: 'Kitchen',
    database: 'PostgreSQL · Shared ERP database',
    diagram: 'Application flow',
    individual: 'Built individually',
    video: 'Watch project video',
    demo: 'Try the application',
    details: 'How I built it',
    explanation:
      'I built the complete application during my internship at Onushop. Waiting staff could open an order by table and keep adding items until it closed. Kitchen screens received updates through Socket.IO rooms.',
    integrationTitle: 'Integrating with the ERP',
    integration:
      'I built a Node.js and Express API to access the shared PostgreSQL database. I analysed the existing model and added the structures the application needed.',
    developmentTitle: 'Data model and development',
    development:
      'I documented the data model in dbdiagram.io and used Git for version control. The React frontend connects the ordering workflow to the API and real-time updates.',
    screenshotAlt:
      'Original login screen of Gevensoft Hostelería, the ordering and kitchen application',
    caption:
      'Original interface · Internship project. The application was not deployed in a restaurant. Video in Spanish.',
  },
  experience: [
    {
      company: 'Cosin Consulting',
      role: 'Full-Stack Web Developer',
      period: 'September 2025 - Present',
      location: 'Zaragoza, Spain',
      description:
        'I develop and maintain plugins for RetailPro Prism, a web application for retail sales and store management, as part of a three-person development team.',
      contributions: [
        'Contributed to a completed migration across more than 200 stores, adapting more than 20 AngularJS plugins to a newer version of Prism.',
        'Developed and deployed a Portuguese fiscal reporting plugin as part of the team, moving a Windows service integration to a Delphi Apache module with MySQL and AngularJS interfaces.',
        'Investigate existing code and platform behaviour to resolve compatibility and integration issues. Prepare installation packages and track changes with Mercurial.',
      ],
      stack: ['AngularJS', 'JavaScript', 'Delphi', 'MySQL', 'Mercurial'],
    },
    {
      company: 'Onushop',
      role: 'Full-Stack Developer Intern',
      period: 'March - June 2025',
      location: 'San Juan del Puerto, Huelva, Spain',
      description:
        'I worked on an ERP for sole traders and individually built the restaurant ordering and kitchen application, integrating it with the existing ERP database.',
      contributions: [
        'Built a React interface and a Node.js/Express API, with Socket.IO rooms for real-time updates between waiting staff and kitchen screens.',
        'Analysed and extended the PostgreSQL data model, documented it in dbdiagram.io and used Git for version control.',
        'Developed ERP features with Delphi VCL.',
      ],
      stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Delphi VCL'],
    },
  ],
  about: {
    heading: 'About',
    title: 'I like understanding',
    titleSecond: 'the whole application.',
    intro:
      'From the interface to business logic and data. My experience in retail software involves reading existing code, investigating how systems interact and adapting features to changing requirements. I want to keep building web products with React, TypeScript and Node.js.',
    practice:
      'I also experiment with Codex, coding agents and development harnesses: organising context, planning tasks and using AI to support implementation and code review. Alongside work and personal projects, I am taking a C1-level English course at EOI n.º 1 in Zaragoza.',
    educationHeading: 'Education & competitive programming',
    awardTitle: 'ProgramaMe 2024',
    awardResult: 'Andalusian regional team winner · 11th of 22 teams in the national final.',
    awardTeam: 'GroupNotFoundException · Algorithms in Java',
    awardDetail:
      'Competitive programming for vocational students in Spain. We prepared independently and shared coding, solution review and timed problem-solving responsibilities. This experience developed my foundations in algorithms and problem solving.',
  },
  skillGroups: [
    {
      label: 'Professional experience',
      skills: 'JavaScript, HTML, CSS, AngularJS, Delphi, MySQL and Mercurial.',
    },
    {
      label: 'Internships & projects',
      skills: 'React, TypeScript, Node.js, Express, PostgreSQL, Socket.IO and Git.',
    },
    {
      label: 'Algorithms & problem solving',
      skills: 'Java, competitive programming, problem decomposition and team solution review.',
    },
    {
      label: 'Personal AI practice',
      skills: 'Codex, coding agents and harnesses for planning, development and code review.',
    },
  ],
  education: [
    {
      title: 'Higher Technician in Multi-platform Applications Development (DAM)',
      institution: 'IES La Marisma · Huelva, Spain',
      period: '2023 - 2025',
      detail:
        'Advanced vocational qualification, EQF 5 (non-university higher education). Final average: 9.15/10. Java, web development and databases.',
    },
    {
      title: 'Implementation and Use of Generative AI in Delphi',
      institution: 'University of Salamanca',
      period: 'November 2025 - January 2026',
      detail: 'University microcredential · Second edition. MakerAI and generative AI concepts.',
    },
    {
      title: 'English C1 course · In progress',
      institution: 'Escuela Oficial de Idiomas n.º 1 · Zaragoza',
      period: '2026 - Present',
      detail:
        'B2 (self-assessed). Developing spoken and written communication; experience reading technical documentation at work.',
    },
  ],
  contact: {
    heading: 'Contact',
    title: "Let's talk.",
    intro:
      'If my background fits your team or you would like to know more about my work, get in touch.',
    copy: 'Copy email address',
    copied: 'Email copied.',
    copyError: 'Select the address to copy it, or follow the link to write an email.',
  },
}

const es: typeof en = {
  profile: {
    role: 'Desarrollador fullstack web',
    location: 'Zaragoza, España',
    cv: '/documentos/Sergio_Quintero_Mena_CV.pdf',
    portraitAlt: 'Retrato de Sergio Quintero Mena',
    intro:
      'Desarrollo software web, desde la interfaz hasta la API y la base de datos. Mi experiencia combina software retail, proyectos con React y Node.js y programación competitiva en Java.',
    focus: 'React · TypeScript · Node.js',
    award: 'ProgramaMe 2024 · Primer puesto regional por equipos',
  },
  sections: [
    { id: 'proyecto', label: 'Proyecto', number: '01' },
    { id: 'experiencia', label: 'Experiencia', number: '02' },
    { id: 'sobre-mi', label: 'Sobre mí', number: '03' },
    { id: 'contacto', label: 'Contacto', number: '04' },
  ],
  ui: {
    skip: 'Saltar al contenido',
    home: 'Sergio Quintero Mena, inicio',
    nav: 'Secciones del portfolio',
    language: 'Idioma',
    english: 'Read in English',
    spanish: 'Leer en español',
    light: 'Tema claro',
    dark: 'Tema oscuro',
    switchLight: 'Activar tema claro',
    switchDark: 'Activar tema oscuro',
    technologies: 'Tecnologías',
    linkedin: 'Perfil de LinkedIn (abre en otra pestaña)',
    github: 'Perfil de GitHub (abre en otra pestaña)',
    download: 'Descargar CV',
    downloadFull: 'Descargar mi CV completo',
    explore: 'Explorar mi trabajo',
    top: 'Volver arriba',
  },
  project: {
    heading: 'Proyecto seleccionado',
    name: 'Comandas y cocina',
    context: 'Proyecto de prácticas · Onushop',
    title: 'De la mesa',
    titleAccent: 'a la cocina.',
    intro:
      'Una aplicación web para abrir comandas desde el móvil, enviar productos a cocina y mantener a ambos conectados en tiempo real.',
    realTime: 'Tiempo real',
    waiter: 'Camarero',
    kitchen: 'Cocina',
    database: 'PostgreSQL · Base de datos del ERP',
    diagram: 'Esquema de funcionamiento',
    individual: 'Desarrollo individual',
    video: 'Ver vídeo del proyecto',
    demo: 'Probar aplicación',
    details: 'Cómo lo construí',
    explanation:
      'Desarrollé la aplicación completa durante mis prácticas en Onushop. El camarero podía abrir una comanda por mesa y añadir productos hasta finalizarla. Cocina recibía las actualizaciones a través de salas de Socket.IO.',
    integrationTitle: 'Integración con el ERP',
    integration:
      'Creé una API con Node.js y Express para acceder a la base de datos PostgreSQL compartida. Analicé el modelo existente y añadí la estructura que necesitaba la aplicación.',
    developmentTitle: 'Modelo y desarrollo',
    development:
      'Documenté el modelo de datos en dbdiagram.io y utilicé Git para el control de versiones. El frontend en React conecta el flujo de comandas con la API y las actualizaciones en tiempo real.',
    screenshotAlt:
      'Pantalla original de acceso a Gevensoft Hostelería, la aplicación de comandas y cocina',
    caption: 'Interfaz original · Proyecto de prácticas, sin implantación en un negocio.',
  },
  experience: [
    {
      company: 'Cosin Consulting',
      role: 'Desarrollador fullstack web',
      period: 'Septiembre de 2025 - actualidad',
      location: 'Zaragoza',
      description:
        'Desarrollo y mantenimiento de plugins para RetailPro Prism, una aplicación web de venta y gestión para tiendas. Formo parte de un equipo de tres desarrolladores.',
      contributions: [
        'Participación en la migración completada de más de 200 tiendas de un cliente, adaptando más de 20 plugins con AngularJS a una nueva versión de Prism.',
        'Desarrollo y despliegue en equipo de un plugin de fiscalización portuguesa, pasando de un servicio de Windows a un módulo de Apache en Delphi, con MySQL e interfaces web con AngularJS.',
        'Investigación del código existente y del comportamiento de Prism para resolver problemas de compatibilidad e integración. Preparación de paquetes y control de versiones con Mercurial.',
      ],
      stack: ['AngularJS', 'JavaScript', 'Delphi', 'MySQL', 'Mercurial'],
    },
    {
      company: 'Onushop',
      role: 'Desarrollador fullstack en prácticas',
      period: 'Marzo - junio de 2025',
      location: 'San Juan del Puerto, Huelva',
      description:
        'Desarrollo en el entorno de un ERP para autónomos. Construí de forma individual la aplicación web de comandas y cocina utilizando la base de datos del ERP.',
      contributions: [
        'Interfaz con React, API con Node.js y Express, y actualizaciones en tiempo real mediante salas de Socket.IO para camareros y cocina.',
        'Análisis y ampliación de la estructura de datos en PostgreSQL, documentación del modelo en dbdiagram.io y control de versiones con Git.',
        'Desarrollo de nuevas características del ERP con Delphi VCL.',
      ],
      stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Delphi VCL'],
    },
  ],
  about: {
    heading: 'Sobre mí',
    title: 'Me gusta entender',
    titleSecond: 'la aplicación completa.',
    intro:
      'Desde la interfaz hasta la lógica de negocio y los datos. Mi experiencia en software retail implica leer código existente, investigar cómo interactúan los sistemas y adaptar funcionalidades a nuevos requisitos. Quiero seguir construyendo productos web con React, TypeScript y Node.js.',
    practice:
      'También experimento con Codex, agentes y arneses de desarrollo: organizar contexto, planificar tareas y utilizar IA como apoyo a la implementación y la revisión de código. Compagino el trabajo y los proyectos personales con inglés C1 en la EOI n.º 1 de Zaragoza.',
    educationHeading: 'Formación y programación competitiva',
    awardTitle: 'ProgramaMe 2024',
    awardResult:
      'Primer puesto regional de Andalucía por equipos y 11.º de 22 equipos en la final nacional.',
    awardTeam: 'GroupNotFoundException · Algoritmia en Java',
    awardDetail:
      'Competición de programación para estudiantes de FP en España. Nos preparábamos de forma autodidacta y alternábamos la programación, la revisión de soluciones y la resolución de problemas bajo límite de tiempo. Esta experiencia desarrolló mis bases de algoritmia y resolución de problemas.',
  },
  skillGroups: [
    {
      label: 'En mi trabajo actual',
      skills: 'JavaScript, HTML, CSS, AngularJS, Delphi, MySQL y Mercurial.',
    },
    {
      label: 'En prácticas y proyectos',
      skills: 'React, TypeScript, Node.js, Express, PostgreSQL, Socket.IO y Git.',
    },
    {
      label: 'Algoritmia y resolución de problemas',
      skills:
        'Java, programación competitiva, descomposición de problemas y revisión de soluciones en equipo.',
    },
    {
      label: 'En mi práctica personal con IA',
      skills: 'Codex, agentes y arneses para planificación, desarrollo y revisión de código.',
    },
  ],
  education: [
    {
      title: 'Desarrollo de Aplicaciones Multiplataforma',
      institution: 'IES La Marisma · Huelva',
      period: '2023 - 2025',
      detail:
        'Técnico Superior · Nota media: 9,15. Formación en Java, desarrollo web y bases de datos.',
    },
    {
      title: 'Implementación y Uso de IA Generativa en Delphi',
      institution: 'Universidad de Salamanca',
      period: 'Noviembre de 2025 - enero de 2026',
      detail:
        'Microcredencial universitaria · 2.ª edición. MakerAI y conceptos de inteligencia artificial.',
    },
    {
      title: 'Inglés C1 · En curso',
      institution: 'Escuela Oficial de Idiomas n.º 1 · Zaragoza',
      period: '2026 - actualidad',
      detail:
        'Nivel B2. Formación orientada a mejorar la expresión oral y escrita y experiencia leyendo documentación técnica en el trabajo.',
    },
  ],
  contact: {
    heading: 'Contacto',
    title: 'Hablemos.',
    intro:
      'Si mi perfil encaja con tu equipo o quieres conocer más sobre mi trabajo, puedes escribirme.',
    copy: 'Copiar dirección de correo',
    copied: 'Correo copiado.',
    copyError: 'Puedes seleccionar la dirección para copiarla o pulsarla para escribir un correo.',
  },
}

export const localizedContent = { en, es }
