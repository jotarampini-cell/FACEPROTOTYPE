document.addEventListener('DOMContentLoaded', () => {
    class StatsCarousel {
        constructor() {
            this.track = document.querySelector('.carousel-track');
            // SELECCIONAR CLASE CORRECTA
            this.cards = Array.from(document.querySelectorAll('.evidence-card'));
            this.dots = Array.from(document.querySelectorAll('.dot'));
            this.wrapper = document.querySelector('.stats-carousel-wrapper');
            this.prevBtn = document.querySelector('.carousel-nav.prev');
            this.nextBtn = document.querySelector('.carousel-nav.next');

            const activeInDom = this.cards.findIndex(card => card.classList.contains('active'));
            this.currentIndex = activeInDom !== -1 ? activeInDom : 0;

            if (this.cards.length > 0) this.init();
        }

        init() {
            if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
            if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
            this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.goTo(index)));

            let startX = 0;
            this.track.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
            this.track.addEventListener('touchend', e => {
                const diff = startX - e.changedTouches[0].screenX;
                if (diff > 50) this.next();
                if (diff < -50) this.prev();
            }, { passive: true });

            window.addEventListener('resize', () => this.updateCarousel());

            this.updateCarousel();
            setTimeout(() => this.updateCarousel(), 200);
        }

        goTo(index) {
            if (index < 0) index = this.cards.length - 1;
            if (index >= this.cards.length) index = 0;
            this.currentIndex = index;
            this.updateCarousel();
        }
        next() { this.goTo(this.currentIndex + 1); }
        prev() { this.goTo(this.currentIndex - 1); }

        updateCarousel() {
            if (!this.wrapper) return;
            const containerWidth = this.wrapper.offsetWidth;
            const isMobile = window.innerWidth <= 900;
            const cardWidth = isMobile ? 280 : 290;
            const gap = 20;

            const activeCardPosition = this.currentIndex * (cardWidth + gap);
            const centerOffset = (containerWidth / 2) - (cardWidth / 2);
            const translateValue = centerOffset - activeCardPosition;

            this.track.style.transform = `translateX(${translateValue}px)`;

            this.cards.forEach((c, i) => c.classList.toggle('active', i === this.currentIndex));
            this.dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
        }
    }
    new StatsCarousel();
});
