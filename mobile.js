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

    // Add fade-in class to sections
    document.querySelectorAll('.face-card, .metro-card, .manifesto-item, .service-block').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add slide animations to section headers
    document.querySelectorAll('.section-header, .subsection-title').forEach(el => {
        el.classList.add('slide-in-left');
        observer.observe(el);
    });

    // ==========================================
    // FLOATING ACTION BUTTON (FAB)
    // ==========================================

    const fab = document.createElement('div');
    fab.className = 'fab';
    fab.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    document.body.appendChild(fab);

    // Show FAB after scrolling down
    let fabVisible = false;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500 && !fabVisible) {
            fab.classList.add('visible');
            fabVisible = true;
        } else if (window.scrollY <= 500 && fabVisible) {
            fab.classList.remove('visible');
            fabVisible = false;
        }
    });

    // FAB click - scroll to contact or open contact form
    fab.addEventListener('click', () => {
        // For now, scroll to bottom (later can be contact form)
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

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
    // SMOOTH HEADER HIDE ON SCROLL
    // ==========================================

    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            if (header) header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            if (header) header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

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
