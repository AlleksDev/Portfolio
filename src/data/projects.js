// Importar mapeos de iconos desde skills.js
import { techIconsMap, patternIconsMap } from './skills.js';

// Función auxiliar para generar URLs de devicons
const devIcon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

const createTechIcon = (name) => ({
  name,
  icon: techIconsMap[name.toLowerCase()] || devIcon(name.toLowerCase()) // Usa icon local si existe, sino devicon
});

const createPatternIcon = (name) => ({
  name,
  icon: patternIconsMap[name.toLowerCase()] || 'https://via.placeholder.com/40?text=' + name.toLowerCase() // Usa icon si existe, sino placeholder
});

export const webProjects = [
  {
    id: 'notaria-178',
    title: 'NOTARÍA 178',
    shortDescription: 'Plataforma de gestión operativa con VPN',
    description:
      'Plataforma web diseñada para la gestión operativa de una notaría. Con un servidor local configurado con VPN Tailscale para acceso remoto cifrado desde sucursales y sistema avanzado de gestión con control de acceso.',
    problem:
      'La notaría a menudo enfrenta problemas para llevar un control eficiente de sus operaciones, especialmente al gestionar múltiples sucursales y garantizar la seguridad de los datos sensibles.',
    myJob:
      'Lideré el diseño de identidad visual y la experiencia de usuario, optimizando la interfaz para facilitar la gestión operativa. Generé todos los assets visuales necesarios para la plataforma.',
    images:  [
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213844/n01_w0hdn0.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213844/n02_p3pfch.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213843/n03_dmrxv1.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213843/n04_ulnrq3.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213843/n05_iaip1k.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213842/n06_er8t8y.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213842/n07_adsedm.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213842/n08_ixwbie.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213841/n09_op5ud6.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213841/n10_eih0uv.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213834/n10.1_bx5cxt.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213840/n11_bkku6a.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213840/n12_ajnufn.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213840/n13_l7ylro.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213833/n13.1_gaxsnm.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213833/n13.2_qxh6ti.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213839/n14_upvtwm.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213839/n15_ucdwan.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213838/n16_nbf7wy.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213838/n17_borhju.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213838/n18_zcxz09.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213837/n19_uiarbe.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213837/n20_wtqogs.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213836/n21_kwstfd.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213836/n22_rp4dss.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213836/n23_efrkw9.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213835/n24_zjoov7.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213835/n25_j0c5ru.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213835/n26_jznxtc.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213834/n27_scsged.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213833/n28_rbl0tx.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213833/n29_v66uvt.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213833/n30_jgfn5x.png",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1778213833/n31_f8fmnv.png"
        ],
    imagePath: '/images/projects/notaria-178.jpg',
    link: '#',
    tags: ['Arquitectura de Red', 'Full Stack', 'VPN'],
    technologies: [ 'Affinity', 'Figma', 'TypeScript', 'React', 'Go', 'PostgreSQL', 'Redis', 'Firebase', 'Docker', 'Tailscale'].map(createTechIcon),
    designPatterns: ['WebSocket', 'Arquitectura Hexagonal', 'MVVM', 'Atomic Design'].map(createPatternIcon),
    mainFeatures: [
      'Gestión operativa y administrativa integral',
      'Gestión centralizada de documentos',
      'Control de acceso granular por roles',
      'Sistema completo de auditoría',
      'Acceso remoto seguro con VPN Tailscale'
    ],
    color: '#ffb800',
    type: 'web'
  },
  {
    id: 'vaultdoc-vd',
    title: 'VAULTDOC-VD',
    shortDescription: 'Plataforma de seguridad empresarial',
    description:
      'Plataforma de seguridad para la gestión segura de archivos gubernamentales. Incluye subida de archivos y encriptación de extremo a extremo, además de auditoría completa.',
    problem:
      'Las instituciones gubernamentales necesitan una plataforma confiable para almacenar y gestionar documentos sensibles con conformidad de seguridad de nivel empresarial.',
    myJob:
      'Realicé mantenimiento correctivo y perfectivo en la plataforma, optimizando la experiencia de usuario y agregando nuevas funcionalidades. Implementé mejoras en la interfaz para facilitar la gestión de archivos y auditorías.',
    images: [
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673444/VaultDoc_pmwuov.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673455/VaultDoc2_m1gfnc.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673457/VaultDoc0_w0pqhh.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673456/VaultDoc1_afkk1b.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673458/VaultDoc1.1_qslsqn.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673451/VaultDoc12_woxznq.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673450/VaultDoc11_nqkqvm.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673453/VaultDoc14_vcp3k8.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673447/VaultDoc4_xythsl.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673448/VaultDoc6_ljzyk9.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673449/VaultDoc10_yl3la9.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673454/VaultDoc15_jta5hw.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673454/VaultDoc16_om5ghz.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673452/VaultDoc13_ng2kju.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673447/VaultDoc9_gst3nx.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673446/VaultDoc8_tqgx9n.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673445/VaultDoc7_nrdeaf.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673444/VaultDoc3_yfq4zj.jpg",
            "https://res.cloudinary.com/dahkwcslh/image/upload/v1777673459/VaultDoc5_gyndtp.jpg"
        ],
    imagePath: '/images/projects/vaultdoc.jpg',
    link: '#',
    mainTag: 'Gubernamental',
    tags: ['Ciberseguridad', 'Encriptación', 'Back-End'],
    technologies: ['TypeScript', 'Angular', 'Go', 'Python', 'OpenCV', 'PostgreSQL', 'Redis', 'Docker'].map(createTechIcon),
    designPatterns: ['MVVM', 'Arquitectura Hexagonal', 'Procesamiento de imágenes'].map(createPatternIcon),
    mainFeatures: [
      'Encriptación de extremo a extremo AES-256',
      'Acceso seguro por roles',
      'Gestión segura de archivos con control de acceso granular',
      'Escaneo de documentos con OpenCV para corrección de perspectiva y mejora de legibilidad',
      'Auditoría completa de accesos',
      'Cumplimiento de estándares de seguridad'
    ],
    color: '#ffb800',
    type: 'web'
  },
  {
    id: 'vixel-1',
    title: 'VIXEL',
    shortDescription: 'Plataforma descentralizada Web3 para torneos',
    description:
      'Plataforma descentralizada Web3 enfocada a la creación de torneos y streaming para videojuegos. Integra Blockchain para garantizar transparencia y seguridad de los usuarios. Este proyecto ganó el primer lugar en un hackathon a nivel estatal y el segundo lugar a nivel internacional en la categoría avanzada.',
    problem:
      'Los torneos competitivos de videojuegos a menudo enfrentan problemas de transparencia, seguridad y centralización, lo que genera desconfianza en los participantes y puede afectar la integridad del torneo.',
    myJob:
      'Responsable de la dirección creativa completa, incluyendo branding, diseño de interfaz y producción de todos los assets visuales. Optimicé los gráficos para garantizar rendimiento sin comprometer la calidad visual.',
    images: [],
    imagePath: '/images/projects/vixel.jpg',
    link: '#',
    mainTag: '2do Lugar Internacional',
    tags: ['Web3', 'Game Assets', 'UX/UI'],
    technologies: [ 'PixelStudio','Affinity', 'Figma', 'TypeScript', 'React', 'Nodejs', 'Rust', 'Vara'].map(createTechIcon),
    designPatterns: ['Web3', 'Blockchain', 'MVC', 'Smart Contracts'].map(createPatternIcon),
    mainFeatures: [
      'Videojuegos originales con assets personalizados',
      'Torneos descentralizados con blockchain',
      'Sistema de streaming integrado',
      'Wallets y pagos en criptomonedas',
      'Assets optimizados de alta calidad',
    ],
    color: '#ffb800',
    type: 'web'
  },
  {
    id: 'geova',
    title: 'GEOVA',
    shortDescription: 'Solución IoT para medición de terrenos',
    description:
      'Solución avanzada para medición de terrenos que incorpora un dispositivo IoT. El dispositivo se conecta a una interfaz web responsiva que muestra datos de medición en tiempo real, con calibración automática del sensor y exportación de datos en múltiples formatos.',
    problem:
      'Los agrimensores enfrentan limitaciones en precisión y portabilidad de herramientas de medición, las herramientas existentes son voluminosas, costosas y complicadas de usar.',
    myJob:
      'Diseñé la interfaz web responsiva para visualizar datos de medición. Arquitecturé los circuitos del dispositivo IoT y realicé el modelado 3D de la carcasa para el dispositivo IOT, considerando factores ergonómicos y de durabilidad. Documenté procesos de calidad y planeación estratégica, asegurando la viabilidad técnica del producto.',
    images: [
      "https://res.cloudinary.com/dahkwcslh/image/upload/f_auto,q_auto,w_920/v1779014412/Geova_bmiwj1.jpg"
    ],
    imagePath: '/images/projects/geova.jpg',
    link: '#',
    tags: ['IoT', '3D Design', 'Hardware'],
    technologies: ['Figma', 'TypeScript', 'Angular', 'Python', 'Go', 'RabbitMQ', 'Docker', 'RaspberryPi', 'ESP32', 'solidworks', 'Blender'].map(createTechIcon),
    designPatterns: ['IOT', 'WebSocket',  'MVVM', 'Arquitectura hexagonal'].map(createPatternIcon),
    mainFeatures: [
      'Dispositivo IoT portátil y preciso',
      'Dashboard web en tiempo real',
      'Interfaz intuitiva y responsiva para múltiples dispositivos',
      'Calibración automática de sensores',
      'Exportación de datos en múltiples formatos'
    ],
    color: '#ffb800',
    type: 'web'
  },
  {
    id: 'frimeet',
    title: 'FRIMEET',
    shortDescription: 'Plataforma de descubrimiento de lugares',
    description:
      'Plataforma de recomendaciones inteligente que ayuda a los usuarios a encontrar lugares perfectos para visitar.',
    problem:
      'Los usuarios tenían dificultades para encontrar nuevos lugares basados en sus preferencias y presupuesto y se pongan de acuerdoi para elegir un lugar en grupo.',
    myJob:
      'Desarrollé la identidad visual completa del proyecto. Diseñé la interfaz de usuario centrada en la experiencia, implementé la lógica de recomendación y realicé la integración con el SDK MercadoPago para pagos seguros.',
    images: [
      "https://res.cloudinary.com/dahkwcslh/image/upload/f_auto,q_auto,w_920/v1778984455/LandingPage_w5bh98.png"
    ],
    imagePath: '/images/projects/frimeet.jpg',
    link: '#',
    tags: ['Front-End', 'MercadoPago', 'UX/UI'],
    technologies: ['Figma', 'Angular', 'Typescript', 'Nodejs', 'MongoDB', 'Express', 'PostgreSQL'].map(createTechIcon),
    designPatterns: ['MVC', 'Atomic design'].map(createPatternIcon),
    mainFeatures: [
      'Recomendaciones personalizadas de lugares',
      'Integración segura de pagos con MercadoPago',
      'Filtros avanzados por preferencia y presupuesto',
      'Sistema de calificaciones y reviews'
    ],
    color: '#ffb800',
    type: 'web'
  },
  {
    id: 'coiners-drift',
    title: 'COINERS DRIFT',
    shortDescription: 'Plataforma de entretenimiento recreativo',
    description:
      'Plataforma Web3 de entretenimiento recreativo que redefine la experiencia de juego. Su diseño busca la desestimulación activa para aliviar el estrés e implementa un sistema de recompensas con tokens por medio de blockchain. Este proyecto fue el tercer lugar del Hackathon Tech Sin Fronteras 2023.',
    problem:
      'Los usuarios suelen jugar para relajarse, pero en muchas ocasiones, las opciones disponibles pueden llegar a aumentar su estrés o sobreestimularlos.',
    myJob:
      'Lideré la conceptualización del proyecto desde cero, realizando investigación de mercado. Responsable del diseño completo de wireframes, mockups y assets necesarios, definiendo la estructura de información y flujos de usuario.',
    images: [],
    imagePath: '/images/projects/coiners-drift.jpg',
    link: '#',
    mainTag: '3er Lugar Hackathon',
    tags: ['UX/UI', 'Front-End', 'Wireframing'],
    technologies: ['PixelStudio', 'Figma', 'HTML5', 'JavaScript', 'CSS3'].map(createTechIcon),
    designPatterns: ['Web3', 'Blockchain', 'MVC'].map(createPatternIcon),
    mainFeatures: [
      'Interfaz intuitiva de juego relajante',
      'Mecánicas de desestresamiento activo',
      'Sistema de progresión personalizado',
      'Animaciones fluidas y responsivas'
    ],
    color: '#ffb800',
    type: 'web'
  },
  {
    id: 'crehor',
    title: 'CREHOR',
    shortDescription: 'Plataforma para generación de horarios escolares',
    description:
      'Plataforma web para la generación de horarios escolares. Utiliza algoritmos de optimización para crear horarios eficientes y equilibrados, considerando restricciones como disponibilidad de profesores y grupos.',
    problem:
      'La generación de horarios escolares manualmente es un proceso tedioso y propenso a errores, lo que afecta la eficiencia y el bienestar de los estudiantes y docentes, que pueden sufrir por la falta de organización en estos procesos.',
    myJob:
      'Conceptualicé el sistema de generación de horarios, diseñé e implementé la interfaz de usuario, desarrollé el Back-End completo junto con la integración con bases de datos y desplegué la plataforma en un entorno de producción.',
    images: [],
    imagePath: '/images/projects/vaultdoc.jpg',
    link: '#',
    tags: ['UX/UI', 'Full-Stack', 'DevOps'],
    technologies: [ 'Figma', 'TypeScript', 'Angular', 'JavaScript', 'Nodejs', 'Express', 'AWS', 'MySQL',].map(createTechIcon),
    designPatterns: ['MVC', 'Rutas protegidas', 'Autenticación'].map(createPatternIcon),
    mainFeatures: [
      'Generación automática de horarios con algoritmos de optimización',
      'Gestión de restricciones y preferencias',
      'Gestión de horarios, grupos y profesores',
      'Navegación de rutas protegidas y autenticación de usuarios'
    ],
    color: '#ffb800',
    type: 'web'
  },
  //Falta corregir Jessy, OptaStek, Arte digital
];

