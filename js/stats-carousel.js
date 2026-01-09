/* --- TECH STATS CAROUSEL --- */
class StatsCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.cards = Array.from(document.querySelectorAll('.tech-stat-card'));
        this.dots = Array.from(document.querySelectorAll('.dot'));
        this.prevBtn = document.querySelector('.carousel-nav.prev');
        this.nextBtn = document.querySelector('.carousel-nav.next');

        this.currentIndex = 0;
        this.cardWidth = 320; // Ancho base de tarjeta
        this.gap = 30; // Espacio entre tarjetas
        this.autoRotateInterval = null;
        this.isHovered = false;

        // Configuración inicial
        this.init();
    }

    init() {
        // Listeners Botones
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => { this.stopAutoRotate(); this.prev(); });
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => { this.stopAutoRotate(); this.next(); });

        // Listeners Puntos
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => { this.stopAutoRotate(); this.goTo(index); });
        });

        // Pause on Hover
        this.track.addEventListener('mouseenter', () => { this.isHovered = true; this.stopAutoRotate(); });
        this.track.addEventListener('mouseleave', () => { this.isHovered = false; this.startAutoRotate(); });

        // Touch Swipe (Móvil)
        this.initTouch();

        // Iniciar
        this.updateDimensions(); // Ajustar anchos
        window.addEventListener('resize', () => this.updateDimensions());
        this.startAutoRotate();
        this.updateCarousel();
    }

    updateDimensions() {
        // Read actual width from DOM for perfect alignment
        const firstCard = this.cards[0];
        if (firstCard) {
            this.cardWidth = firstCard.offsetWidth;
        }

        // Recalculate gap based on screen size
        if (window.innerWidth <= 900) {
            this.gap = 20;
        } else {
            this.gap = 30;
        }
        this.updateCarousel();
    }

    goTo(index) {
        this.currentIndex = index;
        if (this.currentIndex < 0) this.currentIndex = this.cards.length - 1;
        if (this.currentIndex >= this.cards.length) this.currentIndex = 0;
        this.updateCarousel();
    }

    next() { this.goTo(this.currentIndex + 1); }
    prev() { this.goTo(this.currentIndex - 1); }

    updateCarousel() {
        // 1. Obtener el ancho del contenedor visible (la ventana del carrusel)
        const containerWrapper = document.querySelector('.carousel-track-wrapper');
        if (!containerWrapper) return;
        const containerWidth = containerWrapper.offsetWidth;

        // 2. Obtener el ancho de una tarjeta (incluyendo gap si es necesario)
        // Usamos la primera tarjeta como referencia
        const cardElement = this.cards[0];
        if (!cardElement) return;

        // Ancho real + margen (gap)
        const cardWidth = cardElement.offsetWidth;
        // Asumimos gap de 30px desktop / 20px mobile según CSS
        const gap = window.innerWidth <= 768 ? 20 : 30;

        const itemFullWidth = cardWidth + gap;

        // 3. Calcular la posición para que la tarjeta activa quede CENTRADA
        // Fórmula: (AnchoContenedor / 2) - (AnchoTarjeta / 2) - (PosiciónTarjeta * AnchoTotalItem)
        const centerOffset = (containerWidth / 2) - (cardWidth / 2);
        const moveAmount = (this.currentIndex * itemFullWidth) - centerOffset;

        // Aplicar transformación
        this.track.style.transform = `translateX(${-moveAmount}px)`;

        // Actualizar clases Active
        this.cards.forEach((card, index) => {
            if (index === this.currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Actualizar Dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => {
            if (!this.isHovered) this.next();
        }, 4000); // 4 segundos
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) clearInterval(this.autoRotateInterval);
    }

    initTouch() {
        let startX = 0;
        let endX = 0;
        this.track.addEventListener('touchstart', e => { startX = e.changedTouches[0].screenX; this.stopAutoRotate(); }, { passive: true });
        this.track.addEventListener('touchend', e => {
            endX = e.changedTouches[0].screenX;
            if (startX - endX > 50) this.next(); // Swipe Left
            if (endX - startX > 50) this.prev(); // Swipe Right
            this.startAutoRotate();
        }, { passive: true });
    }
}

// Inicializar globalmente para poder usar onclick en HTML
let statsCarousel;
document.addEventListener('DOMContentLoaded', () => {
    statsCarousel = new StatsCarousel();
});
