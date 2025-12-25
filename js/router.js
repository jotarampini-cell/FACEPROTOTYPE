// Simple Router for App Dashboard
// Handles navigation between different views

class Router {
    constructor() {
        this.routes = {
            'home': this.renderHome.bind(this),
            'library': this.renderLibrary.bind(this),
            'challenges': this.renderChallenges.bind(this),
            'profile': this.renderProfile.bind(this)
        };

        this.currentRoute = 'home';
        this.init();
    }

    init() {
        // Listen to hash changes
        window.addEventListener('hashchange', () => this.handleRoute());

        // Handle initial load
        this.handleRoute();

        // Update bottom nav
        this.updateBottomNav();
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        const route = this.routes[hash];

        if (route) {
            this.currentRoute = hash;
            route();
        } else {
            this.currentRoute = 'home';
            this.routes['home']();
        }

        this.updateBottomNav();
    }

    updateBottomNav() {
        const hash = this.currentRoute;
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === hash) {
                item.classList.add('active');
            }
        });
    }

    renderHome() {
        const user = auth.getCurrentUser();
        const inProgressVideos = getVideos('in-progress');
        const recommendedVideos = getVideos('new').slice(0, 3);

        const content = `
            <div class="dashboard-home">
                <section class="welcome">
                    <h1>¡Hola, <span id="user-name">${user.displayName}</span>!</h1>
                    <p class="level-badge">Nivel: ${user.stats.level}</p>
                </section>

                <section class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">📹</div>
                        <div class="stat-value">${user.stats.videosCompleted}</div>
                        <div class="stat-label">Videos completados</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">⏱️</div>
                        <div class="stat-value">${user.stats.totalHours}h</div>
                        <div class="stat-label">Horas totales</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🎯</div>
                        <div class="stat-value">${user.stats.activeChallenges}</div>
                        <div class="stat-label">Retos activos</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-value">${user.stats.points}</div>
                        <div class="stat-label">Puntos</div>
                    </div>
                </section>

                ${inProgressVideos.length > 0 ? `
                <section class="content-section">
                    <h2>Continúa Aprendiendo</h2>
                    <div class="video-grid">
                        ${inProgressVideos.map(v => this.createVideoCard(v)).join('')}
                    </div>
                </section>
                ` : ''}

                <section class="content-section">
                    <h2>Recomendado para ti</h2>
                    <div class="video-grid">
                        ${recommendedVideos.map(v => this.createVideoCard(v)).join('')}
                    </div>
                </section>
            </div>
        `;

        this.updateContent(content);
    }

    renderLibrary() {
        const allVideos = getVideos();
        const categories = {
            'fundamentos': 'Fundamentos',
            'metodologia': 'Metodología',
            'avanzado': 'Avanzado'
        };

        const content = `
            <div class="library-view">
                <header class="view-header">
                    <h1>Mi Biblioteca</h1>
                </header>

                ${Object.entries(categories).map(([key, label]) => {
            const videos = getVideosByCategory(key);
            return `
                        <section class="content-section">
                            <h2>${label}</h2>
                            <div class="video-grid">
                                ${videos.map(v => this.createVideoCard(v)).join('')}
                            </div>
                        </section>
                    `;
        }).join('')}
            </div>
        `;

        this.updateContent(content);
    }

    renderChallenges() {
        const activeChallenges = getChallenges('active');
        const pendingChallenges = getChallenges('pending');

        const content = `
            <div class="challenges-view">
                <header class="view-header">
                    <h1>Mis Retos FACE</h1>
                </header>

                <section class="content-section">
                    <h2>Retos Activos</h2>
                    ${activeChallenges.length > 0 ? `
                        <div class="challenges-list">
                            ${activeChallenges.map(c => this.createChallengeCard(c)).join('')}
                        </div>
                    ` : '<p>No tienes retos activos. ¡Comienza uno nuevo!</p>'}
                </section>

                <section class="content-section">
                    <h2>Retos Disponibles</h2>
                    ${pendingChallenges.length > 0 ? `
                        <div class="challenges-list">
                            ${pendingChallenges.map(c => this.createChallengeCard(c)).join('')}
                        </div>
                    ` : '<p>¡Has completado todos los retos disponibles!</p>'}
                </section>
            </div>
        `;

        this.updateContent(content);
    }

    renderProfile() {
        const user = auth.getCurrentUser();

        const content = `
            <div class="profile-view">
                <div class="profile-header">
                    <img src="${user.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName)}" class="profile-avatar">
                    <h2>${user.displayName}</h2>
                    <p class="user-email">${user.email}</p>
                    <span class="level-badge">${user.stats.level}</span>
                </div>

                <div class="profile-stats">
                    <div class="stat">
                        <span class="value">${user.stats.points}</span>
                        <span class="label">Puntos totales</span>
                    </div>
                    <div class="stat">
                        <span class="value">${user.stats.streak || 0}</span>
                        <span class="label">Días seguidos</span>
                    </div>
                </div>

                <div class="profile-sections">
                    <div class="section">
                        <h3>Configuración</h3>
                        <ul class="settings-list">
                            <li>Editar perfil</li>
                            <li>Cambiar contraseña</li>
                            <li>Notificaciones</li>
                        </ul>
                    </div>

                    <div class="section danger">
                        <button class="btn btn-outline" onclick="handleSignOut()" style="color: #dc3545; border-color: #dc3545;">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.updateContent(content);
    }

    createVideoCard(video) {
        return `
            <div class="video-card" onclick="playVideo('${video.id}')">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    <span class="duration">${video.duration}</span>
                    ${video.progress > 0 ? `
                        <div class="progress-bar">
                            <div class="progress" style="width: ${video.progress}%"></div>
                        </div>
                    ` : ''}
                </div>
                <div class="video-info">
                    <h4>${video.title}</h4>
                    <p>${video.description}</p>
                </div>
            </div>
        `;
    }

    createChallengeCard(challenge) {
        return `
            <div class="challenge-card">
                <h3>${challenge.title}</h3>
                <p>${challenge.description}</p>
                <div class="challenge-meta">
                    <span class="difficulty">${challenge.difficulty}</span>
                    <span class="points">${challenge.points} pts</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${challenge.progress}%"></div>
                </div>
                <p class="progress-text">${challenge.progress}% completado</p>
            </div>
        `;
    }

    updateContent(html) {
        const content = document.getElementById('app-content');
        content.innerHTML = html;
    }
}

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.router = new Router();
    });
} else {
    window.router = new Router();
}
