
class StatsCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.cards = Array.from(document.querySelectorAll('.tech-stat-card'));
        this.dots = Array.from(document.querySelectorAll('.dot'));
        this.prevBtn = document.querySelector('.carousel-nav.prev');
        this.nextBtn = document.querySelector('.carousel-nav.next');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });
        this.initTouch();
        window.addEventListener('resize', () => this.updateCarousel());
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
        const isMobile = window.innerWidth <= 900;
        const cardWidth = isMobile ? 280 : 320;
        const gap = 40;
        const itemFullWidth = cardWidth + gap;
        const moveAmount = (this.currentIndex * itemFullWidth) + (cardWidth / 2);

        this.track.style.transform = `translateX(calc(-${moveAmount}px))`;

        this.cards.forEach((card, index) => card.classList.toggle('active', index === this.currentIndex));
        this.dots.forEach((dot, index) => dot.classList.toggle('active', index === this.currentIndex));
    }

    initTouch() {
        let startX = 0;
        let endX = 0;
        this.track.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
        this.track.addEventListener('touchend', e => {
            endX = e.changedTouches[0].screenX;
            if (startX - endX > 50) this.next();
            if (endX - startX > 50) this.prev();
        }, { passive: true });
    }
}
document.addEventListener('DOMContentLoaded', () => { new StatsCarousel(); });
