const skills = {
  frontendAndDesign: {
    title: 'Frontend y diseño',
    icon: '🎨',
    items: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Avanzado' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Avanzado' },
      { name: 'Jetpack Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg', level: 'Intermedio' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', level: 'Intermedio' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Avanzado' },
      { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', level: 'Básico' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 'Intermedio' },
    ],
  },
  backendAndDB: {
    title: 'Backend y Base de datos',
    icon: '⚙️',
    items: [
      { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Avanzado' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', level: 'Intermedio' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Avanzado' },
      { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg', level: 'Intermedio' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 'Avanzado' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Intermedio' },
    ],
  },
  languages: {
    title: 'Lenguajes de programación',
    icon: '💻',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'Avanzado' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', level: 'Intermedio' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', level: 'Intermedio' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 'Avanzado' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Avanzado' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 'Intermedio' },
    ],
  },
  devopsAndCloud: {
    title: 'DevOps y Cloud',
    icon: '☁️',
    items: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', level: 'Intermedio' },
      { name: 'CloudFlare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', level: 'Intermedio' },
      { name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg', level: 'Básico' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 'Avanzado' },
    ],
  },
  designPatterns: {
    title: 'Patrones de diseño',
    icon: '🧩',
    items: [
      { name: 'MVC', description: 'Model-View-Controller para separación clara de lógica, datos y presentación.' },
      { name: 'MVVM', description: 'Model-View-ViewModel para binding reactivo entre vista y modelo.' },
      { name: 'Repository', description: 'Abstracción de la capa de datos para desacoplar fuentes de información.' },
      { name: 'Observer', description: 'Patrón de suscripción para eventos y actualización reactiva.' },
      { name: 'Factory', description: 'Creación de objetos sin exponer la lógica de instanciación.' },
      { name: 'Singleton', description: 'Garantiza una única instancia de una clase en toda la aplicación.' },
      { name: 'Strategy', description: 'Permite intercambiar algoritmos dinámicamente en tiempo de ejecución.' },
      { name: 'Adapter', description: 'Adapta una interfaz a otra para compatibilidad entre componentes.' },
    ],
  },
  cleanArchitecture: {
    title: 'Arquitecturas limpias',
    icon: '🏗️',
    items: [
      { name: 'Clean Architecture', description: 'Separación en capas con dependencias apuntando hacia el dominio.' },
      { name: 'Hexagonal', description: 'Arquitectura de puertos y adaptadores para independencia de infraestructura.' },
      { name: 'Microservicios', description: 'Descomposición en servicios independientes y escalables.' },
      { name: 'DDD', description: 'Domain-Driven Design con enfoque en la lógica de negocio.' },
      { name: 'CQRS', description: 'Separación de comandos y consultas para mayor escalabilidad.' },
      { name: 'Event-Driven', description: 'Arquitectura basada en eventos para sistemas desacoplados.' },
    ],
  },
};

export default skills;