// Proyectos Mobile
export const mobileProjects = [
  {
    id: 'sebwave',
    title: 'Sebwave',
    shortDescription: 'App para gestión de gastos compartidos',
    description:
      'Aplicación que permite obtener información en tiempo real sobre las condiciones del tráfico en la ciudad, utilizando un dispositivo IoT para monitorear el tráfico y gestionar los estados de todos los semáforos por medio de modelos predictivos de IA, además de una plataforma web para visualizar los datos y gestionar rutas de manera inteligente.',
    problem:
      'Los semáforos de tiempo fijo generan congestionamiento innecesario, emisiones evitables y retrasos en emergencias médicas que cuestan vidas.',
    myJob:
      'Participé en la conceptualización del proyecto, diseñé la interfaz de usuario completa, asegurando una experiencia fluida y fácil para los usuarios, además de dirigir el diseño de la carcasa para el dispositivo IoT.',
    images: [],
    imagePath: '/images/projects/splitmeet.jpg',
    link: '#',
    mainTag: 'Talent Land 2026',
    tags: ['Android', 'IoT', 'UX/UI'],
    technologies: ['Figma', 'Kotlin', 'Android', 'JetpackCompose', 'Go', 'PostgreSQL', 'Firebase', 'AWS', 'C', 'Arduino UNOQ'].map(createTechIcon),
    designPatterns: ['IoT', 'WebSocket', 'MVVM', 'Repository', 'ViewModel', 'Automated Dependency Injection', 'SOLID', 'Clean Architecture'].map(createPatternIcon),
    mainFeatures: [
      'Integración con hardware para monitoreo de condiciones de tráfico',
      'Modelo de prediccion de tráfico en tiempo real',
      'Gestión inteligente de rutas para evitar tráfico',
      'Gestión de semáforos en la ciudad',
      'Detección de vehículos con alta prioridad (ambulancias, bomberos)'
    ],
    color: '#ffb800',
    type: 'mobile'
  },
  {
    id: 'splitmeet',
    title: 'SPLITMEET',
    shortDescription: 'App para gestión de gastos compartidos',
    description:
      'Aplicación que facilita la organización de gastos compartidos en salidas con amigos, familia o pareja. Divide las cuentas según el método elegidopor el usuario y mantiene un historial claro de los gastos grupales.',
    problem:
      'Dividir los gastos en salidas grupales puede ser complicado y generar confusión o malentendidos, especialmente cuando se trata de diferentes métodos de división y la necesidad de mantener un registro claro de quién debe qué a quién.',
    myJob:
      'Diseñé la interfaz de usuario completa, implementé las funcionalidades en Kotlin, implementé uso de hardware y persistencia de datos local por medio de Rooms, asegurando una experiencia fluida y fácil de usar para los usuarios.',
    images: [],
    imagePath: '/images/projects/splitmeet.jpg',
    link: '#',
    tags: ['Android', 'Finanzas', 'UX/UI'],
    technologies: ['Figma', 'Kotlin', 'Android', 'JetpackCompose', 'Go', 'PostgreSQL', 'Rooms', 'Firebase', 'AWS', 'Hilt'].map(createTechIcon),
    designPatterns: ['WebSocket', 'MVVM', 'Repository', 'ViewModel', 'Automated Dependency Injection', 'SOLID', 'Clean Architecture'].map(createPatternIcon),
    mainFeatures: [
      'Algoritmo inteligente de división de gastos',
      'Historial detallado de transacciones',
      'Liquidación automática de deudas',
      'Notificaciones de pagos pendientes'
    ],
    color: '#ffb800',
    type: 'mobile'
  },
  {
    id: 'scoreup',
    title: 'ScoreUp',
    shortDescription: 'App de productividad académica gamificada',
    description:
      'Aplicación diseñada para ayudar a estudiantes a organizar sus retos de estudio. Permite crear metas, hacer seguimiento del progreso propio y de sus compañeros en tiempo real para mantener la motivación académica de forma gamificada.',
    problem:
      'Los estudiantes luchan con la motivación y la organización del estudio, a menudo se sienten abrumados por la cantidad de tareas y la falta de un sistema efectivo para seguir su progreso, lo que puede llevar a la procrastinación y al estrés académico.',
    myJob:
      'Diseñé el sistema de gamificación y las interfaces. Desarrollé y desplegué la API para el seguimiento de progreso en tiempo real y la lógica de ranking, implementando funcionalidades de interacción social entre usuarios.',
    images: [],
    imagePath: '/images/projects/scoreup.jpg',
    link: '#',
    tags: ['Android', 'Productividad', 'UX/UI'],
    technologies: ['Kotlin', 'Android', 'JetpackCompose', 'Hilt', 'Go', 'AWS'].map(createTechIcon),
    designPatterns: ['WebSocket', 'MVVM', 'Repository', 'ViewModel', 'Automated Dependency Injection', 'SOLID'].map(createPatternIcon),
    mainFeatures: [
      'Sistema de gamificación por puntos y logros',
      'Creación de metas y retos personalizados',
      'Ranking global y entre amigos',
      'Seguimiento de progreso en tiempo real',
      'Estadísticas detalladas de estudio'
    ],
    color: '#ffb800',
    type: 'mobile'
  },
  {
    id: 'cineradar',
    title: 'CineRadar',
    shortDescription: 'App móvil de recomendación de películas',
    description:
      'Aplicación móvil que recomienda películas personalizadas según los gustos del usuario. Implementa algoritmos de recomendación y una interfaz intuitiva para descubrir nuevo contenido cinematográfico.',
    problem:
      'Con frecuencia, elegir una película para ver puede ser abrumador debido a la gran cantidad de opciones disponibles, esto puede generar estrés y dificultar la toma de decisiones para los usuarios, e incluso conllevar a discusiones al elegir en grupo.',
    myJob:
      'Diseñé la interfaz de usuario intuitiva. Implementé algoritmo de recomendación colaborativo y desarrollé la lógica de filtrado y búsqueda con integración a APIs de películas ya existentes.',
    images: [],
    imagePath: '/images/projects/cineradar.jpg',
    link: '#',
    tags: ['Android', 'Kotlin', 'API Integrations'],
    technologies: ['kotlin', 'Android', 'JetpackCompose', 'TMDB API'].map(createTechIcon),
    designPatterns: ['MVVM', 'Factory Pattern', 'SOLID', 'ViewModel'].map(createPatternIcon),
    mainFeatures: [
      'Algoritmo de recomendación colaborativo',
      'Búsqueda avanzada de películas',
      'Lista de películas recientemente agregadas',
      'Integración con APIs de cine'
    ],
    color: '#ffb800',
    type: 'mobile'
  },
  //Aqui falta Sebwave, Frimeet, etc
];

