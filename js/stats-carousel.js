document.addEventListener('DOMContentLoaded', () => {
    class StatsCarousel {
        constructor() {
            this.track = document.querySelector('.carousel-track');
            this.cards = Array.from(document.querySelectorAll('.evidence-card'));
            this.dots = Array.from(document.querySelectorAll('.dot'));
            this.wrapper = document.querySelector('.stats-carousel-wrapper');
            this.prevBtn = document.querySelector('.carousel-nav.prev');
            this.nextBtn = document.querySelector('.carousel-nav.next');

            this.currentIndex = 0;

            // Si ya hay una clase 'active' en el HTML, comenzamos ahí
            const activeInDom = this.cards.findIndex(c => c.classList.contains('active'));
            if (activeInDom > -1) this.currentIndex = activeInDom;

            if (this.cards.length > 0) this.init();
        }

        init() {
            // Click Events
            if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
            if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
            this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.goTo(index)));

            // Touch / Swipe Logic
            let startX = 0;
            this.wrapper.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
            this.wrapper.addEventListener('touchend', e => {
                const diff = startX - e.changedTouches[0].screenX;
                if (diff > 50) this.next();
                if (diff < -50) this.prev();
            }, { passive: true });

            // Responsive Resize
            window.addEventListener('resize', () => this.updateCarousel());

            // Inicialización retardada para asegurar carga de estilos
            setTimeout(() => this.updateCarousel(), 50);
        }

        goTo(index) {
            // Lógica circular infinita
            if (index < 0) index = this.cards.length - 1;
            if (index >= this.cards.length) index = 0;

            this.currentIndex = index;
            this.updateCarousel();
        }

        next() { this.goTo(this.currentIndex + 1); }
        prev() { this.goTo(this.currentIndex - 1); }

        updateCarousel() {
            if (!this.wrapper || !this.cards.length) return;

            // 1. Obtener dimensiones reales
            const cardWidth = this.cards[0].offsetWidth;
            const style = window.getComputedStyle(this.track);
            const gap = parseFloat(style.gap) || 0;

            // 2. CALCULAR DESPLAZAMIENTO
            // Como usamos padding-left: 50vw en CSS para poner el inicio en el centro,
            // solo necesitamos movernos a la izquierda la suma de las tarjetas anteriores.
            const moveAmount = this.currentIndex * (cardWidth + gap);

            // 3. Aplicar
            this.track.style.transform = `translateX(-${moveAmount}px)`;

            // 4. Clases Activas (Estilo visual)
            this.cards.forEach((c, i) => c.classList.toggle('active', i === this.currentIndex));
            this.dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
        }
    }

    new StatsCarousel();
});
