// Header Scroll Enhancement
// Adds shadow on scroll for better visual hierarchy
// Keeps header always visible and centered

(function () {
    const header = document.querySelector('header') || document.querySelector('.main-header');
    if (!header) return;

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow/color when scrolled past 50px
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Removed legacy translateX(-50%) as we are now using width: 100% left: 0
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
