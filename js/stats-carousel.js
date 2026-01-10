
document.addEventListener('DOMContentLoaded', () => {
    class StatsCarousel {
        constructor() {
            this.track = document.querySelector('.carousel-track');
            this.cards = Array.from(document.querySelectorAll('.apple-stat-card'));
            this.dots = Array.from(document.querySelectorAll('.dot'));
            this.wrapper = document.querySelector('.stats-carousel-wrapper');
            this.prevBtn = document.querySelector('.carousel-nav.prev');
            this.nextBtn = document.querySelector('.carousel-nav.next');

            // Iniciar en la tarjeta 0 o la que tenga 'active'
            const activeIndex = this.cards.findIndex(c => c.classList.contains('active'));
            this.currentIndex = activeIndex > -1 ? activeIndex : 0;

            if (this.cards.length > 0) this.init();
        }

        init() {
            if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
            if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
            this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.goTo(index)));

            // Swipe Logic
            let startX = 0;
            this.track.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
            this.track.addEventListener('touchend', e => {
                const diff = startX - e.changedTouches[0].screenX;
                if (diff > 50) this.next(); // Deslizar izquierda -> Siguiente
                if (diff < -50) this.prev(); // Deslizar derecha -> Anterior
            }, { passive: true });

            window.addEventListener('resize', () => this.updateCarousel());

            // TRUCO: Forzar actualización varias veces al cargar para asegurar centrado
            this.updateCarousel();
            setTimeout(() => this.updateCarousel(), 100);
            setTimeout(() => this.updateCarousel(), 500);
        }

        goTo(index) {
            // Loop infinito lógico
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

            // Dimensiones fijas según CSS
            const cardWidth = isMobile ? 280 : 290;
            const gap = 20;

            // MATEMÁTICA DE CENTRADO:
            // Posición de la tarjeta actual (sumando anchos y gaps anteriores)
            const cardPosition = this.currentIndex * (cardWidth + gap);

            // Espacio libre a la izquierda para que quede centrada:
            // (Ancho Pantalla / 2) - (Mitad de Tarjeta)
            const centerOffset = (containerWidth / 2) - (cardWidth / 2);

            // Movimiento final
            const translate = centerOffset - cardPosition;

            this.track.style.transform = `translateX(${translate}px)`;

            // Actualizar clases
            this.cards.forEach((c, i) => c.classList.toggle('active', i === this.currentIndex));
            this.dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
        }
    }

    new StatsCarousel();
});
