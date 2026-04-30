// Importaciones de iconos locales (SVGs)
import affinityIcon from '../assets/icons/programs/affinity.svg';
import awsIcon from '../assets/icons/programs/aws.svg';
import githubIcon from '../assets/icons/programs/github.svg';
import mysqlIcon from '../assets/icons/programs/mysql.svg';
import solidworksIcon from '../assets/icons/programs/solidworks.svg';
import expressIcon from '../assets/icons/programs/express.svg';

// Iconos de arquitecturas
import cleanArchIcon from '../assets/icons/architectures/clean-architecture.svg';
import hexagonIcon from '../assets/icons/architectures/hexagon.svg';
import triangleIcon from '../assets/icons/architectures/triangle.svg';
import eventDrivenIcon from '../assets/icons/architectures/event-driven.svg';
import mvvmIcon from '../assets/icons/architectures/mvvm.svg';
import designPatternsIcon from '../assets/icons/architectures/design-design.svg';

// Iconos de habilidades blandas
import teamworkIcon from '../assets/icons/softSkills/teamwork.svg';
import communicationIcon from '../assets/icons/softSkills/communication.svg';
import creativityIcon from '../assets/icons/softSkills/creativity.svg';
import leadershipIcon from '../assets/icons/softSkills/leadership.svg';
import fastLearningIcon from '../assets/icons/softSkills/fast.svg';
import criticalThinkingIcon from '../assets/icons/softSkills/criticalThinking.svg';
import adaptableIcon from '../assets/icons/softSkills/adaptable.svg';
import pressureIcon from '../assets/icons/softSkills/pressure.svg';

// Función auxiliar para generar URLs de devicons
const devIcon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

// Mapeo de iconos de tecnologías (local + devicons)
export const techIconsMap = {
  affinity: affinityIcon,
  aws: awsIcon,
  github: githubIcon,
  mysql: mysqlIcon,
  solidworks: solidworksIcon,
  express: expressIcon,
  // Otros por defecto usan devicons
};

// Mapeo de iconos de patrones de diseño y arquitecturas
export const patternIconsMap = {
  'Arquitectura limpia': cleanArchIcon,
  'Clean Architecture': cleanArchIcon,
  'Hexagonal': hexagonIcon,
  'Hexagonal / Puertos y adaptadores': hexagonIcon,
  'MVC': triangleIcon,
  'Modelo Vista Controlador': triangleIcon,
  'Event Driven': eventDrivenIcon,
  'MVVM': mvvmIcon,
  'Modelo Vista ViewModel': mvvmIcon,
};

