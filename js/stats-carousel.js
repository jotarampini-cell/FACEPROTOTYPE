

class StatsCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.cards = Array.from(document.querySelectorAll('.elite-stat-card'));
        this.dots = Array.from(document.querySelectorAll('.dot'));
        this.wrapper = document.querySelector('.stats-carousel-wrapper'); // Contenedor padre
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

        // Touch Swipe
        let startX = 0;
        this.track.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
        this.track.addEventListener('touchend', e => {
            if (startX - e.changedTouches[0].screenX > 50) this.next();
            if (e.changedTouches[0].screenX - startX > 50) this.prev();
        }, { passive: true });

        window.addEventListener('resize', () => this.updateCarousel());

        // Esperamos un tick para asegurar que el DOM cargó tamaños
        setTimeout(() => this.updateCarousel(), 50);
    }

    goTo(index) {
        this.currentIndex = (index + this.cards.length) % this.cards.length;
        this.updateCarousel();
    }
    next() { this.goTo(this.currentIndex + 1); }
    prev() { this.goTo(this.currentIndex - 1); }

    updateCarousel() {
        // 1. Obtener ancho del contenedor visible (Pantalla)
        const containerWidth = this.wrapper.offsetWidth;

        const isMobile = window.innerWidth <= 900;
        // Coincidir EXACTO con CSS:
        const cardWidth = isMobile ? 280 : 320;
        const gap = 30;

        // 2. Calcular la posición física de la tarjeta activa (desde el inicio del track)
        const activeCardPosition = this.currentIndex * (cardWidth + gap);

        // 3. Calcular el "Offset" para centrar
        // Queremos que: (PosiciónTrack + PosiciónTarjeta) = (CentroPantalla - MitadTarjeta)
        const centerOffset = (containerWidth / 2) - (cardWidth / 2);

        // 4. Mover el track
        // Track = CentroDeseado - PosiciónRealTarjeta
        const translateValue = centerOffset - activeCardPosition;

        this.track.style.transform = `translateX(${translateValue}px)`;

        // Clases Activas
        this.cards.forEach((c, i) => c.classList.toggle('active', i === this.currentIndex));
        this.dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
    }
}

document.addEventListener('DOMContentLoaded', () => new StatsCarousel());
