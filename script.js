// ====================================
// INITIALIZATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    initSkeletonLoader();
    initHeader();
    initMenu();
    initHeroAnimation();
    initFaceCards();
    initVideoCards();
    initReadingProgress();
});

// ====================================
// SKELETON LOADER
// ====================================

function initSkeletonLoader() {
    const loader = document.getElementById('skeleton-loader');

    // Simulate loading time
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
}

// ====================================
// HEADER SCROLL BEHAVIOR
// ====================================

function initHeader() {
    // Header stability is now managed by js/header-scroll.js
    // to ensure centered and fixed positioning for the Investor Demo.
    console.log('Header initialization delegated to header-scroll.js');
}

// ====================================
// FULLSCREEN MENU
// ====================================

function initMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuLinks = fullscreenMenu.querySelectorAll('.menu-link');
    // Generic handling for all parent menu items
    const parentToggles = fullscreenMenu.querySelectorAll('.menu-parent-link');

    menuToggle.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener('click', closeMenu);

    // Handle click on regular menu links (close menu and scroll)
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only handle anchor links, not the parent toggle
            if (link.classList.contains('menu-parent-link')) return;

            if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
                closeMenu();
            }
        });
    });

    // Handle parent menu item expand/collapse (Generic)
    parentToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.closest('.menu-parent');
            if (parent) {
                // Toggle current

                // Optional: Collapse others to have accordion effect (User likes "exact same behavior" as programs)
                // If Programs just toggles, we just toggle.
                // Assuming Accordion is better UX:
                document.querySelectorAll('.menu-parent.expanded').forEach(el => {
                    if (el !== parent) el.classList.remove('expanded');
                });

                parent.classList.toggle('expanded');
            }
        });
    });

    function closeMenu() {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = '';
        // Collapse all submenus when closing
        document.querySelectorAll('.menu-parent.expanded').forEach(el => {
            el.classList.remove('expanded');
        });
    }
}

// ====================================
// HERO KINETIC TYPOGRAPHY
// ====================================

function initHeroAnimation() {
    const rotatingWord = document.getElementById('rotating-word');
    const subtitle = document.getElementById('hero-subtitle');

    // Guard clause: if elements don't exist, don't run animation
    if (!rotatingWord || !subtitle) {
        console.log('Hero animation skipped: elements not found');
        return;
    }

    const words = ['RESOLVER', 'ADAPTAR', 'MEJORAR', 'FACE'];
    let currentIndex = 0;
    let intervalId;
    let rotationCount = 0;
    const maxRotations = 12; // Spin through words multiple times

    // Start the slot machine effect
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingWord.textContent = words[currentIndex];
        rotatingWord.style.animation = 'none';

        // Trigger reflow to restart animation
        void rotatingWord.offsetWidth;
        rotatingWord.style.animation = 'text-flash 0.15s ease';

        rotationCount++;

        // Slow down and stop at FACE
        if (rotationCount >= maxRotations) {
            clearInterval(intervalId);
            // Ensure we land on FACE
            setTimeout(() => {
                rotatingWord.textContent = 'FACE';
                rotatingWord.style.animation = 'text-flash 0.5s ease';

                // Flash effect on background
                document.querySelector('.hero').style.animation = 'bg-flash 0.3s ease';

                // Show subtitle
                setTimeout(() => {
                    subtitle.style.opacity = '1';
                    subtitle.style.animation = 'fade-in-up 0.8s ease forwards';
                }, 200);
            }, 100);
        }
    }, 150);
}

// Add background flash animation via style injection
const style = document.createElement('style');
style.textContent = `
    @keyframes bg-flash {
        0%, 100% { background-color: #FFFFFF; }
        50% { background-color: #F0F9FF; }
    }
`;
document.head.appendChild(style);

// ====================================
// FACE CARDS INTERACTION
// ====================================

function initFaceCards() {
    const cards = document.querySelectorAll('.face-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Optional: Add click interaction
            card.style.animation = 'card-click 0.3s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 300);
        });
    });
}

// ====================================
// VIDEO CARDS INTERACTION
// ====================================

function initVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            // alert(`Video: "${title}"\n\nEsta funcionalidad estará disponible próximamente. Aquí podrás ver el video completo sobre este tema.`);
        });
    });
}

// ====================================
// READING PROGRESS BAR
// ====================================

function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
}

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// SERVICE BUTTONS INTERACTION
// ====================================

