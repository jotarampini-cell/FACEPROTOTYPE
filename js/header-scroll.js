// Header Scroll Enhancement
// Adds shadow on scroll for better visual hierarchy
// Keeps header always visible and centered

(function () {
    const header = document.querySelector('header') || document.querySelector('.main-header');
    if (!header) return;

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow when scrolled
        if (scrollTop > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // CRITICAL: Ensure we keep the horizontal centering translateX(-50%)
        // that is defined in CSS, but handle any additional JS transforms here.
        // We use inline style only for translateY if we really needed it for hiding,
        // but since we want it ALWAYS VISIBLE, we just ensure transform is stable.
        header.style.transform = 'translateX(-50%)';
    }

    // Listen to scroll events
    window.addEventListener('scroll', updateHeader, { passive: true });

    // Initial check
    updateHeader();
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
