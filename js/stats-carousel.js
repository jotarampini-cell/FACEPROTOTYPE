document.addEventListener('DOMContentLoaded', () => {

    const track = document.getElementById('statsTrack');
    const cards = Array.from(document.querySelectorAll('.stat-card'));
    const dots = Array.from(document.querySelectorAll('.stat-dot')); // Seleccionamos los puntos
    const prevBtn = document.querySelector('.stats-nav.prev');
    const nextBtn = document.querySelector('.stats-nav.next');
    const wrapper = document.querySelector('.stats-carousel-wrapper');

    let currentIndex = 0;

    // Si no hay elementos, salir para evitar errores
    if (!track || cards.length === 0) return;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 40;

        // El movimiento es: Indice * (Ancho + Espacio)
        const itemFullWidth = cardWidth + gap;
        const moveAmount = currentIndex * itemFullWidth;

        // Movemos el track
        track.style.transform = `translateX(-${moveAmount}px)`;

        // Actualizamos clases ACTIVE (Tarjetas y Puntos)
        cards.forEach((c, i) => c.classList.toggle('active', i === currentIndex));
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    function next() {
        // Loop infinito: si llega al final, vuelve al 0
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prev() {
        // Loop infinito hacia atrás
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    // --- EVENT LISTENERS ---

    // 1. Flechas (Click)
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    // 2. Puntos (Click)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // 3. Swipe Táctil (Móvil)
    let startX = 0;
    if (wrapper) {
        wrapper.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
        wrapper.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].screenX;
            const diff = startX - endX;

            // Si el deslizamiento es mayor a 50px
            if (diff > 50) next();     // Deslizó a la izquierda -> Siguiente
            if (diff < -50) prev();    // Deslizó a la derecha -> Anterior
        }, { passive: true });
    }

    // Inicializar
    setTimeout(updateCarousel, 100);
    window.addEventListener('resize', updateCarousel);
});
