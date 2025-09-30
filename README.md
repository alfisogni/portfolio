# 🚀 Portfolio Personal

Un portfolio moderno y completamente personalizable con animaciones impresionantes y diseño responsive.

## ✨ Características

- **Diseño Moderno**: Cards animadas con efectos 3D y parallax
- **Totalmente Responsive**: Se adapta a cualquier dispositivo
- **Animaciones Suaves**: Efectos de scroll y hover profesionales
- **Fácil Personalización**: Sistema de configuración simple
- **Optimizado**: Carga rápida y rendimiento optimizado

## 🛠️ Personalización Rápida

### 1. Información Personal

Edita directamente en el HTML o usa JavaScript:

```javascript
Portfolio.updatePersonalInfo({
    name: "Tu Nombre",
    title: "Tu Título Profesional",
    description: "Tu descripción personal",
    email: "tu.email@ejemplo.com",
    phone: "+34 123 456 789",
    location: "Tu Ciudad, País"
});
```

### 2. Agregar Proyectos

```javascript
Portfolio.addProject({
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto...",
    image: "images/proyecto.jpg",
    demoUrl: "https://demo.com",
    codeUrl: "https://github.com/tu-usuario/proyecto",
    tags: ["React", "Node.js", "MongoDB"]
});
```

### 3. Actualizar Habilidades

```javascript
Portfolio.updateSkills([
    "JavaScript", "React", "Node.js", "Python", 
    "HTML/CSS", "MongoDB", "Git", "Docker"
]);
```

### 4. Personalizar Estadísticas

```javascript
Portfolio.updateStats([
    { number: "3+", label: "Años de Experiencia" },
    { number: "25+", label: "Proyectos Completados" },
    { number: "100%", label: "Satisfacción del Cliente" }
]);
```

## 📁 Estructura de Archivos

```
portfolio/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── images/             # Carpeta para imágenes
│   ├── profile.jpg     # Tu foto de perfil
│   ├── project1.jpg    # Imagen del proyecto 1
│   ├── project2.jpg    # Imagen del proyecto 2
│   └── ...
└── README.md          # Este archivo
```

## 🖼️ Imágenes Requeridas

Para un funcionamiento completo, agrega estas imágenes a la carpeta `images/`:

- `profile.jpg` - Tu foto de perfil (350x350px recomendado)
- `project1.jpg` - Imagen del proyecto 1
- `project2.jpg` - Imagen del proyecto 2
- `project3.jpg` - Imagen del proyecto 3
- `project4.jpg` - Imagen del proyecto 4

### Tamaños Recomendados:
- **Foto de perfil**: 350x350px (cuadrada)
- **Imágenes de proyectos**: 400x250px (rectangular)

## 🎨 Personalización de Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Color principal */
    --secondary-color: #764ba2;    /* Color secundario */
    --accent-color: #f093fb;       /* Color de acento */
    --dark-color: #2c3e50;         /* Color oscuro */
    --text-color: #333;            /* Color del texto */
}
```

## 📱 Secciones del Portfolio

### 1. **Hero/Inicio**
- Presentación personal
- Foto de perfil con animación flotante
- Botones de acción

### 2. **Sobre Mí**
- Descripción personal
- Habilidades técnicas
- Estadísticas profesionales

### 3. **Proyectos** ⭐
- Cards animadas con efectos 3D
- Overlay con enlaces a demo y código
- Tags de tecnologías utilizadas
- Efectos hover avanzados

### 4. **Contacto**
- Información de contacto
- Formulario funcional
- Enlaces a redes sociales

## 🚀 Cómo Usar

1. **Descarga/Clona** el proyecto
2. **Personaliza** la información en `index.html`
3. **Agrega tus imágenes** en la carpeta `images/`
4. **Modifica colores** si deseas en `styles.css`
5. **Abre** `index.html` en tu navegador

## 💡 Consejos de Personalización

### Para Desarrolladores:
- Modifica directamente el HTML para cambios permanentes
- Usa las funciones JavaScript para cambios dinámicos
- Personaliza las animaciones en `script.js`

### Para No Desarrolladores:
- Cambia solo los textos en `index.html`
- Reemplaza las imágenes manteniendo los nombres
- Usa las funciones JavaScript básicas

## 🎯 Funcionalidades Destacadas

### Cards de Proyectos:
- ✨ Efectos 3D al hacer hover
- 🌟 Animaciones de entrada escalonadas
- 🔄 Overlay con botones de acción
- 📱 Completamente responsive

### Animaciones:
- 📜 Scroll suave entre secciones
- 🎭 Animaciones AOS (Animate On Scroll)
- ⌨️ Efecto de escritura automática
- 🎨 Parallax en la imagen de perfil

### Interactividad:
- 📱 Menú móvil responsive
- ✉️ Formulario de contacto animado
- 🎯 Navegación inteligente
- 🖱️ Efectos hover profesionales

## 🔧 Personalización Avanzada

### Agregar Nuevas Secciones:
1. Crea el HTML correspondiente
2. Agrega los estilos CSS
3. Actualiza la navegación
4. Añade animaciones si es necesario

### Modificar Animaciones:
- Cambia la duración en `AOS.init()`
- Personaliza los efectos hover en CSS
- Modifica las transiciones en las variables CSS

## 📞 Soporte

Si necesitas ayuda con la personalización:
1. Revisa los comentarios en el código
2. Consulta la documentación de AOS
3. Experimenta con las variables CSS

## 🎉 ¡Listo para Personalizar!

Tu portfolio está preparado para ser completamente tuyo. Solo necesitas:
1. Cambiar los textos por tu información
2. Agregar tus imágenes
3. Personalizar los colores si deseas

¡Disfruta de tu nuevo portfolio profesional! 🚀