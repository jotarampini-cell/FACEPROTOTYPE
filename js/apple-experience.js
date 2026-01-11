/**
 * APPLE EXPERIENCE LOGIC (Master Version)
 * Updated to support Pro Modal with ID-based lookup.
 * Now acts as the 'Brain' for the Apple Carousel.
 */

/* --- DATA: CASOS DE INNOVACIÓN (Base de Datos) --- */
const innovationCases = [
    { id: "ford", t: "FORD + MATADEROS", source: "En 1913, Henry Ford visitó un matadero. Vio cómo las reses se movían en ganchos mientras los carniceros hacían cortes fijos.", bridge: "Invirtió el proceso: En lugar de 'desarmar' una vaca en movimiento, decidió 'armar' un auto en movimiento.", result: "LA LÍNEA DE ENSAMBLAJE" },
    { id: "netflix", t: "NETFLIX + GIMNASIO", source: "Blockbuster cobraba por película y multas por retraso. Los gimnasios cobraban una cuota fija mensual por uso ilimitado.", bridge: "Netflix eliminó el pago por unidad, adoptando el modelo de suscripción 'All-you-can-eat' del fitness.", result: "MODELO DE SUSCRIPCIÓN (SaaS)" },
    { id: "uber", t: "UBER + BOLSA", source: "Los mercados financieros ajustan precios en tiempo real según oferta y demanda. Los taxis tenían tarifa fija.", bridge: "Aplicaron algoritmos de 'Dynamic Pricing' al transporte para equilibrar la oferta de choferes en horas pico.", result: "PRICING DINÁMICO" },
    { id: "ikea", t: "IKEA + TOSTADAS", source: "Kamprad vio que 'transportar aire' (muebles armados) era caro al intentar meter una mesa en su auto.", bridge: "Decidió vender muebles desarmados en cajas planas, transfiriendo el ensamblaje al cliente a cambio de precio.", result: "LOGÍSTICA FLAT-PACK" },
    { id: "airbnb", t: "AIRBNB + CEREALES", source: "Sin dinero para lanzar, los fundadores vieron que los coleccionistas pagaban fortunas por cajas de cereal raras.", bridge: "Vendieron cajas de cereal 'Obama O's' para financiar la empresa, probando que el diseño agrega valor al commodity.", result: "BOOTSTRAPPING CREATIVO" },
    { id: "spotify", t: "SPOTIFY + PIRATERÍA", source: "Napster probó que la gente quería acceso instantáneo a toda la música gratis. La industria luchaba contra esto.", bridge: "Legalizaron la experiencia pirata: Acceso universal instantáneo, financiado con anuncios o suscripción.", result: "MODELO FREEMIUM" },
    { id: "zara", t: "ZARA + PESCADERÍA", source: "El pescado fresco se vende rápido o se tira. La moda tradicional planeaba a 6 meses.", bridge: "Trataron la ropa como un perecedero. Producción en lotes pequeños y rápida para crear escasez y urgencia.", result: "FAST FASHION" },
    { id: "dyson", t: "DYSON + ASERRADERO", source: "Dyson vio un ciclón industrial gigante que separaba aserrín del aire sin filtros.", bridge: "Miniaturizó esa tecnología industrial para eliminar la bolsa de papel de las aspiradoras domésticas.", result: "TECNOLOGÍA CICLÓNICA" },
    { id: "nike", t: "NIKE + WAFFLES", source: "Bill Bowerman miraba su waflera. Notó cómo la masa creaba una forma de rejilla con agarre y ligereza.", bridge: "Vertió caucho en la waflera para crear una suela de zapato con tracción superior y peso mínimo.", result: "SUELA WAFFLE" },
    { id: "cirque", t: "CIRQUE DU SOLEIL + TEATRO", source: "El circo competía en precio y animales. El teatro cobraba tickets altos por narrativa.", bridge: "Eliminaron los animales e inyectaron narrativa teatral para cobrar precios de Broadway.", result: "OCÉANO AZUL" },
    { id: "apple", t: "APPLE + XEROX", source: "Xerox tenía el ratón y la interfaz gráfica, pero lo veía como administrativo.", bridge: "Jobs lo vio como una herramienta creativa. Simplificó el diseño para el usuario común.", result: "INTERFAZ GRÁFICA (GUI)" },
    { id: "tesla", t: "TESLA + LAPTOPS", source: "Los autos eléctricos usaban baterías pesadas. Las laptops usaban litio eficiente.", bridge: "Conectaron miles de baterías de laptop en serie para propulsar un coche deportivo.", result: "RECOMBINACIÓN TECNOLÓGICA" },
    { id: "starbucks", t: "STARBUCKS + ITALIA", source: "En Italia, el café es un evento social, un 'tercer lugar'. En EE.UU era solo cafeína.", bridge: "Schultz importó la atmósfera y el ritual italiano, no solo el grano de café.", result: "EXPERIENCIA DE CLIENTE" },
    { id: "mcdonalds", t: "MCDONALDS + FÓRMULA 1", source: "Observaron la eficiencia de los Pit Stops y las líneas de fábrica.", bridge: "Crearon una cocina coreografiada donde una hamburguesa se hacía en 30 segundos.", result: "SISTEMA SPEEDEE" },
    { id: "linkedin", t: "LINKEDIN + GRAFOS", source: "La teoría de redes dice que estamos conectados. Los CVs eran documentos muertos.", bridge: "Digitalizaron la red de contactos. El valor es quién te conoce, no solo tu perfil.", result: "NETWORKING ESCALABLE" },
    { id: "google", t: "GOOGLE + ACADÉMICA", source: "Los papers académicos se citan entre sí. Los más citados son los más importantes.", bridge: "Aplicaron ese sistema de 'votos por citas' a las páginas web para crear PageRank.", result: "ALGORITMO DE BÚSQUEDA" },
    { id: "amazon", t: "AMAZON + WALMART", source: "Walmart optimizó la logística terrestre con centros de distribución perfectos.", bridge: "Bezos copió esa red pero la virtualizó: centros cercanos a ciudades, entrega rápida.", result: "FULFILLMENT CENTERS" },
    { id: "instagram", t: "INSTAGRAM + POLAROID", source: "Las Polaroid eran instantáneas pero físicas. La gente amaba lo cuadrado y retro.", bridge: "Digitalizaron la nostalgia: Fotos cuadradas, filtros vintage, compartir instantáneo.", result: "NOSTALGIA DIGITAL" },
    { id: "slack", t: "SLACK + IRC", source: "IRC era un chat técnico para desarrolladores. Funcionaba pero era feo.", bridge: "Pulieron la interfaz, agregaron integraciones y lo vendieron a empresas como 'email killer'.", result: "CHAT EMPRESARIAL" },
    { id: "whatsapp", t: "WHATSAPP + SMS", source: "Los SMS costaban $0.10 cada uno. Internet móvil empezaba a ser tarifa plana.", bridge: "Enviaron mensajes por internet en lugar de la red telefónica. Mismo servicio, costo cero.", result: "MENSAJERÍA GRATUITA" },
    { id: "youtube", t: "YOUTUBE + CITAS", source: "Nació para subir videos de citas. Nadie lo usó así. La gente prefería subir cualquier cosa.", bridge: "Pivotaron a permitir TODO tipo de video. El contenido lo define el usuario, no YouTube.", result: "PLATAFORMA ABIERTA" },
    { id: "nespresso", t: "NESPRESSO + IMPRESORAS", source: "Las impresoras se regalan y las empresas ganan con los cartuchos ('razor and blades').", bridge: "Vendieron máquinas baratas y ganaron con cápsulas caras. Café como servicio recurrente.", result: "MODELO RAZOR-BLADE CAFÉ" },
    { id: "duolingo", t: "DUOLINGO + VIDEOJUEGOS", source: "Los videojuegos usan vidas, niveles y recompensas para generar adicción.", bridge: "Aplicaron esa psicología al aprendizaje: Rachas, puntos, logros. Aprender = jugar.", result: "GAMIFICACIÓN EDUCATIVA" },
    { id: "zoom", t: "ZOOM + SIMPLICIDAD", source: "Cisco Webex y Skype requerían instalar software, crear cuenta, configurar. Era complicado.", bridge: "Redujeron la fricción a cero: Un link, un click, funciona. Simplicidad brutal.", result: "UN CLICK = MEETING" },
    { id: "wikipedia", t: "WIKIPEDIA + LINUX", source: "Linux probó que miles de voluntarios podían construir software complejo sin paga.", bridge: "Aplicaron 'open source' al conocimiento. Miles de editores construyendo gratis una enciclopedia.", result: "CONOCIMIENTO CROWDSOURCED" }
];

