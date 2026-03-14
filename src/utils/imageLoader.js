/**
 * Utilidad para manejar la carga de imágenes de proyectos
 * Esta estructura permite cargar imágenes cuando sea necesario sin que estén presentes inicialmente
 */

/**
 * Obtiene la URL de la imagen de un proyecto
 * @param {Object} project - Objeto del proyecto
 * @returns {string} - URL de la imagen o string vacío si no está disponible
 */
export const getProjectImageUrl = (project) => {
  // Si existe URL directa, úsala (para desarrollo con placehold.co, etc)
  if (project.image) {
    return project.image;
  }
  
  // Si existe imagePath, será usada para cargar imágenes locales después
  if (project.imagePath) {
    return project.imagePath;
  }
  
  return '';
};

/**
 * Obtiene un placeholder por defecto mientras se carga la imagen
 * @param {Object} project - Objeto del proyecto
 * @returns {string} - Color de fondo o imagen placeholder
 */
export const getProjectPlaceholder = (project) => {
  return project.color || '#1a1a1a';
};

/**
 * Verifica si una imagen está disponible
 * @param {Object} project - Objeto del proyecto
 * @returns {boolean} - true si la imagen está disponible
 */
export const isImageAvailable = (project) => {
  return !!(project.image || project.imagePath);
};

// Estructura para cuando se carguen imágenes reales
// Crear carpeta public/images/projects/ y agregar:
// - vixel-1.jpg
// - vixel-2.jpg
// - vixel-3.jpg
// - vixel-4.jpg
// - vixel-5.jpg
// - vixel-6.jpg
