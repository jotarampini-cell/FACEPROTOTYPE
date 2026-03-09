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

    // Note: Old mobile menu overlay injection removed.
    // The main menu is now handled entirely by menu.js.

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
