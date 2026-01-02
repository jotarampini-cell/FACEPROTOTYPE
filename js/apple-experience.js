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

// Navigation Arrow Function (Desktop)
function scrollAppleReel(direction) {
    const reel = document.querySelector('.apple-reel');
    if (!reel) return;

    const cardWidth = 280 + 20; // Card width + gap
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
});

// Pagination Logic
function initPagination() {
    const reel = document.querySelector('.apple-reel');
    const cards = document.querySelectorAll('.apple-card');
    const dotsContainer = document.getElementById('apple-dots');

    if (!reel || !cards.length || !dotsContainer) return;

    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'pagination-dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => scrollToCard(index);
        dotsContainer.appendChild(dot);
    });

    // Update active dot on scroll
    reel.addEventListener('scroll', updateActiveDot);
}

function scrollToCard(index) {
    const reel = document.querySelector('.apple-reel');
    const cards = document.querySelectorAll('.apple-card');

    if (!reel || !cards[index]) return;

    const cardWidth = cards[index].offsetWidth;
    const gap = 20;
    const scrollPosition = index * (cardWidth + gap);

    reel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

function updateActiveDot() {
    const reel = document.querySelector('.apple-reel');
    const cards = document.querySelectorAll('.apple-card');
    const dots = document.querySelectorAll('.pagination-dot');

    if (!reel || !cards.length || !dots.length) return;

    const scrollLeft = reel.scrollLeft;
    const cardWidth = cards[0].offsetWidth;
    const gap = 20;
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap));

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}
