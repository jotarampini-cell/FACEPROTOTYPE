document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('statsTrack');
    const cards = Array.from(document.querySelectorAll('.stat-card'));
    const dotsContainer = document.querySelector('.stats-dots');
    const prevBtn = document.querySelector('.stats-nav.prev');
    const nextBtn = document.querySelector('.stats-nav.next');
    const wrapper = document.querySelector('.stats-carousel-wrapper');

    // Generar dots dinámicamente
    if (dotsContainer && dotsContainer.children.length < cards.length) {
        dotsContainer.innerHTML = '';
        cards.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = i === 0 ? 'stat-dot active' : 'stat-dot';
            dotsContainer.appendChild(btn);
        });
    }
    const dots = Array.from(document.querySelectorAll('.stat-dot'));

    let currentIndex = 0;

    if (!track || cards.length === 0) return;

    function updateCarousel() {
        // 1. Encontrar el centro del contenedor (la pantalla visible)
        const wrapperCenter = wrapper.offsetWidth / 2;

        // 2. Encontrar la tarjeta activa
        const activeCard = cards[currentIndex];

        // 3. Encontrar el centro de la tarjeta activa (su posición izquierda + mitad de su ancho)
        // offsetLeft nos dice exactamente dónde está la tarjeta dentro del track
        const cardCenter = activeCard.offsetLeft + (activeCard.offsetWidth / 2);

        // 4. Calcular el movimiento exacto
        // Queremos que el cardCenter coincida con wrapperCenter
        const moveAmount = wrapperCenter - cardCenter;

        // Aplicamos el movimiento (sin signo negativo forzado, la resta nos da el signo correcto)
        track.style.transform = `translateX(${moveAmount}px)`;

        // Clases Activas
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

    // Swipe Logic (Mejorada)
    let startX = 0;
    if (wrapper) {
        wrapper.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
        wrapper.addEventListener('touchend', e => {
            const diff = startX - e.changedTouches[0].screenX;
            if (diff > 40) next(); // Sensibilidad ajustada
            if (diff < -40) prev();
        }, { passive: true });
    }

    // Inicializar (Esperamos un poco más para asegurar renderizado móvil)
    setTimeout(updateCarousel, 100);
    window.addEventListener('resize', updateCarousel);
});
