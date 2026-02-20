// ============================================
// PODCAST DATA
// ============================================

const podcastEpisodes = [
    {
        id: 1,
        title: "Innovar sin inventar: La lección japonesa para Venezuela",
        category: "innovacion",
        categoryDisplay: "Estrategia",
        date: "2024-12-30",
        image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&q=80",
        excerpt: "¿Cómo se innova en un país con una realidad tan única como la de Venezuela? La respuesta no está en Silicon Valley, sino en la historia de la posguerra en Japón.",
        description: `
            <h2>Sobre este episodio</h2>
            <p><strong>¿Cómo se innova en un país con una realidad tan única como la de Venezuela?</strong> La respuesta no está en Silicon Valley, sino en la historia de la posguerra en Japón.</p>
            <p>El ingeniero de Toyota, Taiichi Ohno, se enfrentó a un dilema existencial: copiar el modelo masivo de Ford era un suicidio financiero. Su genialidad no fue inventar algo de la nada, sino observar los supermercados americanos e idear el modelo <strong>Justo a Tiempo (JIT)</strong>. El resultado fue histórico: Toyota superó a Ford.</p>
            <h2>Lo que descubrirás:</h2>
            <ul>
                <li>La historia de Taiichi Ohno y Toyota (JIT).</li>
                <li>Venezuela: de la ruina a la oportunidad (Comparativa Catch-Up).</li>
                <li>La ecuación FACE: Foco, Adaptar, Cultura, Ejecución.</li>
                <li>La mentalidad empresarial: Del superviviente al estratega.</li>
            </ul>
        `,
        audioUrl: "assets/audio/innovar-japon.mp3",
        spotifyUrl: "#",
        appleUrl: "#"
    },
    {
        id: 2,
        title: "Liderazgo en la Era Digital",
        category: "liderazgo",
        categoryDisplay: "Liderazgo",
        date: "2024-12-08",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
        excerpt: "Conversación con líderes que están transformando sus organizaciones a través de la transformación digital.",
        description: `
            <h2>Sobre este episodio</h2>
            <p>El liderazgo en 2024 requiere más que habilidades tradicionales. Exploramos cómo los líderes modernos están navegando la transformación digital mientras mantienen el enfoque en las personas.</p>
            <h2>Lo que descubrirás:</h2>
            <ul>
                <li>Las 5 competencias esenciales del líder digital</li>
                <li>Cómo balancear tecnología y humanidad</li>
                <li>Estrategias para liderar equipos remotos</li>
                <li>El futuro del trabajo y cómo prepararse</li>
            </ul>
        `,
        audioUrl: "",
        spotifyUrl: "https://spotify.com",
        appleUrl: "https://podcasts.apple.com"
    },
    {
        id: 3,
        title: "Mentalidad de Crecimiento Exponencial",
        category: "mentalidad",
        categoryDisplay: "Mentalidad",
        date: "2024-12-01",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
        excerpt: "Cambia tu mentalidad, cambia tu vida. Principios de psicología aplicada al éxito empresarial.",
        description: `
            <h2>Sobre este episodio</h2>
            <p>Tu mentalidad determina tu techo. En este episodio desciframos los patrones mentales de los emprendedores más exitosos y cómo puedes adoptarlos.</p>
            <h2>Lo que descubrirás:</h2>
            <ul>
                <li>La diferencia entre mentalidad fija y de crecimiento</li>
                <li>Cómo reprogramar creencias limitantes</li>
                <li>Técnicas de visualización de alto rendimiento</li>
                <li>El poder de los hábitos diarios</li>
            </ul>
        `,
        audioUrl: "",
        spotifyUrl: "https://spotify.com",
        appleUrl: "https://podcasts.apple.com"
    },
    {
        id: 4,
        title: "Estrategias de Negocios Disruptivos",
        category: "negocios",
        categoryDisplay: "Negocios",
        date: "2024-11-24",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        excerpt: "Cómo las startups están desafiando industrias tradicionales con modelos de negocio innovadores.",
        description: `
            <h2>Sobre este episodio</h2>
            <p>Analizamos las estrategias detrás de las empresas disruptivas que están redefiniendo industrias enteras. Aprende a pensar diferente y encontrar oportunidades donde otros ven obstáculos.</p>
            <h2>Lo que descubrirás:</h2>
            <ul>
                <li>Qué hace a un modelo de negocio verdaderamente disruptivo</li>
                <li>Casos de estudio: Uber, Airbnb, Tesla</li>
                <li>Cómo identificar mercados maduros para disrumpir</li>
                <li>El blueprint para crear tu propio océano azul</li>
            </ul>
        `,
        audioUrl: "",
        spotifyUrl: "https://spotify.com",
        appleUrl: "https://podcasts.apple.com"
    },
    {
        id: 5,
        title: "Innovación en Customer Experience",
        category: "innovacion",
        categoryDisplay: "Innovación",
        date: "2024-11-17",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
        excerpt: "La experiencia del cliente como ventaja competitiva en mercados saturados.",
        description: `
            <h2>Sobre este episodio</h2>
            <p>En un mundo donde los productos se parecen cada vez más, la experiencia del cliente es el diferenciador definitivo. Descubre cómo crear experiencias memorables.</p>
            <h2>Lo que descubrirás:</h2>
            <ul>
                <li>Los 4 pilares de una experiencia excepcional</li>
                <li>Cómo medir y mejorar el customer journey</li>
                <li>Design thinking aplicado al servicio al cliente</li>
                <li>Casos de éxito: Zappos, Ritz-Carlton, Disney</li>
            </ul>
        `,
        audioUrl: "",
        spotifyUrl: "https://spotify.com",
        appleUrl: "https://podcasts.apple.com"
    },
    {
        id: 6,
        title: "El Futuro del Liderazgo Remoto",
        category: "liderazgo",
        categoryDisplay: "Liderazgo",
        date: "2024-11-10",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
        excerpt: "Herramientas y estrategias para liderar equipos distribuidos globalmente con máxima efectividad.",
        description: `
            <h2>Sobre este episodio</h2>
            <p>El trabajo remoto llegó para quedarse. Aprende las mejores prácticas para liderar equipos de alto rendimiento sin importar dónde se encuentren.</p>
            <h2>Lo que descubrirás:</h2>
            <ul>
                <li>Herramientas esenciales para la colaboración remota</li>
                <li>Cómo mantener la cultura organizacional a distancia</li>
                <li>Estrategias de comunicación asíncrona efectiva</li>
                <li>Evitar el burnout en equipos remotos</li>
            </ul>
        `,
        audioUrl: "",
        spotifyUrl: "https://spotify.com",
        appleUrl: "https://podcasts.apple.com"
    }
];

