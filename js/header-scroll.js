// Header Scroll Behavior Enhancement
// Adds scroll class and hide/show behavior

let lastScroll = 0;
const header = document.querySelector('.main-header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for styling
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 150) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });
}

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
