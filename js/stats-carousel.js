document.addEventListener('DOMContentLoaded', () => {
    class StatsCarousel {
        constructor() {
            this.track = document.querySelector('.carousel-track');
            this.cards = Array.from(document.querySelectorAll('.evidence-card'));
            this.dots = Array.from(document.querySelectorAll('.dot'));
            this.wrapper = document.querySelector('.stats-carousel-wrapper');
            this.prevBtn = document.querySelector('.carousel-nav.prev');
            this.nextBtn = document.querySelector('.carousel-nav.next');

            // Iniciar en la tarjeta activa o la 0
            const activeIndex = this.cards.findIndex(c => c.classList.contains('active'));
            this.currentIndex = activeIndex > -1 ? activeIndex : 0;

            if (this.cards.length > 0) this.init();
        }

        init() {
            // Event Listeners para flechas
            if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
            if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
            this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.goTo(index)));

            // Lógica Swipe (Táctil)
            let startX = 0;
            this.track.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
            this.track.addEventListener('touchend', e => {
                const diff = startX - e.changedTouches[0].screenX;
                if (diff > 50) this.next();
                if (diff < -50) this.prev();
            }, { passive: true });

            // Recalcular al cambiar tamaño de pantalla
            window.addEventListener('resize', () => this.updateCarousel());

            // --- CALIBRACIÓN INICIAL ---
            // Ejecutamos varias veces para asegurar que cargaron las fuentes y estilos
            this.updateCarousel();
            window.addEventListener('load', () => this.updateCarousel());
            setTimeout(() => this.updateCarousel(), 100);
            setTimeout(() => this.updateCarousel(), 500);
        }

        goTo(index) {
            // Loop infinito
            if (index < 0) index = this.cards.length - 1;
            if (index >= this.cards.length) index = 0;

            this.currentIndex = index;
            this.updateCarousel();
        }
        next() { this.goTo(this.currentIndex + 1); }
        prev() { this.goTo(this.currentIndex - 1); }

        updateCarousel() {
            if (!this.wrapper || this.cards.length === 0) return;

            // 1. MEDICIÓN REAL (No adivinamos)
            const containerWidth = this.wrapper.offsetWidth;
            const cardWidth = this.cards[0].offsetWidth; // Medimos la tarjeta real

            // Obtenemos el GAP real del CSS (si es 20px, 30px, etc)
            const trackStyle = window.getComputedStyle(this.track);
            const gap = parseFloat(trackStyle.gap) || 20;

            // 2. CÁLCULO DEL CENTRO
            // Distancia desde el inicio del track hasta la tarjeta actual
            const currentCardPosition = this.currentIndex * (cardWidth + gap);

            // Espacio sobrante a los lados para que quede centrada
            const centerOffset = (containerWidth / 2) - (cardWidth / 2);

            // Movimiento final
            const translate = centerOffset - currentCardPosition;

            // Aplicar movimiento
            this.track.style.transform = `translateX(${translate}px)`;

            // Actualizar Clases (Active)
            this.cards.forEach((c, i) => c.classList.toggle('active', i === this.currentIndex));
            this.dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
        }
    }

    new StatsCarousel();
});