// ============================================
// PODCAST LISTING PAGE FUNCTIONALITY
// ============================================

let currentFilter = 'all';

// Initialize podcast grid on page load
document.addEventListener('DOMContentLoaded', function () {
    try {
        console.log("Podcasts JS Initializing... v3");
        if (document.getElementById('podcastGrid')) {
            console.log("Found podcastGrid, rendering...");
            renderPodcastGrid(podcastEpisodes);
            initializeFilters();
        } else if (document.getElementById('podcastDetailContainer')) {
            console.log("Found podcastDetailContainer, loading detail...");
            loadEpisodeDetail();
        }
    } catch (e) {
        console.error("Error in Podcasts JS:", e);
    }
});

// Render podcast cards in grid
function renderPodcastGrid(episodes) {
    const grid = document.getElementById('podcastGrid');
    if (!grid) return;

    grid.innerHTML = episodes.map(episode => `
        <div class="podcast-card" data-category="${episode.category}" onclick="goToEpisode(${episode.id})">
            <img src="${episode.image}" alt="${episode.title}" class="podcast-card-image">
            <div class="podcast-card-content">
                <div class="podcast-card-meta">${episode.categoryDisplay.toUpperCase()} • ${formatDate(episode.date)}</div>
                <h3 class="podcast-card-title">${episode.title}</h3>
                <p class="podcast-card-excerpt">${episode.excerpt}</p>
                <button class="podcast-card-btn" onclick="event.stopPropagation(); playStickyEpisode(${episode.id})">Escuchar</button>
            </div>
        </div>
    `).join('');

    console.log("Rendered " + episodes.length + " episodes.");
}

