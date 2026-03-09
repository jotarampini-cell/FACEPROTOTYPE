// ============================================
// GLOBAL MENU INJECTION SYSTEM
// Single Source of Truth for Header & Navigation
// ============================================

const MASTER_MENU_HTML = `
    <!-- Header -->
    <header id="main-header" class="main-header">
        <div class="header-container">
            <!-- Logo (Left) -->
            <a href="/home" class="logo" style="text-decoration: none; cursor: pointer; flex-shrink: 0;">
                <img src="assets/images/Logo%20principal.png" alt="FACE Logo" class="header-img-logo">
            </a>

            <!-- Desktop Center Nav Links (hidden on mobile) -->
            <nav class="desktop-nav">
                <a href="/metodologia-face" class="desktop-nav-link">Modelo FACE</a>
                <a href="/programas" class="desktop-nav-link">Programas</a>
                <a href="/blog" class="desktop-nav-link">Blog</a>
                <a href="/podcasts" class="desktop-nav-link">Podcast</a>
                <a href="/quiz" class="desktop-nav-link">Diagnóstico</a>
            </nav>

            <!-- Right Side: CTA + Hamburger -->
            <div class="header-right">
                <a href="/evaluacion" class="nav-cta-btn">Iniciar ahora</a>
                <button class="menu-icon" id="menu-toggle" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Full Screen Menu (Mobile & Desktop Overlay) -->
    <div id="fullscreen-menu" class="fullscreen-menu">
        <nav>
            <div class="tr-menu-header">
                <div class="tr-menu-logo">
                    <img src="assets/images/Logo%20principal.png" alt="FACE Logo" class="header-img-logo">
                </div>
                <a href="/evaluacion" class="tr-header-cta">Iniciar ahora</a>
                <button class="tr-menu-close" aria-label="Cerrar menú">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <ul class="tr-mobile-list">
                <li class="tr-menu-item">
                    <a href="/home" class="menu-link">Inicio</a>
                </li>
                <li class="tr-menu-item">
                    <a href="/metodologia-face" class="menu-link">Modelo FACE</a>
                </li>
                <li class="tr-menu-item menu-parent">
                    <a href="/programas" class="menu-link menu-parent-link">
                        Programas
                    </a>
                    <svg class="chevron-icon" onclick="toggleSubmenu(event, 'programas-submenu')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    <ul class="tr-submenu" id="programas-submenu">
                        <li><a href="/innova-desde-adentro" class="menu-link menu-sublink">Innova desde Adentro</a></li>
                    </ul>
                </li>
                <li class="tr-menu-item menu-parent">
                    <a href="#" class="menu-link menu-parent-link" onclick="toggleSubmenu(event, 'explorar-submenu')">
                        Explorar
                    </a>
                    <svg class="chevron-icon" onclick="toggleSubmenu(event, 'explorar-submenu')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    <ul class="tr-submenu" id="explorar-submenu">
                        <li><a href="/blog" class="menu-link menu-sublink">Blog</a></li>
                        <li><a href="/podcasts" class="menu-link menu-sublink">Podcast</a></li>
                        <li><a href="/recursos-gratis" class="menu-link menu-sublink">Recursos Gratis</a></li>
                        <li><a href="/quiz" class="menu-link menu-sublink">Diagnóstico (Quiz)</a></li>
                    </ul>
                </li>
            </ul>

            <div class="tr-menu-footer">
                <a href="/evaluacion" class="tr-btn-primary">Iniciar ahora</a>
                <a href="#login" class="tr-btn-secondary">Log in</a>
            </div>
        </nav>
    </div>
`;

/**
 * Injects the Global Menu at the start of the body
 */
function injectGlobalMenu() {
    // Check if menu already exists to avoid duplication
    if (document.getElementById('fullscreen-menu')) return;

    // Inject HTML at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', MASTER_MENU_HTML);
    console.log("Global Menu Injected Successfully");

    // Initialize Event Listeners AFTER injection
    initMenuEvents();
}

/**
 * Initializes Menu Logic (Open/Close, Submenus)
 */
function initMenuEvents() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) menuToggle.addEventListener('click', openMenu);

    const menuClose = document.querySelector('.tr-menu-close');
    if (menuClose) menuClose.addEventListener('click', closeMenu);

    const fullscreenMenu = document.getElementById('fullscreen-menu');
    if (fullscreenMenu) {
        fullscreenMenu.addEventListener('click', function (e) {
            if (e.target.id === 'fullscreen-menu') closeMenu();
        });
    }

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    initStickyHeader();
}

/**
 * Sticky Header Scroll Effect
 */
function initStickyHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

function openMenu() {
    const menu = document.getElementById('fullscreen-menu');
    if (menu) {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMenu() {
    const menu = document.getElementById('fullscreen-menu');
    if (menu) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    event.stopPropagation();

    const submenu = document.getElementById(submenuId);
    if (!submenu) return;

    const parentLi = submenu.closest('.menu-parent');
    if (!parentLi) return;

    document.querySelectorAll('.menu-parent').forEach(parent => {
        if (parent !== parentLi) {
            parent.classList.remove('active');
            parent.querySelector('.tr-submenu')?.classList.remove('active');
        }
    });

    parentLi.classList.toggle('active');
    submenu.classList.toggle('active');
}

function scrollToWidget() {
    closeMenu();
    const widget = document.querySelector('#adn-innovador-section');
    if (widget) {
        setTimeout(() => widget.scrollIntoView({ behavior: 'smooth' }), 300);
    } else {
        window.location.href = '/home#adn-innovador-section';
    }
}

// Auto-Run on Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectGlobalMenu);
} else {
    injectGlobalMenu();
}
