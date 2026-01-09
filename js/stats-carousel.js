
class StatsCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        // Usamos el selector de la nueva tarjeta
        this.cards = Array.from(document.querySelectorAll('.gradient-stat-card'));
        this.dots = Array.from(document.querySelectorAll('.dot'));
        this.prevBtn = document.querySelector('.carousel-nav.prev');
        this.nextBtn = document.querySelector('.carousel-nav.next');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.goTo(index)));

        let startX = 0;
        this.track.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
        this.track.addEventListener('touchend', e => {
            if (startX - e.changedTouches[0].screenX > 50) this.next();
            if (e.changedTouches[0].screenX - startX > 50) this.prev();
        }, { passive: true });

        window.addEventListener('resize', () => this.updateCarousel());
        this.updateCarousel();
    }

    goTo(index) {
        this.currentIndex = (index + this.cards.length) % this.cards.length;
        this.updateCarousel();
    }
    next() { this.goTo(this.currentIndex + 1); }
    prev() { this.goTo(this.currentIndex - 1); }

    updateCarousel() {
        const isMobile = window.innerWidth <= 900;
        // Coincidir con el ancho CSS (Mobile: 260px, Desktop: 300px)
        const cardWidth = isMobile ? 260 : 300;
        const gap = 30;

        const moveAmount = (this.currentIndex * (cardWidth + gap)) + (cardWidth / 2);
        this.track.style.transform = `translateX(calc(-${moveAmount}px))`;

        this.cards.forEach((c, i) => c.classList.toggle('active', i === this.currentIndex));
        this.dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
    }
}
document.addEventListener('DOMContentLoaded', () => new StatsCarousel());
