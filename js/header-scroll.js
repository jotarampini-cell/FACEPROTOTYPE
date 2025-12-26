// Header Scroll Enhancement
// Adds shadow on scroll for better visual hierarchy
// Keeps header always visible (no auto-hide)

(function () {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScrollTop = 0;
    let ticking = false;

    function updateHeader(scrollTop) {
        // Add shadow when scrolled
        if (scrollTop > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Always keep header visible - no hiding behavior
        header.style.transform = 'translateY(0)';

        lastScrollTop = scrollTop;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateHeader(window.pageYOffset || document.documentElement.scrollTop);
                ticking = false;
            });
            ticking = true;
        }
    }

    // Listen to scroll events
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial check
    updateHeader(window.pageYOffset || document.documentElement.scrollTop);
})();

// Toggle hamburger menu animation
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
    });
}

// Close menu and remove active class
const menuClose = document.getElementById('menu-close');
if (menuClose) {
    menuClose.addEventListener('click', () => {
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
    });
}