const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const isPublic = e.target.closest('.public-block');

        if (isPublic) {
            // Handle personal challenge
            // alert('¡Bienvenido al Reto Personal! Esta funcionalidad estará disponible próximamente.');
        } else {
            // Handle business demo
            // alert('Gracias por tu interés. Pronto te contactaremos para agendar tu demo.');
        }
    });
});



/* =========================================
   LÓGICA DEL WIDGET "ADN INNOVADOR"
   ========================================= */

// 1. Base de Datos de Preguntas y Resultados (FACT-BASED)
const dnaData = {
    A: { // Héroe Solitario
        name: "EL HÉROE SOLITARIO",
        questions: [
            "¿En la última semana, bloqueaste 4 horas en tu agenda que NADIE interrumpió?",
            "¿En los últimos 30 días, lanzaste algún prototipo que costara menos de $50?",
            "La última vez que tomaste vacaciones, ¿te llamaron por problemas operativos?"
        ],
        pain: "Tienes potencia, pero eres el cuello de botella. Crees que si sueltas el control, la calidad caerá. Tu negocio no es escalable porque depende 100% de tu presencia física y mental.",
        recipe: [
            "<strong>Metodología:</strong> Estandarización y Delegación Radical.",
            "<strong>Acción Inmediata:</strong> Graba en video un proceso repetitivo que haces hoy y entrégalo a un asistente esta misma semana.",
            "<strong>Misión:</strong> Crear sistemas que funcionen sin ti. Pasar de 'Operador' a 'Dueño'."
        ]
    },
    B: { // Gigante Atado
        name: "EL GIGANTE ATADO",
        questions: [
            "¿Tienen tus gerentes presupuesto autónomo para probar mejoras sin tu firma?",
            "¿Se ha implementado alguna idea de un empleado de base en el último trimestre?",
            "¿Mides el ROI (Retorno de Inversión) exacto de las innovaciones, o solo si 'se ve bonito'?"
        ],
        pain: "Tienes el músculo financiero, pero la burocracia te hace lento. Tu equipo tiene miedo a proponer porque el proceso de aprobación es doloroso o inexistente.",
        recipe: [
            "<strong>Metodología:</strong> Intraemprendimiento (Corporate Venturing).",
            "<strong>Acción Inmediata:</strong> Asigna un pequeño 'Presupuesto de Guerra' (ej. $1,000) que un gerente pueda usar sin pedir permiso para un experimento.",
            "<strong>Misión:</strong> Descentralizar la toma de decisiones pequeñas."
        ]
    },
    C: { // Guardián Dinástico
        name: "EL GUARDIÁN DINÁSTICO",
        questions: [
            "¿Existe un presupuesto definido de 'pérdida aceptable' para nuevos inventos?",
            "¿Lideró la nueva generación (hijos/sobrinos) algún proyecto propio el último año?",
            "¿Han rechazado una idea rentable solo porque 'aquí siempre se ha hecho así'?"
        ],
        pain: "El peso del apellido te frena. Por proteger el pasado glorioso, estás poniendo en riesgo el futuro. La tradición se ha convertido en una jaula.",
        recipe: [
            "<strong>Metodología:</strong> Innovación Dual (Ambidextreza Organizacional).",
            "<strong>Acción Inmediata:</strong> Crea una 'Sandbox' (Caja de Arena): un proyecto pequeño separado de la marca principal donde la nueva generación pueda fallar sin riesgo.",
            "<strong>Misión:</strong> Honrar los valores, pero modernizar los métodos."
        ]
    },
    D: { // Visionario Cauteloso
        name: "EL VISIONARIO CAUTELOSO",
        questions: [
            "¿Existe un protocolo escrito que permita fallar en pruebas piloto sin castigo político?",
            "¿Lanzaron algún proyecto que diera resultados visibles en menos de 90 días?",
            "¿Colaboran actualmente con alguna Startup para agilizar procesos?"
        ],
        pain: "Quieres impacto, pero el sistema te castiga por intentarlo. El miedo al 'qué dirán' o al error público te paraliza en la etapa de planificación eterna.",
        recipe: [
            "<strong>Metodología:</strong> Victorias Rápidas (Quick Wins) y Alianzas.",
            "<strong>Acción Inmediata:</strong> No construyas la solución in-house. Busca una Startup que ya lo tenga y lanza una prueba piloto de 60 días.",
            "<strong>Misión:</strong> Ganar capital político con resultados pequeños pero rápidos."
        ]
    }
};

// 2. Variables de Estado
let currentPath = null;
let currentQIndex = 0;