/* --- LÓGICA DEL MODAL MAESTRO --- */

function openFaceModal(element) {
    // 1. Identificar qué tarjeta es (Estrategia Robustez por ID)
    const cardId = element.dataset.id;

    // Fallback: Por Título si no hay ID (limpiando espacios)
    let cardTitle = '';
    if (!cardId) {
        const h3 = element.querySelector('h3');
        if (h3) cardTitle = h3.innerText.trim().toUpperCase();
    }

    // 2. Buscar en la "Base de Datos" (Array)
    let caseData;

    if (cardId) {
        caseData = innovationCases.find(item => item.id === cardId);
    } else {
        // Búsqueda flexible por texto (busca si el titulo coincide parcialmente con la parte izquierda de "TITULO + COSA")
        if (cardTitle) {
            caseData = innovationCases.find(item => {
                const parts = item.t.split('+');
                const mainTitle = parts[0].trim().toUpperCase();
                return cardTitle.includes(mainTitle) || mainTitle.includes(cardTitle);
            });
        }
    }

    if (!caseData) {
        console.error("No se encontraron datos para este caso:", cardId || cardTitle);
        return;
    }

    // 3. Inyectar datos en TODAS las instancias del modal (Robustez contra duplicados)
    const modals = document.querySelectorAll('.pro-modal-overlay');
    modals.forEach(modal => {
        // Título
        const pmTitle = modal.querySelector('.pro-title');
        if (pmTitle) {
            const titleParts = caseData.t.split('+');
            if (titleParts.length > 1) {
                pmTitle.innerHTML = `${titleParts[0]}<span class="gold-plus">+</span>${titleParts[1]}`;
            } else {
                pmTitle.innerText = caseData.t;
            }
        }

        // Textos (Busqueda por ID dentro del modal para evitar conflictos globales)
        const pmSource = modal.querySelector('#pm-source');
        const pmBridge = modal.querySelector('#pm-bridge');
        const pmResult = modal.querySelector('#pm-result');

        if (pmSource) pmSource.innerText = caseData.source;
        if (pmBridge) pmBridge.innerText = caseData.bridge;
        if (pmResult) pmResult.innerText = caseData.result;

        // 4. Mostrar Modal
        modal.classList.add('active');
    });

    document.body.style.overflow = 'hidden'; // Bloquear scroll
}