// Initialize filter buttons
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter episodes
            const category = this.dataset.category;
            currentFilter = category;
            filterEpisodes(category);
        });
    });
}

// Filter episodes by category
function filterEpisodes(category) {
    const cards = document.querySelectorAll('.podcast-card');

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            // Add fade-in animation
            card.style.animation = 'fadeIn 0.4s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Navigate to episode detail page
function goToEpisode(id) {
    window.location.href = `podcast-detail.html?id=${id}`;
}

// Format date to readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

// ============================================
// PODCAST DETAIL PAGE FUNCTIONALITY
// ============================================

function loadEpisodeDetail() {
    // Get episode ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    // Default to ID 1 if no param is present (for the main detail page link)
    const episodeId = idParam ? parseInt(idParam) : 1;

    // Find episode
    const episode = podcastEpisodes.find(ep => ep.id === episodeId);

    if (!episode) {
        const container = document.getElementById('podcastDetailContainer');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px;">
                    <h2>Episodio no encontrado</h2>
                    <p><a href="/podcasts">Volver a podcasts</a></p>
                </div>
            `;
        }
        return;
    }

    // Render episode detail
    renderEpisodeDetail(episode);

    // Render related episodes
    renderRelatedEpisodes(episode);
}


// Map Categories to "The Bridge" Programs (Cross-Sell)
const BRIDGE_PROGRAMS = {
    'innovacion': {
        title: 'RETO DE INGENIO: 21 DÍAS',
        desc: 'Activa el verdadero potencial de tu equipo. La respuesta no está en Google, está en tu nómina.',
        btn: 'VER PROGRAMA',
        url: '/innova',
        bg: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
        gradient: 'linear-gradient(135deg, rgba(15, 32, 70, 0.9) 0%, rgba(30, 60, 114, 0.8) 100%)'
    },
    'liderazgo': {
        title: 'ACADEMIA DE LÍDERES',
        desc: 'La psicología de la influencia. Aprende a inspirar y crear culturas de alto rendimiento.',
        btn: 'PRÓXIMAMENTE',
        url: '#',
        bg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
        gradient: 'linear-gradient(135deg, rgba(15, 52, 67, 0.9) 0%, rgba(30, 115, 140, 0.8) 100%)'
    },
    'negocios': {
        title: 'MAESTRÍA EMPRESARIAL',
        desc: 'El sistema integral para dejar de ser operador y convertirte en dueño.',
        btn: 'PRÓXIMAMENTE',
        url: '#',
        bg: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
        gradient: 'linear-gradient(135deg, rgba(60, 40, 20, 0.9) 0%, rgba(197, 160, 89, 0.8) 100%)'
    },
    'mentalidad': {
        title: 'LIBERTAD FINANCIERA',
        desc: 'Rompe el techo de cristal de tus ingresos con mentalidad de abundancia.',
        btn: 'PRÓXIMAMENTE',
        url: '#',
        bg: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
        gradient: 'linear-gradient(135deg, rgba(45, 15, 60, 0.9) 0%, rgba(120, 50, 130, 0.8) 100%)'
    }
};

function renderEpisodeDetail(episode) {
    const container = document.getElementById('podcastDetailContainer');
    if (!container) return;

    // Default bridge fallback if category not matched
    const bridge = BRIDGE_PROGRAMS[episode.category] || BRIDGE_PROGRAMS['innovacion'];

    container.innerHTML = `
        <style>
            /* CINEMA HERO STYLES */
            .cinema-hero {
                display: grid;
                grid-template-columns: 1fr 1.2fr;
                min-height: 85vh; /* Immersive height */
                background: #0a0a0a;
                overflow: hidden;
            }
            .cinema-left {
                padding: 80px 60px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: #0a0a0a;
                z-index: 2;
                position: relative;
            }
            .cinema-right {
                position: relative;
                height: 100%;
                min-height: 400px;
            }
            .cinema-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                /* Grayscale for premium feel, color on hover optional */
                filter: grayscale(100%) contrast(1.1); 
                transition: filter 0.5s ease;
            }
            .cinema-right:hover .cinema-img {
                filter: grayscale(0%) contrast(1.1);
            }
            /* Gradient Mask to blend image into black */
            .cinema-mask {
                position: absolute;
                left: 0;
                top: 0;
                width: 20%;
                height: 100%;
                background: linear-gradient(to right, #0a0a0a, transparent);
                z-index: 1;
            }

            /* TYPOGRAPHY */
            .cinema-meta {
                font-family: 'Inter', sans-serif;
                font-size: 0.9rem;
                letter-spacing: 2px;
                color: #c5a059; /* Gold */
                text-transform: uppercase;
                margin-bottom: 20px;
                font-weight: 600;
            }
            .cinema-title {
                font-family: 'Oswald', sans-serif;
                font-size: 4rem; /* Massive */
                line-height: 1.1;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 40px;
                text-transform: uppercase;
            }
            
            /* ACTIONS */
            .cinema-actions {
                display: flex;
                gap: 20px;
                align-items: center;
                flex-wrap: wrap;
            }
            .btn-cinema-play {
                background: #ffffff;
                color: #000;
                padding: 16px 32px;
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                font-size: 1rem;
                text-transform: uppercase;
                border: none;
                border-radius: 50px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                transition: all 0.3s ease;
            }
            .btn-cinema-play:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(255,255,255,0.1);
                background: #c5a059; /* Gold hover */
            }
            .btn-cinema-sub {
                color: #999;
                text-decoration: none;
                font-family: 'Inter', sans-serif;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                gap: 6px;
                transition: color 0.3s;
            }
            .btn-cinema-sub:hover {
                color: #fff;
            }

            /* CONTENT & BRIDGE */
            .detail-content-wrapper {
                max-width: 800px;
                margin: 0 auto;
                padding: 100px 20px;
            }
            .detail-body {
                font-family: 'Montserrat', sans-serif;
                font-size: 1.15rem;
                line-height: 1.8;
                color: #333;
                margin-bottom: 80px;
            }
            .detail-body h2 {
                font-family: 'Oswald', sans-serif;
                font-size: 2rem;
                margin-top: 40px;
                margin-bottom: 20px;
                color: #000;
            }
            .detail-body ul {
                list-style: none; /* Custom bullets */
                padding-left: 0;
            }
            .detail-body li {
                position: relative;
                padding-left: 25px;
                margin-bottom: 15px;
            }
            .detail-body li::before {
                content: "•";
                color: #c5a059;
                font-weight: bold;
                position: absolute;
                left: 0;
                font-size: 1.5rem;
                line-height: 1;
                top: -2px;
            }

            /* THE BRIDGE CARD */
            .the-bridge {
                background: ${bridge.gradient};
                border-radius: 12px;
                overflow: hidden;
                position: relative;
                color: #fff;
                padding: 50px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            }
            .bridge-content {
                position: relative;
                z-index: 2;
                max-width: 600px;
            }
            .bridge-label {
                background: rgba(255,255,255,0.1);
                padding: 4px 12px;
                font-size: 0.75rem;
                font-family: 'Oswald', sans-serif;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 20px;
                display: inline-block;
            }
            .bridge-title {
                font-family: 'Oswald', sans-serif;
                font-size: 2.5rem;
                margin-bottom: 15px;
                line-height: 1.1;
                text-transform: uppercase;
            }
            .bridge-desc {
                font-family: 'Montserrat', sans-serif;
                margin-bottom: 30px;
                font-size: 1.05rem;
                opacity: 0.9;
            }
            .bridge-bg {
                position: absolute;
                top: 0;
                right: 0;
                width: 50%;
                height: 100%;
                background-image: url('${bridge.bg}');
                background-size: cover;
                background-position: center;
                opacity: 0.3;
                z-index: 1;
                /* Fade left */
                mask-image: linear-gradient(to right, transparent, black);
                -webkit-mask-image: linear-gradient(to right, transparent, black);
            }

            /* RESPONSIVE */
            @media (max-width: 900px) {
                .cinema-hero {
                    grid-template-columns: 1fr; /* Stack */
                    grid-template-rows: 400px auto;
                    min-height: auto;
                }
                .cinema-right {
                    order: 1; /* Image first on mobile */
                }
                .cinema-left {
                    order: 2;
                    padding: 50px 30px;
                }
                .cinema-mask {
                    width: 100%;
                    height: 30%;
                    top: auto;
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(to bottom, transparent, #0a0a0a);
                }
                .cinema-title {
                    font-size: 2.5rem;
                }
                .the-bridge {
                    padding: 30px;
                }
                .bridge-bg {
                    width: 100%;
                    opacity: 0.15;
                }
            }
        </style>

        <!-- 1. CINEMA HERO -->
        <div class="cinema-hero">
            <div class="cinema-left">
                <div class="cinema-meta">
                    EPISODIO #${episode.id} • ${episode.categoryDisplay}
                </div>
                <h1 class="cinema-title">${episode.title}</h1>
                <div class="cinema-actions">
                    <button class="btn-cinema-play" onclick="playStickyEpisode(${episode.id})">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Escuchar Ahora
                    </button>
                    ${episode.spotifyUrl ? `
                        <a href="${episode.spotifyUrl}" target="_blank" class="btn-cinema-sub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14.42c-.17.29-.54.38-.83.21-2.27-1.39-5.13-1.71-8.5-94-.33-.07-.54-.38-.47-.71.07-.33.38-.54.71-.47 3.65.83 6.81 1.2 9.38 2.78.29.17.38.54.21.83zm1.18-2.61c-.22.36-.69.47-1.04.25-2.55-1.57-6.43-2.03-9.45-1.11-.38.12-.79-.09-.91-.47-.12-.38.09-.79.47-.91 3.44-1.05 7.74-.53 10.68 1.27.36.22.47.69.25 1.04zm.1-2.73c-3.04-1.81-8.06-1.98-10.97-1.09-.45.14-.94-.11-1.08-.56-.14-.45.11-.94.56-1.08 3.32-1.02 8.87-.83 12.36 1.24.41.24.54.77.3 1.18-.24.41-.77.54-1.18.3z"/></svg>
                            Spotify
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="cinema-right">
                <div class="cinema-mask"></div>
                <img src="${episode.image}" alt="${episode.title}" class="cinema-img">
            </div>
        </div>

        <!-- 2. CONTENT & BRIDGE -->
        <div class="detail-content-wrapper">
            <div class="detail-body">
                ${episode.description}
            </div>

            <!-- "THE BRIDGE" CROSS-SELL WIDGET -->
            <div class="the-bridge">
                <div class="bridge-bg"></div>
                <div class="bridge-content">
                    <span class="bridge-label">RECOMENDADO PARA TI</span>
                    <h3 class="bridge-title">${bridge.title}</h3>
                    <p class="bridge-desc">${bridge.desc}</p>
                    <a href="${bridge.url}" class="btn-cinema-play" style="display: inline-flex; font-size: 0.9rem;">
                        ${bridge.btn}
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderRelatedEpisodes(currentEpisode) {
    const relatedContainer = document.getElementById('relatedPodcasts');
    if (!relatedContainer) return;

    // Get 3 related episodes (same category, excluding current)
    const related = podcastEpisodes
        .filter(ep => ep.category === currentEpisode.category && ep.id !== currentEpisode.id)
        .slice(0, 3);

    if (related.length === 0) {
        // If no same-category episodes, get any 3 others
        related.push(...podcastEpisodes.filter(ep => ep.id !== currentEpisode.id).slice(0, 3));
    }

    relatedContainer.innerHTML = related.map(episode => `
        <div class="podcast-card" onclick="goToEpisode(${episode.id})">
            <img src="${episode.image}" alt="${episode.title}" class="podcast-card-image">
            <div class="podcast-card-content">
                <div class="podcast-card-meta">${episode.categoryDisplay.toUpperCase()} • ${formatDate(episode.date)}</div>
                <h3 class="podcast-card-title">${episode.title}</h3>
                <p class="podcast-card-excerpt">${episode.excerpt}</p>
                <button class="podcast-card-btn" onclick="goToEpisode(${episode.id})">Escuchar</button>
            </div>
        </div>
    `).join('');
}


// ============================================
// STICKY PLAYER FUNCTIONALITY
// ============================================

let stickyAudio = null;
let isPlayingSticky = false;
let updateTimer = null;
let currentPodcastId = null; // Track current episode

function playNextEpisode() {
    if (!currentPodcastId) return;
    const currentIndex = podcastEpisodes.findIndex(ep => ep.id === currentPodcastId);
    if (currentIndex !== -1 && currentIndex < podcastEpisodes.length - 1) {
        playStickyEpisode(podcastEpisodes[currentIndex + 1].id);
    } else {
        // Optional: Loop back to start or do nothing
        playStickyEpisode(podcastEpisodes[0].id);
    }
}

function playPrevEpisode() {
    if (!currentPodcastId) return;
    const currentIndex = podcastEpisodes.findIndex(ep => ep.id === currentPodcastId);
    if (currentIndex > 0) {
        playStickyEpisode(podcastEpisodes[currentIndex - 1].id);
    } else {
        // Cycle to last
        playStickyEpisode(podcastEpisodes[podcastEpisodes.length - 1].id);
    }
}

function playStickyEpisode(id) {
    console.log("Play sticky episode:", id);
    currentPodcastId = id; // Update current ID

    const episode = podcastEpisodes.find(ep => ep.id === id);
    if (!episode || !episode.audioUrl) {
        alert("Audio no disponible para este episodio.");
        return;
    }

    // Initialize player elements
    const player = document.getElementById('sticky-player');
    const audio = document.getElementById('sticky-audio');
    const art = document.getElementById('player-art');
    const title = document.getElementById('player-title');
    const author = document.getElementById('player-author');
    const playBtn = document.getElementById('sticky-play-btn');

    if (!player || !audio) {
        console.error("Sticky player elements not found in DOM");
        return;
    }

    // Show loading state
    if (playBtn) {
        playBtn.classList.add('loading');
        playBtn.setAttribute('aria-label', 'Cargando audio...');
    }

    // Set content
    art.src = episode.image;
    title.innerText = episode.title;
    author.innerText = "FACE Innovation • " + episode.categoryDisplay;
    audio.src = episode.audioUrl;

    // Show player
    player.classList.add('active');
    player.setAttribute('aria-live', 'polite');

    // Play with small delay to ensure source load
    stickyAudio = audio;
    stickyAudio.play()
        .then(() => {
            isPlayingSticky = true;
            updatePlayIcon(true);
            startProgressLoop();
            if (playBtn) {
                playBtn.classList.remove('loading');
                playBtn.setAttribute('aria-label', 'Pausar podcast');
            }
        })
        .catch(err => {
            console.error("Error playing:", err);
            if (playBtn) {
                playBtn.classList.remove('loading');
                playBtn.setAttribute('aria-label', 'Reproducir podcast');
            }
        });

    // Metadata loaded
    stickyAudio.onloadedmetadata = function () {
        const durationEl = document.getElementById('player-duration');
        if (durationEl) {
            durationEl.innerText = formatTime(stickyAudio.duration);
        }
        const inlineTotal = document.getElementById('inline-time-total');
        if (inlineTotal) {
            inlineTotal.innerText = formatTime(stickyAudio.duration);
        }
    };

    stickyAudio.onended = function () {
        isPlayingSticky = false;
        updatePlayIcon(false);
        stopProgressLoop();
        if (playBtn) {
            playBtn.setAttribute('aria-label', 'Reproducir podcast');
        }
    };
}

function toggleStickyPlay() {
    if (!stickyAudio) return;

    if (stickyAudio.paused) {
        stickyAudio.play();
        isPlayingSticky = true;
        updatePlayIcon(true);
        startProgressLoop();
    } else {
        stickyAudio.pause();
        isPlayingSticky = false;
        updatePlayIcon(false);
        stopProgressLoop();
    }
}

function closeStickyPlayer() {
    const player = document.getElementById('sticky-player');
    if (stickyAudio) {
        stickyAudio.pause();
        stickyAudio.currentTime = 0;
    }
    player.classList.remove('active');
    isPlayingSticky = false;
    updatePlayIcon(false);
    stopProgressLoop();
}

function updatePlayIcon(isPlaying) {
    const playIcon = document.getElementById('sticky-icon-play');
    const pauseIcon = document.getElementById('sticky-icon-pause');
    const playBtn = document.getElementById('sticky-play-btn');

    if (playIcon && pauseIcon) {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            if (playBtn) {
                playBtn.setAttribute('aria-label', 'Pausar podcast');
            }
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            if (playBtn) {
                playBtn.setAttribute('aria-label', 'Reproducir podcast');
            }
        }
    }

    // Update Inline Player Icon (Home)
    const inlinePlay = document.getElementById('inline-icon-play');
    const inlinePause = document.getElementById('inline-icon-pause');
    const inlineBtn = document.getElementById('inline-play-btn');

    if (inlinePlay && inlinePause) {
        if (isPlaying) {
            inlinePlay.style.display = 'none';
            inlinePause.style.display = 'block';
            if (inlineBtn) {
                inlineBtn.setAttribute('aria-label', 'Pausar podcast');
                inlineBtn.classList.add('playing');
            }
        } else {
            inlinePlay.style.display = 'block';
            inlinePause.style.display = 'none';
            if (inlineBtn) {
                inlineBtn.setAttribute('aria-label', 'Reproducir podcast');
                inlineBtn.classList.remove('playing');
            }
        }
    }
}

function skipStickyTime(seconds) {
    if (stickyAudio) {
        stickyAudio.currentTime += seconds;
        updateStickyProgress();
    }
}

function startProgressLoop() {
    stopProgressLoop();
    updateTimer = setInterval(updateStickyProgress, 500);
}

function stopProgressLoop() {
    if (updateTimer) clearInterval(updateTimer);
}

function updateStickyProgress() {
    if (!stickyAudio || isDraggingSticky) return;

    const current = stickyAudio.currentTime;
    const duration = stickyAudio.duration || 1;
    const percent = (current / duration) * 100;

    const progressBar = document.getElementById('sticky-progress-bar');
    if (progressBar) progressBar.style.width = `${percent}%`;

    const timeLabel = document.getElementById('player-current-time');
    if (timeLabel) timeLabel.innerText = formatTime(current);

    // Sync Inline Player (Home)
    const inlineFill = document.getElementById('inline-prog-fill');
    if (inlineFill) inlineFill.style.width = `${percent}%`;

    const inlineTime = document.getElementById('inline-time-current');
    if (inlineTime) inlineTime.innerText = formatTime(current);

    const inlineTotal = document.getElementById('inline-time-total');
    if (inlineTotal && stickyAudio.duration) inlineTotal.innerText = formatTime(stickyAudio.duration);
}

// Click on progress bar to seek
let isDraggingSticky = false; // Add flag for dragging state

function setupProgressBarScrubbing() {
    // 1. Sticky Player Scrubbing
    const progressContainer = document.querySelector('.player-progress-bar');
    if (progressContainer) {
        progressContainer.style.cursor = 'pointer';

        // Mouse Dragging Logic
        function handleScrub(e) {
            if (!stickyAudio || !stickyAudio.duration) return;

            // Calculate relative to the TRACK, not the container (which includes times)
            const track = document.getElementById('sticky-progress-container');
            if (!track) return;

            const rect = track.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;

            if (width > 0) {
                let ratio = clickX / width;
                ratio = Math.max(0, Math.min(1, ratio));
                const seekTime = ratio * stickyAudio.duration;

                stickyAudio.currentTime = seekTime;
                updateStickyProgress();
            }
        }

        progressContainer.addEventListener('mousedown', (e) => {
            if (!stickyAudio || !stickyAudio.duration) return;
            e.preventDefault(); // Critical for drag to work
            isDraggingSticky = true;
            handleScrub(e);
        });

        window.addEventListener('mousemove', (e) => { // Use window for capture outside elements
            if (isDraggingSticky) {
                e.preventDefault();
                handleScrub(e);
            }
        });

        window.addEventListener('mouseup', () => { // Use window to catch release anywhere
            if (isDraggingSticky) {
                isDraggingSticky = false;
            }
        });

        // Click Logic (for simple clicks)
        // Click Logic (Redundant with mousedown)
        progressContainer.addEventListener('click', (e) => {
            // handled by mousedown
        });

        // Touch scrubbing support (Sticky)
        const handleTouch = (e) => {
            if (!stickyAudio || !stickyAudio.duration) return;
            if (e.cancelable) e.preventDefault(); // Only prevent default if cancelable to avoid warnings
            const rect = progressContainer.getBoundingClientRect();
            const touch = e.touches[0];
            const touchX = touch.clientX - rect.left;
            const width = rect.width;

            if (width > 0) {
                const ratio = Math.max(0, Math.min(1, touchX / width));
                stickyAudio.currentTime = ratio * stickyAudio.duration;
                updateStickyProgress();
            }
        };

        progressContainer.addEventListener('touchstart', handleTouch, { passive: false });
        progressContainer.addEventListener('touchmove', handleTouch, { passive: false });
    }

    // 2. Inline Player Scrubbing (Home)
    const inlineLine = document.getElementById('inline-prog-line');
    if (inlineLine) {
        inlineLine.addEventListener('click', (e) => {
            if (!stickyAudio || !stickyAudio.duration) return;
            const rect = inlineLine.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            if (width > 0) {
                stickyAudio.currentTime = (clickX / width) * stickyAudio.duration;
                updateStickyProgress();
            }
        });
    }

    console.log("Progress bar scrubbing (Sticky + Inline) setup complete.");
}



// Call setup on load and whenever sticky player is triggered if needed, 
// but since it's static in DOM, once on load is fine usually.
// However, the previous listener was inside DOMContentLoaded which might fire before sticky player HTML exists?
// No, sticky player HTML is now in index.html, so it exists on load.
// Listener removed, moved to end of file to ensure injection first

// Helper for format time (redeclared just in case, but safe in global scope)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Add fade-in animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ==========================================
// CENTRALIZED STICKY PLAYER INJECTION
// Source of Truth: Tony Robbins Style (B&W, Optimized)
// ==========================================
const STICKY_PLAYER_HTML = `
<div id="sticky-player" class="sticky-player">
    <div class="player-container">
        <div class="player-left">
            <img src="" alt="Album Art" id="player-art">
            <div class="player-info">
                <h4 id="player-title">Episode Title</h4>
                <span id="player-author">FACE Innovation</span>
            </div>
        </div>
        <div class="player-center">
            <div class="player-controls">
                <button class="player-btn" onclick="skipStickyTime(-15)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                        <path d="M3 3v5h5"/>
                        <text x="12" y="14" text-anchor="middle" font-size="7" font-family="Inter, sans-serif" stroke="none" fill="currentColor">15</text>
                    </svg>
                </button>
                <button class="player-btn play-toggle" id="sticky-play-btn" onclick="toggleStickyPlay()">
                    <svg id="sticky-icon-play" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <svg id="sticky-icon-pause" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                </button>
                <button class="player-btn" onclick="skipStickyTime(15)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                        <path d="M21 3v5h-5"/>
                        <text x="12" y="14" text-anchor="middle" font-size="7" font-family="Inter, sans-serif" stroke="none" fill="currentColor">15</text>
                    </svg>
                </button>
            </div>
            <!-- Progress bar exposed for mobile via CSS now -->
            <div class="player-progress-bar">
                <span id="player-current-time">0:00</span>
                <div class="progress-track" id="sticky-progress-container">
                    <div class="progress-fill" id="sticky-progress-bar"></div>
                </div>
                <span id="player-duration">--:--</span>
            </div>
        </div>
        <div class="player-right">
            <button class="player-btn close-player" onclick="closeStickyPlayer()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
    <audio id="sticky-audio"></audio>
</div>
`;

function injectStickyPlayer() {
    if (!document.getElementById('sticky-player')) {
        document.body.insertAdjacentHTML('beforeend', STICKY_PLAYER_HTML);
        console.log("Global Sticky Player injected successfully.");
    }
}

// Inject immediately when script loads to ensure elements exist for binding
// AND init scrubbing logic immediately after
function initGlobalPlayer() {
    injectStickyPlayer();
    setupProgressBarScrubbing();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalPlayer);
} else {
    initGlobalPlayer();
}
