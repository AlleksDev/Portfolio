# Guía de Carga de Imágenes - Sección Proyectos

## Estado Actual

La sección de proyectos tiene la estructura lista para cargar imágenes, pero actualmente **NO carga imágenes reales**. 

## Estructura Preparada

- ✅ Componente `ProjectCard` con manejo de imágenes configurado
- ✅ Utilidad `imageLoader.js` para gestionar rutas de imágenes
- ✅ Campo `imagePath` en cada proyecto para rutas futuras
- ✅ Validación de imágenes disponibles
- ✅ Placeholder con color de fondo mientras se carga imagen

## Para Cargar Imágenes Reales

### Paso 1: Crear Carpeta
```
public/images/projects/
```

### Paso 2: Agregar Imágenes
Colocar las siguientes imágenes en `public/images/projects/`:
- `vixel-1.jpg`
- `vixel-2.jpg`
- `vixel-3.jpg`
- `vixel-4.jpg`
- `vixel-5.jpg`
- `vixel-6.jpg`

### Paso 3: Actualizar datos/projects.js

Cambiar el campo `image` en cada proyecto de vacío a:
```javascript
image: '/images/projects/vixel-X.jpg' // Donde X es el número del proyecto
```

O alternativamente usar `imagePath` directamente:
```javascript
image: project.imagePath
```

## Características Actuales

### ProjectCard.jsx
- ✅ Manejo de imágenes con `getProjectImageUrl()`
- ✅ Placeholder con color de fondo cuando no hay imagen
- ✅ Lazy loading habilitado
- ✅ Accesibilidad mejorada (keyboard navigation, ARIA labels)
- ✅ Overlay con información del proyecto en hover

### imageLoader.js
Incluye utilidades para:
- `getProjectImageUrl()` - Obtiene URL de imagen
- `getProjectPlaceholder()` - Obtiene color de placeholder
- `isImageAvailable()` - Verifica disponibilidad de imagen

## Diseño

- Grid responsivo: 3 columnas en desktop, 2 en tablet, 1 en mobile
- Animación hover con elevación (-8px)
- Zoom de imagen en hover (1.08x)
- Overlay con gradient oscuro
- Botón "Ver proyecto" con interactividad
- Aspect ratio 1:1 (cuadradas)

## Próximos Pasos

1. Preparar imágenes de proyectos (800x800px recomendado)
2. Colocar en carpeta `public/images/projects/`
3. Actualizar campo `image` en `src/data/projects.js`
4. Las imágenes se cargarán automáticamente