/* --- SOLUCIÓN DE CIERRE (GLOBAL & ROBUSTA - BLINDAJE TOTAL) --- */

// 1. Definir la función directamente en window para que el HTML la vea SIEMPRE
window.closeProModal = function () {
    // Robustez: Usamos querySelectorAll para cerrar cualquier instancia (incluso si hay duplicados)
    const modals = document.querySelectorAll('.pro-modal-overlay');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = ''; // Restaurar scroll
};

// 2. Agregar Escucha de Teclado (Tecla ESC) - UX Profesional
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeProModal();
});

// 3. Delegación de Eventos (Para atrapar clics dinámicos)
// Esto asegura que el botón funcione aunque se cree dinámicamente
document.addEventListener('click', (e) => {
    // Si lo que se clickeó (o su padre) es el botón de cerrar
    if (e.target.closest('.pro-close')) {
        e.preventDefault(); // Prevenir navegación si fuera un link
        window.closeProModal();
    }

    // Si se clickeó el fondo oscuro (overlay)
    if (e.target.classList.contains('pro-modal-overlay')) {
        window.closeProModal();
    }
});

// Inicialización de Listeners Generales (Paginación, Video)
document.addEventListener('DOMContentLoaded', () => {
    // Initialize pagination logic (Legacy support kept for functionality)
    initPagination();
    initProgramsPagination();
    initVideoHover();
});



// --- LEGACY NAVIGATION LOGIC (KEEPING THIS FOR CAROUSEL FUNCTIONALITY) ---

