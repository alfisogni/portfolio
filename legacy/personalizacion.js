// 🎯 PERSONALIZACIÓN RÁPIDA DEL PORTFOLIO
// ================================================
// Copia y pega este código en la consola del navegador
// o agrégalo al final de script.js para personalizar tu portfolio

// ✨ EJEMPLO DE PERSONALIZACIÓN COMPLETA
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 👤 INFORMACIÓN PERSONAL
    Portfolio.updatePersonalInfo({
        name: "María García",
        title: "Desarrolladora Full Stack",
        description: "Apasionada por crear experiencias web innovadoras y soluciones tecnológicas que marquen la diferencia.",
        email: "maria.garcia@email.com",
        phone: "+34 666 777 888",
        location: "Madrid, España"
    });

    // 2. 🛠️ HABILIDADES TÉCNICAS
    Portfolio.updateSkills([
        "JavaScript", "React", "Vue.js", "Node.js", 
        "Python", "Django", "MongoDB", "PostgreSQL",
        "HTML5", "CSS3", "SASS", "Git", "Docker", "AWS"
    ]);

    // 3. 📊 ESTADÍSTICAS PROFESIONALES
    Portfolio.updateStats([
        { number: "4+", label: "Años de Experiencia" },
        { number: "30+", label: "Proyectos Completados" },
        { number: "98%", label: "Satisfacción del Cliente" }
    ]);

    // 4. 🚀 PROYECTOS (Ejemplos de cómo agregar más)
    /*
    Portfolio.addProject({
        title: "E-commerce Moderno",
        description: "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
        image: "images/ecommerce.jpg",
        demoUrl: "https://mi-ecommerce-demo.com",
        codeUrl: "https://github.com/usuario/ecommerce",
        tags: ["React", "Node.js", "MongoDB", "Stripe"]
    });

    Portfolio.addProject({
        title: "App de Gestión de Tareas",
        description: "Aplicación web para gestión de proyectos y tareas con colaboración en tiempo real y notificaciones.",
        image: "images/task-app.jpg",
        demoUrl: "https://mi-task-app.com",
        codeUrl: "https://github.com/usuario/task-app",
        tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"]
    });
    */
});

// 🎨 PERSONALIZACIÓN DE COLORES
// ================================================
// Descomenta y modifica estos estilos para cambiar los colores

/*
document.documentElement.style.setProperty('--primary-color', '#e74c3c');     // Rojo
document.documentElement.style.setProperty('--secondary-color', '#c0392b');   // Rojo oscuro
document.documentElement.style.setProperty('--accent-color', '#f39c12');      // Naranja
*/

// 💡 OTROS EJEMPLOS DE PERSONALIZACIÓN
// ================================================

// Cambiar el texto del botón de contacto
// document.querySelector('.btn-secondary').textContent = 'Hablemos';

// Cambiar el texto del footer
// document.querySelector('.footer p').textContent = '© 2025 Tu Nombre. Hecho con ❤️ y código.';

// Agregar más enlaces sociales
/*
const socialLinks = document.querySelector('.social-links');
const newLink = document.createElement('a');
newLink.href = 'https://instagram.com/tu-usuario';
newLink.innerHTML = '<i class="fab fa-instagram"></i>';
newLink.setAttribute('aria-label', 'Instagram');
socialLinks.appendChild(newLink);
*/

// 📋 GUÍA RÁPIDA DE PERSONALIZACIÓN
// ================================================
console.log(`
🎉 ¡Bienvenido a tu nuevo portfolio!

📝 PASOS PARA PERSONALIZAR:

1. 📄 EDITAR TEXTOS:
   - Abre index.html
   - Busca "Tu Nombre" y cámbialo por tu nombre real
   - Actualiza la descripción en la sección hero
   - Modifica la información de contacto

2. 🖼️ AGREGAR IMÁGENES:
   - Agrega tu foto como "profile.jpg" en la carpeta images/
   - Añade imágenes de tus proyectos (project1.jpg, project2.jpg, etc.)
   - Tamaño recomendado: 350x350px para perfil, 400x250px para proyectos

3. 🎨 CAMBIAR COLORES (opcional):
   - Modifica las variables CSS en styles.css
   - O usa document.documentElement.style.setProperty() como se muestra arriba

4. 🚀 AGREGAR PROYECTOS:
   - Usa Portfolio.addProject() como en los ejemplos
   - O edita directamente el HTML en la sección projects

5. 🔗 ACTUALIZAR ENLACES:
   - Cambia los enlaces de GitHub, LinkedIn, etc.
   - Actualiza las URLs de demo de tus proyectos

💡 CONSEJO: Empieza cambiando solo los textos, luego las imágenes, y finalmente personaliza los colores y proyectos.

🎯 ¡Tu portfolio estará listo en minutos!
`);

// 🔧 FUNCIONES DE UTILIDAD ADICIONALES
// ================================================

// Función para cambiar el esquema de colores completo
function cambiarEsquemaColores(esquema) {
    const esquemas = {
        azul: {
            primary: '#3498db',
            secondary: '#2980b9',
            accent: '#1abc9c'
        },
        verde: {
            primary: '#27ae60',
            secondary: '#219a52',
            accent: '#2ecc71'
        },
        morado: {
            primary: '#9b59b6',
            secondary: '#8e44ad',
            accent: '#e74c3c'
        },
        naranja: {
            primary: '#e67e22',
            secondary: '#d35400',
            accent: '#f39c12'
        }
    };

    if (esquemas[esquema]) {
        document.documentElement.style.setProperty('--primary-color', esquemas[esquema].primary);
        document.documentElement.style.setProperty('--secondary-color', esquemas[esquema].secondary);
        document.documentElement.style.setProperty('--accent-color', esquemas[esquema].accent);
    }
}

// Exponer función globalmente
window.cambiarEsquemaColores = cambiarEsquemaColores;

// Ejemplo de uso:
// cambiarEsquemaColores('verde'); // Para cambiar a esquema verde