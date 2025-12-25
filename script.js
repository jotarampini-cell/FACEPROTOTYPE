// ====================================
// INITIALIZATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    initSkeletonLoader();
    initHeader();
    initMenu();
    initHeroAnimation();
    initFaceCards();
    initVideoCards();
    initReadingProgress();
});

// ====================================
// SKELETON LOADER
// ====================================

function initSkeletonLoader() {
    const loader = document.getElementById('skeleton-loader');

    // Simulate loading time
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
}

// ====================================
// HEADER SCROLL BEHAVIOR
// ====================================

function initHeader() {
    const header = document.getElementById('main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('hidden');
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });
}

// ====================================
// FULLSCREEN MENU
// ====================================

function initMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuLinks = fullscreenMenu.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    function closeMenu() {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ====================================
// HERO KINETIC TYPOGRAPHY
// ====================================

function initHeroAnimation() {
    const rotatingWord = document.getElementById('rotating-word');
    const subtitle = document.getElementById('hero-subtitle');
    const words = ['RESOLVER', 'ADAPTAR', 'MEJORAR', 'FACE'];
    let currentIndex = 0;
    let intervalId;
    let rotationCount = 0;
    const maxRotations = 12; // Spin through words multiple times

    // Start the slot machine effect
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingWord.textContent = words[currentIndex];
        rotatingWord.style.animation = 'none';

        // Trigger reflow to restart animation
        void rotatingWord.offsetWidth;
        rotatingWord.style.animation = 'text-flash 0.15s ease';

        rotationCount++;

        // Slow down and stop at FACE
        if (rotationCount >= maxRotations) {
            clearInterval(intervalId);
            // Ensure we land on FACE
            setTimeout(() => {
                rotatingWord.textContent = 'FACE';
                rotatingWord.style.animation = 'text-flash 0.5s ease';

                // Flash effect on background
                document.querySelector('.hero').style.animation = 'bg-flash 0.3s ease';

                // Show subtitle
                setTimeout(() => {
                    subtitle.style.opacity = '1';
                    subtitle.style.animation = 'fade-in-up 0.8s ease forwards';
                }, 200);
            }, 100);
        }
    }, 150);
}

// Add background flash animation via style injection
const style = document.createElement('style');
style.textContent = `
    @keyframes bg-flash {
        0%, 100% { background-color: #FFFFFF; }
        50% { background-color: #F0F9FF; }
    }
`;
document.head.appendChild(style);

// ====================================
// FACE CARDS INTERACTION
// ====================================

function initFaceCards() {
    const cards = document.querySelectorAll('.face-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Optional: Add click interaction
            card.style.animation = 'card-click 0.3s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 300);
        });
    });
}

// ====================================
// VIDEO CARDS INTERACTION
// ====================================

function initVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            alert(`Video: "${title}"\n\nEsta funcionalidad estará disponible próximamente. Aquí podrás ver el video completo sobre este tema.`);
        });
    });
}

// ====================================
// READING PROGRESS BAR
// ====================================

function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
}

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// SERVICE BUTTONS INTERACTION
// ====================================

const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const isPublic = e.target.closest('.public-block');

        if (isPublic) {
            // Handle personal challenge
            alert('¡Bienvenido al Reto Personal! Esta funcionalidad estará disponible próximamente.');
        } else {
            // Handle business demo
            alert('Gracias por tu interés. Pronto te contactaremos para agendar tu demo.');
        }
    });
});

// ====================================
// HERO INPUT INTERACTION
// ====================================

const heroInput = document.querySelector('.hero-input');

heroInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && heroInput.value.trim() !== '') {
        alert(`Excelente pregunta: "${heroInput.value}". Nuestro equipo analizará tu reto y te contactará pronto.`);
        heroInput.value = '';
    }
});

// ====================================
// PERFORMANCE OPTIMIZATION
// ====================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions if needed
window.addEventListener('scroll', debounce(() => {
    // Any additional scroll-based logic can go here
}, 10));