function scrollAppleReel(direction, sectionId = null) {
    let reel;
    if (sectionId) {
        const section = document.getElementById(sectionId);
        reel = section ? section.querySelector('.apple-reel') : null;
    } else {
        reel = document.querySelector('.apple-reel');
    }

    if (!reel) return;

    const cardWidth = 380 + 8; // width + gap
    const scrollAmount = cardWidth * 1;

    if (direction === 'next') {
        reel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        reel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}

function initPagination() {
    const mindsetSection = document.getElementById('apple-experience');
    if (mindsetSection) {
        const reel = mindsetSection.querySelector('.apple-reel');
        const cards = mindsetSection.querySelectorAll('.apple-card');
        const dotsContainer = document.getElementById('apple-dots');

        if (reel && cards.length && dotsContainer) {
            dotsContainer.innerHTML = ''; // Clear existing
            cards.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = 'pagination-dot';
                if (index === 0) dot.classList.add('active');
                dot.onclick = () => scrollToCard(index, 'apple-experience');
                dotsContainer.appendChild(dot);
            });

            reel.addEventListener('scroll', () => updateActiveDot('apple-experience'));
        }
    }
}

function scrollToCard(index, sectionId = null) {
    let reel, cards;
    if (sectionId) {
        const section = document.getElementById(sectionId);
        reel = section ? section.querySelector('.apple-reel') : null;
        cards = section ? section.querySelectorAll('.apple-card') : [];
    } else {
        reel = document.querySelector('.apple-reel');
        cards = document.querySelectorAll('.apple-card');
    }

    if (!reel || !cards[index]) return;
    const cardWidth = cards[index].offsetWidth;
    const gap = 8;
    const scrollPosition = index * (cardWidth + gap);
    reel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

function updateActiveDot(sectionId = null) {
    let reel, cards, dots;
    if (sectionId) {
        const section = document.getElementById(sectionId);
        reel = section ? section.querySelector('.apple-reel') : null;
        if (sectionId === 'programs-showcase') {
            cards = section ? section.querySelectorAll('.program-card') : [];
        } else {
            cards = section ? section.querySelectorAll('.apple-card') : [];
        }
        const dotsContainer = sectionId === 'apple-experience' ?
            document.getElementById('apple-dots') :
            document.getElementById('programs-dots');
        dots = dotsContainer ? dotsContainer.querySelectorAll('.pagination-dot') : [];
    } else {
        reel = document.querySelector('.apple-reel');
        cards = document.querySelectorAll('.apple-card');
        dots = document.querySelectorAll('.pagination-dot');
    }

    if (!reel || !cards.length || !dots.length) return;

    const scrollLeft = reel.scrollLeft;
    const cardWidth = cards[0].offsetWidth;
    const gap = 8;
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap));

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function initProgramsPagination() {
    const programsSection = document.getElementById('programs-showcase');
    if (!programsSection) return;
    const dotsContainer = document.getElementById('programs-dots');
    if (!dotsContainer) return;

    const reel = programsSection.querySelector('.apple-reel');
    const programCards = programsSection.querySelectorAll('.program-card');

    dotsContainer.innerHTML = '';
    programCards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'pagination-dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => scrollToProgram(index);
        dotsContainer.appendChild(dot);
    });

    if (reel) {
        reel.addEventListener('scroll', () => updateActiveDot('programs-showcase'));
    }
}

function scrollToProgram(index) {
    const reel = document.querySelector('#programs-showcase .apple-reel');
    const cards = document.querySelectorAll('.program-card');
    if (!reel || !cards[index]) return;
    const cardWidth = cards[index].offsetWidth;
    const gap = 8;
    const scrollPosition = index * (cardWidth + gap);
    reel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

function initVideoHover() {
    const card = document.getElementById('card-innova');
    const video = document.getElementById('video-innova');
    if (!card || !video) return;
    card.addEventListener('mouseenter', () => {
        if (window.matchMedia('(min-width: 992px)').matches) {
            video.play().catch(e => console.log('Video play interrupted', e));
        }
    });
    card.addEventListener('mouseleave', () => {
        video.pause();
    });
}