// Habilidades técnicas
export const techSkillsCategories = [
  {
    title: 'Frontend',
    icon: 'fa-code',
    items: [
      { name: 'HTML', icon: devIcon('html5'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'CSS', icon: devIcon('css3'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'Tailwind', icon: devIcon('tailwindcss'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'Jetpack Compose', icon: devIcon('jetpackcompose'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'Angular', icon: devIcon('angular'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'React', icon: devIcon('react'), level: 'Medio', levelClass: 'level-mid' },
    ],
  },
  {
    title: 'Diseño',
    icon: 'fa-pen-nib',
    items: [
      { name: 'Blender', icon: devIcon('blender'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'Affinity', icon: affinityIcon, level: 'Avanzado', levelClass: 'level-high' },
      { name: 'Gimp', icon: devIcon('gimp'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'Figma', icon: devIcon('figma'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'SolidWorks', icon: solidworksIcon, level: 'Medio', levelClass: 'level-mid' },
    ],
  },
  {
    title: 'Backend',
    icon: 'fa-server',
    items: [
      { name: 'PostgreSQL', icon: devIcon('postgresql'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'MySQL', icon: mysqlIcon, level: 'Avanzado', levelClass: 'level-high' },
      { name: 'MongoDB', icon: devIcon('mongodb'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'FastAPI', icon: devIcon('fastapi'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'Express', icon: expressIcon, level: 'Avanzado', levelClass: 'level-high' },
      { name: 'Node.js', icon: devIcon('nodejs'), level: 'Medio', levelClass: 'level-mid' },
    ],
  },
  {
    title: 'DevOps',
    icon: 'fa-cloud',
    items: [
      { name: 'Ubuntu', icon: devIcon('ubuntu'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'AWS', icon: awsIcon, level: 'Medio', levelClass: 'level-mid' },
      { name: 'Docker', icon: devIcon('docker'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'Cloudflare', icon: devIcon('cloudflare'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'Nginx', icon: devIcon('nginx'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'GitHub', icon: githubIcon, level: 'Avanzado', levelClass: 'level-high' },
    ],
  },
  {
    title: 'IOT & herramientas',
    icon: 'fa-microchip',
    items: [
      { name: 'Raspberry Pi', icon: devIcon('raspberrypi'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'ESP32', icon: devIcon('arduino'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'Arduino', icon: devIcon('arduino'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'RabbitMQ', icon: devIcon('rabbitmq'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'Git', icon: devIcon('git'), level: 'Avanzado', levelClass: 'level-high' },
    ],
  },
  {
    title: 'Lenguajes',
    icon: 'fa-code-branch',
    items: [
      { name: 'C++', icon: devIcon('cplusplus'), level: 'Principiante', levelClass: 'level-low' },
      { name: 'Python', icon: devIcon('python'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'JavaScript', icon: devIcon('javascript'), level: 'Medio', levelClass: 'level-mid' },
      { name: 'Go', icon: devIcon('go'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'Kotlin', icon: devIcon('kotlin'), level: 'Avanzado', levelClass: 'level-high' },
      { name: 'Java', icon: devIcon('java'), level: 'Medio', levelClass: 'level-mid' },
    ],
  },
];

// Habilidades blandas
export const softSkills = [
  { icon: teamworkIcon, title: 'TRABAJO EN EQUIPO', desc: 'Colaboración efectiva en células multidisciplinarias para alcanzar metas comunes de proyecto.' },
  { icon: communicationIcon, title: 'COMUNICACIÓN', desc: 'Expresión clara de ideas técnicas tanto para desarrolladores como para perfiles de negocio.' },
  { icon: creativityIcon, title: 'CREATIVIDAD', desc: 'Aportación de enfoques innovadores tanto en interfaces gráficas como en soluciones lógicas.' },
  { icon: leadershipIcon, title: 'LIDERAZGO', desc: 'Guía técnica y de conceptualización, asumiendo responsabilidad o propiedad (ownership) del producto.' },
  { icon: fastLearningIcon, title: 'APRENDIZAJE RÁPIDO', desc: 'Capacidad de investigar e implementar nuevos lenguajes, frameworks o SDKs velozmente.' },
  { icon: criticalThinkingIcon, title: 'PENSAMIENTO CRÍTICO', desc: 'Análisis profundo de requerimientos para encontrar soluciones eficientes y escalables.' },
  { icon: adaptableIcon, title: 'ADAPTABILIDAD', desc: 'Facilidad para ajustarme a cambios de requerimientos en entornos ágiles y competitivos.' },
  { icon: pressureIcon, title: 'TRABAJO BAJO PRESIÓN', desc: 'Experiencia demostrada entregando desarrollos de alta calidad con fechas límite estrictas.' },
];

// Patrones y arquitecturas
export const patternsAndArchitectures = [
  { icon: cleanArchIcon, title: 'Arquitectura limpia', desc: 'Separación de responsabilidades en capas para lograr un código independiente, testeable y muy mantenible.' },
  { icon: hexagonIcon, title: 'Hexagonal / Puertos y adaptadores', desc: 'Aislamiento de la lógica de negocio central de las bases de datos y frameworks mediante puertos e implementaciones externas.' },
  { icon: triangleIcon, title: 'Modelo Vista Controlador (MVC)', desc: 'Estructuración clásica separando la interfaz de usuario, la lógica de datos y el flujo de control para facilitar el desarrollo.' },
  { icon: eventDrivenIcon, title: 'Event Driven', desc: 'Arquitectura dirigida por eventos enfocada en el bajo acoplamiento y flujos asíncronos para sistemas altamente reactivos.' },
  { icon: mvvmIcon, title: 'Modelo Vista ViewModel (MVVM)', desc: 'Desacoplamiento especializado en desarrollo Front-End (ej. con Android/Jetpack) que facilita el enlace bidireccional de datos.' },
  { icon: designPatternsIcon, title: 'Patrones de diseño', desc: 'Aplicación de patrones creacionales, estructurales y de comportamiento (Singleton, Observer, Factory, etc) para resolver problemas comunes.' },
];

// Objeto de habilidades antiguo (se mantiene para compatibilidad hacia atrás si es necesario)
const skills = {
  frontendAndDesign: {
    title: 'Frontend y diseño',
    icon: '🎨',
    items: [
      { name: 'HTML', icon: devIcon('html5'), level: 'Avanzado' },
      { name: 'CSS', icon: devIcon('css3'), level: 'Avanzado' },
      { name: 'Jetpack Compose', icon: devIcon('jetpackcompose'), level: 'Intermedio' },
      { name: 'Angular', icon: devIcon('angular'), level: 'Intermedio' },
      { name: 'React', icon: devIcon('react'), level: 'Avanzado' },
      { name: 'Blender', icon: devIcon('blender'), level: 'Básico' },
      { name: 'Figma', icon: devIcon('figma'), level: 'Intermedio' },
    ],
  },
  backendAndDB: {
    title: 'Backend y Base de datos',
    icon: '⚙️',
    items: [
      { name: 'NodeJS', icon: devIcon('nodejs'), level: 'Avanzado' },
      { name: 'FastAPI', icon: devIcon('fastapi'), level: 'Intermedio' },
      { name: 'MySQL', icon: devIcon('mysql'), level: 'Avanzado' },
      { name: 'MariaDB', icon: devIcon('mariadb'), level: 'Intermedio' },
      { name: 'PostgreSQL', icon: devIcon('postgresql'), level: 'Avanzado' },
      { name: 'MongoDB', icon: devIcon('mongodb'), level: 'Intermedio' },
    ],
  },
  languages: {
    title: 'Lenguajes de programación',
    icon: '💻',
    items: [
      { name: 'Python', icon: devIcon('python'), level: 'Avanzado' },
      { name: 'Go', icon: devIcon('go'), level: 'Intermedio' },
      { name: 'Kotlin', icon: devIcon('kotlin'), level: 'Intermedio' },
      { name: 'Java', icon: devIcon('java'), level: 'Avanzado' },
      { name: 'JavaScript', icon: devIcon('javascript'), level: 'Avanzado' },
      { name: 'C++', icon: devIcon('cplusplus'), level: 'Intermedio' },
    ],
  },
  devopsAndCloud: {
    title: 'DevOps y Cloud',
    icon: '☁️',
    items: [
      { name: 'AWS', icon: devIcon('amazonwebservices'), level: 'Intermedio' },
      { name: 'CloudFlare', icon: devIcon('cloudflare'), level: 'Intermedio' },
      { name: 'RabbitMQ', icon: devIcon('rabbitmq'), level: 'Básico' },
      { name: 'GitHub', icon: devIcon('github'), level: 'Avanzado' },
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