// 3. Funciones de Navegación (Core)
function switchScreen(fromId, toId) {
    const fromScreen = document.getElementById(fromId);
    const toScreen = document.getElementById(toId);

    fromScreen.classList.remove('active');
    // Esperar a que termine la transición de opacidad antes de ocultar
    setTimeout(() => {
        fromScreen.style.display = 'none';

        // Remove hidden class if present to prevent display issues
        toScreen.classList.remove('hidden');
        toScreen.style.display = 'block';

        // Forzar reflow para que la animación de entrada funcione
        void toScreen.offsetWidth;
        toScreen.classList.add('active');
    }, 500);
}

// --- PASO 1: Selección del Camino ---
function selectPath(pathChar) {
    currentPath = pathChar;
    currentQIndex = 0;
    // Prepara la primera pregunta
    loadQuestion();
    // Cambia de pantalla
    switchScreen('screen-filter', 'screen-questions');
}

// --- PASO 2: Manejo de Preguntas ---
function loadQuestion() {
    const data = dnaData[currentPath];
    const questionEl = document.getElementById('question-text-dynamic');
    const progressEl = document.getElementById('progress-bar-fill');

    questionEl.innerText = data.questions[currentQIndex];

    // Actualizar barra de progreso (33%, 66%, 100%)
    const progressPercentage = ((currentQIndex + 1) / 3) * 100;
    progressEl.style.width = `${progressPercentage}%`;
}

function handleAnswer(answer) {
    // Aquí podrías guardar la respuesta si quisieras (answer = 'SI' o 'NO')

    if (currentQIndex < 2) {
        currentQIndex++;
        loadQuestion();
    } else {
        // Fin de las preguntas, iniciar loader
        startLoader();
    }
}

// --- PASO 3: Loader Psicológico ---
function startLoader() {
    switchScreen('screen-questions', 'screen-loader');

    const loaderTextEl = document.getElementById('loader-text-dynamic');
    const messages = [
        "Analizando tus respuestas...",
        "Comparando con patrones de mercado...",
        "Identificando bloqueos críticos...",
        "Generando tu Hoja de Ruta F.A.C.E..."
    ];
    let msgIndex = 0;

    // Cambiar mensajes cada 800ms
    const intervalId = setInterval(() => {
        msgIndex++;
        if (msgIndex < messages.length) {
            loaderTextEl.innerText = messages[msgIndex];
        } else {
            clearInterval(intervalId);
            // Termina la carga, ir al Email Gate
            switchScreen('screen-loader', 'screen-email');
        }
    }, 800);
}

// --- PASO 4: Simulación de Email ---
function simulateSubmit(e) {
    e.preventDefault(); // Evita recarga de página

    const btnSubmit = document.getElementById('btn-submit-email');
    const userName = document.getElementById('user-name').value;
    const originalBtnText = btnSubmit.innerText;

    // 1. Feedback inmediato de "Procesando"
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = "PROCESANDO... <svg class='tr-spinner-svg' style='width:20px;height:20px;margin-left:10px;vertical-align:middle;' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'><circle class='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'></circle><path class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path></svg>";
    btnSubmit.style.backgroundColor = "#444";

    console.log(`[DEMO] Simulando envío para: ${userName}. Arquetipo: ${currentPath}`);

    // 2. Simular espera de red (2 segundos)
    setTimeout(() => {
        // 3. Feedback de Éxito
        btnSubmit.innerHTML = "¡ACCESO CONCEDIDO! ✅";
        btnSubmit.style.backgroundColor = "#28a745"; // Verde éxito

        // 4. Esperar brevemente y mostrar resultado
        setTimeout(() => {
            prepareResultScreen();
            switchScreen('screen-email', 'screen-result');
        }, 1000);

    }, 2000);
}

// --- PASO 5: Mostrar Resultado Final ---
function prepareResultScreen() {
    const data = dnaData[currentPath];
    const recipeListEl = document.getElementById('result-recipe-dynamic');

    // Llenar textos
    document.getElementById('result-title-dynamic').innerText = data.name;
    document.getElementById('result-pain-dynamic').innerText = data.pain;

    // Llenar lista de receta
    recipeListEl.innerHTML = ''; // Limpiar
    data.recipe.forEach(itemHtml => {
        const li = document.createElement('li');
        li.innerHTML = itemHtml;
        recipeListEl.appendChild(li);
    });
}

// Función para el botón del header (debe estar accesible globalmente)
window.scrollToWidget = function () {
    const widgetSection = document.getElementById('adn-innovador-section');
    if (widgetSection) {
        widgetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        console.warn("No se encontró la sección con ID 'adn-innovador-section'");
    }
};

// Función para scroll a cualquier sección por ID
window.scrollToSection = function (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.warn(`No se encontró la sección con ID '${sectionId}'`);
    }
};


