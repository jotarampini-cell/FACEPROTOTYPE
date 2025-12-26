// ==========================================
// SERVICE WORKER REGISTRATION (PWA)
// ==========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('✅ Service Worker registered!'))
            .catch(err => console.log('❌ Service Worker registration failed:', err));
    });
}

// Mobile Optimizations & Animations

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in and reveal classes to sections
    document.querySelectorAll('.face-card, .metro-card, .manifesto-item, .service-block, .reveal').forEach(el => {
        observer.observe(el);
    });

    // Add slide animations to section headers
    document.querySelectorAll('.section-header, .subsection-title').forEach(el => {
        el.classList.add('slide-in-left');
        observer.observe(el);
    });

    // ==========================================
    // FLOATING ACTION BUTTON (FAB) - Removed for cleaner landing
    // ==========================================

    // ==========================================
    // MOBILE MENU
    // ==========================================

    // Create hamburger button
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';

    // Insert hamburger into navigation
    const nav = document.querySelector('nav');
    if (nav) {
        nav.appendChild(hamburger);
    }

    // Create mobile menu overlay
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu-overlay';
    mobileMenu.innerHTML = `
        <nav>
            <a href="#hero">Inicio</a>
            <a href="#about-face">Metodología</a>
            <a href="#educacion">Educación</a>
            <a href="#manifesto">Manifiesto</a>
            <a href="#services">Servicios</a>
        </nav>
    `;
    document.body.appendChild(mobileMenu);

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when link clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ==========================================
    // TOUCH FEEDBACK
    // ==========================================

    document.querySelectorAll('.btn, .service-btn, .metro-card, .face-card').forEach(el => {
        el.classList.add('touch-feedback');
    });

    // ==========================================
    // PERFORMANCE: LAZY LOAD IMAGES
    // ==========================================

    const images = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imgObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imgObserver.observe(img));

    // ==========================================
    // SMOOTH HEADER STABILITY
    // ==========================================

    // Header hiding logic removed as per Expert Audit.
    // Fixed positioning is now stable and handled by header-scroll.js.

    // ==========================================
    // PROGRESS INDICATOR UPDATE
    // ==========================================

    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            scrollProgress.style.width = scrollPercentage + '%';
        }
    });

    console.log('✨ Mobile optimizations loaded!');
});
