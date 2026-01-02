/**
 * APPLE EXPERIENCE LOGIC (Master Version)
 * Minimalist, Data-Attribute Driven.
 */

// LÓGICA MINIMALISTA
const modal = document.getElementById('faceModal');

// Elementos del Modal
const fTitle = document.getElementById('f-title');
const fContext = document.getElementById('f-context');
const fInnovation = document.getElementById('f-innovation');
const fFace = document.getElementById('f-face');

function openFaceModal(element) {
    // 0. Safety Check
    if (!modal) {
        console.error('Modal element #faceModal not found');
        return;
    }

    // 1. Extraer datos del HTML del elemento clickeado
    const data = element.dataset;

    // 2. Rellenar el Modal
    fTitle.innerText = data.title || 'SIN TÍTULO';
    fContext.innerText = data.context || '...';
    fInnovation.innerText = data.innovation || '...';
    fFace.innerText = data.face || '...';

    // 3. Mostrar Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquear scroll de fondo
}

function closeFaceModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
}

// Navigation Arrow Function (Desktop) - Updated to support multiple reels
function scrollAppleReel(direction, sectionId = null) {
    // If sectionId provided, target that specific section's reel
    // Otherwise default to first reel for backward compatibility
    let reel;
    if (sectionId) {
        const section = document.getElementById(sectionId);
        reel = section ? section.querySelector('.apple-reel') : null;
    } else {
        reel = document.querySelector('.apple-reel');
    }

    if (!reel) return;

    const cardWidth = 380 + 8; // Updated card width + gap (8px)
    const scrollAmount = cardWidth * 3; // Scroll 3 cards at a time

    if (direction === 'next') {
        reel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        reel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}

// Inicialización de Listeners cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cerrar al tocar fuera
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeFaceModal();
        });
    }

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeFaceModal();
    });

    // Initialize pagination
    initPagination();

    // Initialize programs pagination if exists
    initProgramsPagination();

    // Initialize Video Hover
    initVideoHover();
});

// Pagination Logic - Updated to support multiple reels
function initPagination() {
    // Initialize pagination for Mindset section (apple-experience)
    const mindsetSection = document.getElementById('apple-experience');
    if (mindsetSection) {
        const reel = mindsetSection.querySelector('.apple-reel');
        const cards = mindsetSection.querySelectorAll('.apple-card');
        const dotsContainer = document.getElementById('apple-dots');

        if (reel && cards.length && dotsContainer) {
            // Create dots
            cards.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = 'pagination-dot';
                if (index === 0) dot.classList.add('active');
                dot.onclick = () => scrollToCard(index, 'apple-experience');
                dotsContainer.appendChild(dot);
            });

            // Update active dot on scroll
            reel.addEventListener('scroll', () => updateActiveDot('apple-experience'));
        }
    }
}

function scrollToCard(index, sectionId = null) {
    let reel, cards;

    if (sectionId) {
        const section = document.getElementById(sectionId);
        reel = section ? section.querySelector('.apple-reel') : null;
        cards = section ? section.querySelectorAll('.apple-card') : [];
    } else {
        reel = document.querySelector('.apple-reel');
        cards = document.querySelectorAll('.apple-card');
    }

    if (!reel || !cards[index]) return;

    const cardWidth = cards[index].offsetWidth;
    const gap = 8;
    const scrollPosition = index * (cardWidth + gap);

    reel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

function updateActiveDot(sectionId = null) {
    let reel, cards, dots;

    if (sectionId) {
        const section = document.getElementById(sectionId);
        reel = section ? section.querySelector('.apple-reel') : null;

        // Get the correct cards based on section
        if (sectionId === 'programs-showcase') {
            cards = section ? section.querySelectorAll('.program-card') : [];
        } else {
            cards = section ? section.querySelectorAll('.apple-card') : [];
        }

        // Get dots from the section's specific pagination container
        const dotsContainer = sectionId === 'apple-experience' ?
            document.getElementById('apple-dots') :
            document.getElementById('programs-dots');
        dots = dotsContainer ? dotsContainer.querySelectorAll('.pagination-dot') : [];
    } else {
        reel = document.querySelector('.apple-reel');
        cards = document.querySelectorAll('.apple-card');
        dots = document.querySelectorAll('.pagination-dot');
    }

    if (!reel || !cards.length || !dots.length) return;

    const scrollLeft = reel.scrollLeft;
    const cardWidth = cards[0].offsetWidth;
    const gap = 8;
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap));

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// Programs Pagination (Separate instance)
function initProgramsPagination() {
    const programsSection = document.getElementById('programs-showcase');
    if (!programsSection) return;

    const dotsContainer = document.getElementById('programs-dots');
    if (!dotsContainer) return;

    const reel = programsSection.querySelector('.apple-reel');
    const programCards = programsSection.querySelectorAll('.program-card');

    // Create dots for programs
    programCards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'pagination-dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => scrollToProgram(index);
        dotsContainer.appendChild(dot);
    });

    // Add scroll listener to update active dot
    if (reel) {
        reel.addEventListener('scroll', () => updateActiveDot('programs-showcase'));
    }
}

function scrollToProgram(index) {
    const reel = document.querySelector('#programs-showcase .apple-reel');
    const cards = document.querySelectorAll('.program-card');

    if (!reel || !cards[index]) return;

    const cardWidth = cards[index].offsetWidth;
    const gap = 8; // Updated to match CSS
    const scrollPosition = index * (cardWidth + gap);

    reel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

// Video Hover Logic (Desktop Only)
function initVideoHover() {
    const card = document.getElementById('card-innova');
    const video = document.getElementById('video-innova');

    if (!card || !video) return;

    // Play on Hover (Desktop Only)
    card.addEventListener('mouseenter', () => {
        // Check if desktop (min-width: 992px)
        if (window.matchMedia('(min-width: 992px)').matches) {
            video.play().catch(e => console.log('Video play interrupted', e));
        }
    });

    // Pause on Leave
    card.addEventListener('mouseleave', () => {
        video.pause();
        // Optional: Reset to start?
        // video.currentTime = 0; 
    });
}