// ====================================
// HERO INPUT INTERACTION
// ====================================

const heroInput = document.querySelector('.hero-input');

heroInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && heroInput.value.trim() !== '') {
        // alert(`Excelente pregunta: "${heroInput.value}". Nuestro equipo analizará tu reto y te contactará pronto.`);
        heroInput.value = '';
    }
});

// ====================================
// PERFORMANCE OPTIMIZATION
// ====================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions if needed
window.addEventListener('scroll', debounce(() => {
    // Any additional scroll-based logic can go here
}, 10));




// =========================================
// TESTIMONIALS SLIDER LOGIC (PREMIUM AVATAR)
// =========================================


// =========================================
// TESTIMONIALS SLIDER LOGIC (PREMIUM AVATAR)
// =========================================

(function () {
    function initTestimonials() {
        // 1. Data Source
        const testimonials = [
            {
                name: "Serena Williams",
                title: "Most Singles Grand Slam titles in history (male or female), 4-time Olympic gold medalist",
                quote: "“Tony Robbins helped me discover what I am really made of. With Tony's help, I've set new standards for myself, and I've taken my tennis game—and my life—to a whole new level!”",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Serena_Williams_1_%2814402636602%29.jpg/440px-Serena_Williams_1_%2814402636602%29.jpg",
                backgroundImage: "https://images.unsplash.com/photo-1547922240-56272370773d?q=80&w=2574&auto=format&fit=crop" // Tennis Stadium / Event
            },
            {
                name: "Klay Thompson",
                title: "4-time NBA Champion, 5-time All-Star, NBA Record Holder",
                quote: "“Tony Robbins' coaching has been a game changer. He taught me how to master my mindset and stay focused under the most intense pressure.”",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Klay_Thompson_2018.jpg",
                backgroundImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2693&auto=format&fit=crop" // Basketball Arena Lights
            },
            {
                name: "Marc Benioff",
                title: "Founder, Chairman and Co-CEO of Salesforce",
                quote: "“We have been able to achieve our goals in a way that we never thought possible. The strategy provided was the key to unlocking our potential.”",
                image: "https://pbs.twimg.com/profile_images/1542626466367377408/5_d4t44W_400x400.jpg",
                backgroundImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2669&auto=format&fit=crop" // Conference / Keynote Stage
            }
        ];

        let currentIndex = 0;

        // DOM Elements
        const sectionEl = document.querySelector('.tr-testimonial-section');
        const avatarContainer = document.getElementById('tr-avatars-container');
        const quoteEl = document.getElementById('tr-quote');
        const nameEl = document.getElementById('tr-name');
        const titleEl = document.getElementById('tr-title');
        const infoContainer = document.querySelector('.tr-author-info');

        // Guard clause
        if (!avatarContainer || !quoteEl) {
            console.warn("Testimonial elements not found, retrying...");
            return;
        }

        // Prevent double init
        if (avatarContainer.children.length > 0) return;

        // 2. Initialize Avatars
        testimonials.forEach((item, index) => {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('tr-avatar-img');
            img.addEventListener('click', () => updateTestimonial(index));
            avatarContainer.appendChild(img);
        });

        const avatarEls = document.querySelectorAll('.tr-avatar-img');

        // 3. Update Function
        function updateTestimonial(index) {
            currentIndex = index;

            // A. Fade Out Text
            quoteEl.classList.remove('visible');
            infoContainer.classList.remove('visible');

            // B. Update Avatars
            avatarEls.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });

            // C. Update Background
            if (sectionEl && testimonials[index].backgroundImage) {
                // Preload image to avoid flicker
                const img = new Image();
                img.src = testimonials[index].backgroundImage;
                img.onload = () => {
                    sectionEl.style.backgroundImage = `url('${testimonials[index].backgroundImage}')`;
                };
            }

            // D. Update Content
            setTimeout(() => {
                quoteEl.innerText = testimonials[index].quote;
                nameEl.innerText = testimonials[index].name;
                titleEl.innerText = testimonials[index].title;

                quoteEl.classList.add('visible');
                infoContainer.classList.add('visible');
            }, 300);
        }

        // 4. Initial Load
        updateTestimonial(0);

        // 5. Auto Rotation
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(nextIndex);
        }, 5000);

        console.log("Testimonials initialized successfully");
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTestimonials);
    } else {
        initTestimonials();
    }
})();



// Accordion Toggle for Manifesto Cards
window.toggleCard = function (card) {
    card.classList.toggle('active');
}