// Proyectos Ilustración
export const illustrationProjects = [
  {
    id: 'entre-senas-palabras',
    title: 'Entre Señas y Palabras',
    shortDescription: 'Cuadernillo ilustrado de LSM',
    description:
      'Cuadernillo ilustrado para el aprendizaje de Lengua de Señas Mexicana (LSM). Responsable parcial de la ilustración del proyecto, creando recursos visuales accesibles para facilitar la comunicación inclusiva.',
    problem:
      'Falta de recursos visuales educativos accesibles para el aprendizaje de LSM. Se requiere material ilustrado que fuera inclusivo, claro y pedagógicamente efectivo.',
    myJob:
      'Creé ilustraciones detalladas de cada seña, asegurando precisión anatómica y claridad pedagógica con el asesoramiento de expertos en LSM.',
    images: [],
    imagePath: '/images/projects/entre-senas.jpg',
    link: '#',
    tags: ['Ilustración', 'Editorial', 'Educativo'],
    technologies: ['Figma', 'Affinity', 'Google Drive'].map(createTechIcon),
    designPatterns: ['Diseño editorial', 'Accesibilidad'].map(createPatternIcon),
    mainFeatures: [
      'Ilustraciones inclusivas y accesibles',
      'Diagramación pedagógica optimizada',
      'Precisión anatómica en señas',
      'Recursos didácticos complementarios'
    ],
    color: '#ffb800',
    type: 'illustration'
  },
   {
    id: 'videojuego-2d',
    title: 'VIDEOJUEGO 2D EDUCATIVO',
    shortDescription: 'Juego educativo para museo de ciencia',
    description:
      'Juego educativo 2D para el Museo Chiapas de Ciencia y Tecnología (MUCH) sobre la formación del cuerpo humano. Encargado de todos los assets visuales, sprites, frames y animaciones interactivas.',
    problem:
      'El museo requería una herramienta interactiva para educar a visitantes sobre la formación del cuerpo humano de manera lúdica y atractiva para todas las edades.',
    myJob:
      'Responsable de toda la dirección artística y producción visual. Creé diseños de personajes, ambientes, sprites y animaciones frame-by-frame. Optimicé assets para garantizar rendimiento.',
    images: [],
    imagePath: '/images/projects/videojuego-2d.jpg',
    link: '#',
    tags: ['Game Dev', 'Assets 2D', 'Animación'],
    technologies: ['Gimp', 'PixelStudio', 'Figma', 'Python', 'PyGame'].map(createTechIcon),
    designPatterns: ['Clean Architecture', '2D Game Development', 'Game Design'].map(createPatternIcon),
    mainFeatures: [
      'Mecánicas educativas interactivas',
      'Animaciones frame-by-frame detalladas',
      'Niveles progresivos de dificultad',
      'Sistema de puntuación y logros'
    ],
    color: '#ffb800',
    type: 'web'
  },
];

// Todos los proyectos (combinado para compatibilidad hacia atrás)
const projects = [
  ...webProjects,
  ...mobileProjects,
  ...illustrationProjects,
];

export default projects;
