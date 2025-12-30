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
                    <p><a href="podcasts.html">Volver a podcasts</a></p>
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

function renderEpisodeDetail(episode) {
    const container = document.getElementById('podcastDetailContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="podcast-detail-hero">
            <div class="podcast-detail-container">
                <div>
                    <img src="${episode.image}" alt="${episode.title}" class="podcast-detail-artwork">
                </div>
                <div class="podcast-detail-info">
                    <div class="podcast-detail-meta">${episode.categoryDisplay.toUpperCase()} • ${formatDate(episode.date)}</div>
                    <h1 class="podcast-detail-title">${episode.title}</h1>
                    
                    <div class="podcast-detail-cta">
                        <button class="podcast-btn-primary" onclick="playStickyEpisode(${episode.id})">Escuchar Episodio</button>
                        <div class="podcast-platform-buttons">
                            <button class="podcast-btn-platform" onclick="window.open('${episode.spotifyUrl}', '_blank')">Spotify</button>
                            <button class="podcast-btn-platform" onclick="window.open('${episode.appleUrl}', '_blank')">Apple Podcasts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="podcast-content-section">
            ${episode.description}
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
            const rect = progressContainer.getBoundingClientRect();
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
            isDraggingSticky = true;
            handleScrub(e);
        });

        document.addEventListener('mousemove', (e) => {
            if (isDraggingSticky) {
                e.preventDefault(); // Prevent text selection
                handleScrub(e);
            }
        });

        document.addEventListener('mouseup', () => {
            if (isDraggingSticky) {
                isDraggingSticky = false;
            }
        });

        // Click Logic (for simple clicks)
        progressContainer.addEventListener('click', (e) => {
            if (!stickyAudio || !stickyAudio.duration) return;
            // Clicking is handled by mousedown/up as well now, but keep for fallback
            // Actually, mousedown handles the initial jump, so click might be redundant or double-fire.
            // Let's rely on handleScrub from mousedown for immediate response.
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
document.addEventListener('DOMContentLoaded', setupProgressBarScrubbing);

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
