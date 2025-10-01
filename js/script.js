// Inicialización cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Navbar scroll effect
    initNavbarScroll();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Smooth scrolling para los enlaces de navegación
    initSmoothScrolling();
    
    // Efectos para las cards de proyectos
    initProjectCards();
    
    // Animaciones de typing para el hero
    initTypingAnimation();
    
    // Parallax effect
    initParallaxEffect();
    
    // Contact form
    initContactForm();
    
    // Lazy loading para imágenes
    initLazyLoading();
});

// Efecto del navbar al hacer scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Cambiar opacidad del navbar
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(139, 92, 246, 0.25)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(139, 92, 246, 0.1)';
        }

        // Ocultar/mostrar navbar al hacer scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Menu móvil
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menu al hacer click en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 70; // Ajustar por el navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efectos para las cards de proyectos
function initProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        // Efecto de inclinación 3D
        card.addEventListener('mouseenter', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
        });

        // Animación de entrada escalonada
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });
}

// Animación de typing para el hero
function initTypingAnimation() {
    const roles = ['Desarrollador Full Stack', 'Diseñador Web', 'Desarrollador Frontend', 'Desarrollador Backend'];
    const roleElement = document.querySelector('.hero-content h2');
    
    if (roleElement) {
        let currentRole = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function typeRole() {
            const current = roles[currentRole];
            
            if (isDeleting) {
                roleElement.textContent = current.substring(0, currentChar - 1);
                currentChar--;
            } else {
                roleElement.textContent = current.substring(0, currentChar + 1);
                currentChar++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentChar === current.length) {
                typeSpeed = 2000; // Pausa antes de borrar
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentRole = (currentRole + 1) % roles.length;
            }
            
            setTimeout(typeRole, typeSpeed);
        }
        
        // Iniciar la animación después de un delay
        setTimeout(typeRole, 1000);
    }
}

// Efecto parallax
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Formulario de contacto con EmailJS
function initContactForm() {
    // Inicializar EmailJS (necesitarás reemplazar con tu USER_ID)
    emailjs.init("TU_USER_ID_AQUI"); // Reemplazar después del registro
    
    const form = document.querySelector('#contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Validar formulario antes de enviar
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                showMessage('Por favor, completa todos los campos correctamente.', 'error');
                return;
            }
            
            // Mostrar estado de envío
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Enviar email con EmailJS
            emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form)
                .then(function(response) {
                    console.log('Email enviado exitosamente:', response);
                    submitBtn.textContent = '¡Mensaje Enviado!';
                    submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                    showMessage('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        form.reset();
                        // Limpiar clases de validación
                        inputs.forEach(input => {
                            input.classList.remove('success', 'error');
                        });
                    }, 3000);
                })
                .catch(function(error) {
                    console.error('Error al enviar email:', error);
                    submitBtn.textContent = 'Error al enviar';
                    submitBtn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
                    showMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', 'error');
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 3000);
                });
        });

        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
}

// Validar campos del formulario
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    
    field.classList.remove('error', 'success');
    
    if (value === '') {
        field.classList.add('error');
        return false;
    }
    
    if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    field.classList.add('success');
    return true;
}

// Mostrar mensajes de notificación
function showMessage(message, type) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Agregar estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        backgroundColor: type === 'success' ? '#27ae60' : '#e74c3c'
    });
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Lazy loading para imágenes
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Función para agregar nuevos proyectos dinámicamente
function addProject(projectData) {
    const projectsGrid = document.querySelector('.projects-grid');
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-aos', 'fade-up');
    
    projectCard.innerHTML = `
        <div class="card-image">
            <img src="${projectData.image}" alt="${projectData.title}">
            <div class="card-overlay">
                <div class="card-actions">
                    <a href="${projectData.demoUrl}" class="action-btn" title="Ver Demo">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a href="${projectData.codeUrl}" class="action-btn" title="Ver Código">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="card-content">
            <h3>${projectData.title}</h3>
            <p>${projectData.description}</p>
            <div class="project-tags">
                ${projectData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
    
    // Reinicializar efectos para la nueva card
    initProjectCards();
}

// Funciones utilitarias para personalización
const Portfolio = {
    // Actualizar información personal
    updatePersonalInfo: function(data) {
        if (data.name) {
            document.querySelector('.nav-logo span').textContent = data.name;
            document.querySelector('.hero-content h1 .highlight').textContent = data.name;
        }
        if (data.title) {
            document.querySelector('.hero-content h2').textContent = data.title;
        }
        if (data.description) {
            document.querySelector('.hero-content p').textContent = data.description;
        }
        if (data.email) {
            document.querySelector('.contact-info .contact-item:nth-child(1) p').textContent = data.email;
        }
        if (data.phone) {
            document.querySelector('.contact-info .contact-item:nth-child(2) p').textContent = data.phone;
        }
        if (data.location) {
            document.querySelector('.contact-info .contact-item:nth-child(3) p').textContent = data.location;
        }
    },
    
    // Actualizar habilidades
    updateSkills: function(skills) {
        const skillsGrid = document.querySelector('.skills-grid');
        skillsGrid.innerHTML = '';
        skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsGrid.appendChild(skillTag);
        });
    },
    
    // Actualizar estadísticas
    updateStats: function(stats) {
        const statElements = document.querySelectorAll('.stat');
        stats.forEach((stat, index) => {
            if (statElements[index]) {
                statElements[index].querySelector('h3').textContent = stat.number;
                statElements[index].querySelector('p').textContent = stat.label;
            }
        });
    },
    
    // Agregar proyecto
    addProject: addProject
};

// Exponer funciones globalmente para fácil personalización
window.Portfolio = Portfolio;

// Efectos adicionales al cargar la página
window.addEventListener('load', function() {
    // Ocultar loader si existe
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Animación de entrada para el hero
    document.querySelector('.hero').classList.add('loaded');
});

// Manejo de errores para imágenes
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
    }
}, true);