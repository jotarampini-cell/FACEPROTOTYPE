document.addEventListener('DOMContentLoaded', () => {

    const track = document.getElementById('statsTrack');
    const cards = Array.from(document.querySelectorAll('.stat-card'));
    const dotsContainer = document.querySelector('.stats-dots');
    const prevBtn = document.querySelector('.stats-nav.prev');
    const nextBtn = document.querySelector('.stats-nav.next');
    const wrapper = document.querySelector('.stats-carousel-wrapper');

    // Generar dots dinámicamente si faltan (para las 14 tarjetas)
    if (dotsContainer && dotsContainer.children.length < cards.length) {
        dotsContainer.innerHTML = ''; // Limpiar
        cards.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = i === 0 ? 'stat-dot active' : 'stat-dot';
            btn.setAttribute('aria-label', `Ir a slide ${i + 1}`);
            dotsContainer.appendChild(btn);
        });
    }
    const dots = Array.from(document.querySelectorAll('.stat-dot'));

    let currentIndex = 0;
    if (!track || cards.length === 0) return;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 40;

        // CÁLCULO DE CENTRADO DINÁMICO
        // Queremos que el centro de la tarjeta activa esté en el centro de la pantalla.
        // CSS tiene padding-left: 50%.
        // Debemos restar: (mitad de la tarjeta) + (todas las tarjetas anteriores + gaps)

        const centerOffset = cardWidth / 2;
        const previousItemsWidth = currentIndex * (cardWidth + gap);

        const moveAmount = previousItemsWidth + centerOffset;

        // Aplicamos transform (más fluido que margin)
        track.style.marginLeft = '0'; // Reset margin
        track.style.transform = `translateX(-${moveAmount}px)`;

        // Actualizar Activos
        cards.forEach((c, i) => c.classList.toggle('active', i === currentIndex));
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    function next() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    // Listeners
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Touch Swipe
    let startX = 0;
    if (wrapper) {
        wrapper.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
        wrapper.addEventListener('touchend', e => {
            const diff = startX - e.changedTouches[0].screenX;
            if (diff > 50) next();
            if (diff < -50) prev();
        }, { passive: true });
    }

    // Inicializar
    setTimeout(updateCarousel, 100);
    window.addEventListener('resize', updateCarousel);
});
