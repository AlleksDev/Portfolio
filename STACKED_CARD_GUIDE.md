# Stacked Card Image - Efecto Hover 3D

## 📋 Descripción
Componente React con efecto de hover 3D que simula una pila de documentos que se desbancan cuando pasas el ratón por encima. Incluye:

- ✅ Perspectiva 3D con `perspective: 1200px`
- ✅ Rotación suave de la imagen principal (-5deg)
- ✅ Escalado sutil (1.05x)
- ✅ Abanico de 3 tarjetas detrás con rotaciones progresivas (5deg, 10deg, 15deg)
- ✅ Transiciones suaves (0.3s ease-out)
- ✅ Responsivo (ajusta efectos en móviles)

## 🚀 Uso

### Opción 1: Como Componente React
```jsx
import StackedCardImage from '@/components/molecules/StackedCardImage/StackedCardImage';

<StackedCardImage 
  src="ruta/a/imagen.jpg" 
  alt="Descripción"
/>
```

### Opción 2: Integración en AboutSection
```jsx
import StackedCardImage from '../../../components/molecules/StackedCardImage/StackedCardImage';

const AboutSection = () => {
  return (
    <section id="about">
      {/* ... contenido ... */}
      <div className="about-image">
        <StackedCardImage 
          src={profilePic} 
          alt="Foto de perfil"
        />
      </div>
    </section>
  );
};
```

### Opción 3: HTML Puro
```html
<div class="card-container">
  <div class="stacked-card stacked-card-1"></div>
  <div class="stacked-card stacked-card-2"></div>
  <div class="stacked-card stacked-card-3"></div>
  <img src="imagen.jpg" alt="Card image" class="main-image">
</div>
```

## 🎨 Personalización

### Variables CSS que puedes ajustar:
```css
/* Color de las tarjetas */
border: 2px solid var(--orange, #e15a1a);
background: linear-gradient(135deg, rgba(225, 90, 26, 0.1), ...);

/* Distancia de desplazamiento (aumenta para más separación) */
.card-container:hover .stacked-card-1 {
  transform: translateX(12px) translateY(8px) rotateZ(5deg);
  /* Aumenta 12px/8px/5deg para más efecto */
}

/* Duración de la transición */
transition: all 0.3s ease-out;
/* Cambia 0.3s a 0.5s para más lentitud */

/* Perspectiva 3D (aumenta para menos efecto) */
perspective: 1200px;
```

### Ejemplos de personalización:

**Efecto más agresivo:**
```css
.card-container:hover .main-image {
  transform: rotateZ(-8deg) scale(1.08);
}
.card-container:hover .stacked-card-1 {
  transform: translateX(20px) translateY(15px) rotateZ(8deg);
}
.card-container:hover .stacked-card-2 {
  transform: translateX(40px) translateY(30px) rotateZ(16deg);
}
.card-container:hover .stacked-card-3 {
  transform: translateX(60px) translateY(45px) rotateZ(24deg);
}
```

**Efecto más sutil:**
```css
.card-container:hover .main-image {
  transform: rotateZ(-2deg) scale(1.02);
}
.card-container:hover .stacked-card-1 {
  transform: translateX(6px) translateY(4px) rotateZ(2deg);
}
```

## 📐 Propiedades Clave

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `perspective` | 1200px | Crea efecto 3D en el contenedor padre |
| `transform: rotateZ()` | -5deg | Rotación en eje Z (plano 2D) |
| `transform: scale()` | 1.05 | Escalado hacia arriba |
| `transform: translateX/Y()` | 12px/8px | Desplazamiento horizontal y vertical |
| `transition` | 0.3s ease-out | Transición suave |
| `z-index` | 7-10 | Apilamiento de capas |

## 🔧 Detalles Técnicos

### Stack de Z-index:
- z-index: 10 → Imagen principal (.main-image)
- z-index: 9 → Tarjeta 1 (.stacked-card-1)
- z-index: 8 → Tarjeta 2 (.stacked-card-2)
- z-index: 7 → Tarjeta 3 (.stacked-card-3)
- z-index: 0 → Sombra de fondo (.card-container::before)

### Responsive Breakpoints:
- **Desktop (> 1024px)**: Efecto completo
- **Tablet (768px - 1024px)**: Efecto reducido 50%
- **Mobile (< 640px)**: Efecto muy sutil (¿esconder tarjetas?)

## 📱 Soporte Móvil

En pantallas táctiles, los efectos se reducen automáticamente:
- La rotación se reduce de -5deg a -3deg
- Los desplazamientos se dividen entre 1.5 y 2
- El escalado es más conservador (1.03 en lugar de 1.05)

Para deshabilitar completamente en móviles:
```css
@media (max-width: 768px) {
  .card-container:hover .stacked-card-1,
  .card-container:hover .stacked-card-2,
  .card-container:hover .stacked-card-3 {
    transform: none;
  }
}
```

## 🎯 Casos de Uso

1. **Perfil/Avatar**: Imagen de usuario con efecto "professional"
2. **Portafolio**: Miniaturas de proyectos con interactividad
3. **Testimonios**: Fotos de usuarios destacadas
4. **Productos**: Cards de artículos con efecto premium
5. **Blog**: Thumbnails de artículos destacados

## 📂 Archivos

- `StackedCardImage.jsx` - Componente React
- `StackedCardImage.css` - Estilos (importable directamente)
- `stacked-card-demo.html` - Demostración HTML pura

## 🧪 Testing

Abre `stacked-card-demo.html` en el navegador para ver el efecto funcionando en tiempo real.

---

**Creado**: Abril 29, 2026  
**Version**: 1.0  
**Compatibilidad**: Chrome, Firefox, Safari, Edge (soportan CSS transforms 3D)
