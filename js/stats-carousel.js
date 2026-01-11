
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('statsTrack');
    const cards = Array.from(document.querySelectorAll('.stat-card'));
    const dotsContainer = document.querySelector('.stats-dots');
    const prevBtn = document.querySelector('.stats-nav.prev');
    const nextBtn = document.querySelector('.stats-nav.next');

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
        // 1. Obtener ancho base de la tarjeta (incluye padding y border)
        const cardWidth = cards[0].offsetWidth;

        // 2. Obtener márgenes computados (ya que reemplazamos el gap por margin)
        const style = window.getComputedStyle(cards[0]);
        const marginLeft = parseFloat(style.marginLeft) || 0;
        const marginRight = parseFloat(style.marginRight) || 0;

        // Ancho total que ocupa un elemento en el track
        const fullItemWidth = cardWidth + marginLeft + marginRight;

        // 3. CÁLCULO DE CENTRADO
        // Como tenemos padding-left: 50% en el track, el punto "0" es el centro de pantalla.
        // Debemos restar la mitad de la tarjeta activa (cardWidth/2)
        // Y restar todo el espacio de las tarjetas anteriores.

        // Nota: Agregamos marginLeft a la mitad para centrar visualmente incluyendo el espacio
        const centerOffset = (cardWidth / 2) + marginLeft;
        const previousItemsWidth = currentIndex * fullItemWidth;

        const moveAmount = previousItemsWidth + centerOffset;

        track.style.transform = `translateX(-${moveAmount}px)`;

        // Actualizar Activos (Esto dispara la animación CSS de escala)
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

    // Swipe Support
    let startX = 0;
    if (track.parentElement) {
        track.parentElement.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, { passive: true });
        track.parentElement.addEventListener('touchend', e => {
            const diff = startX - e.changedTouches[0].screenX;
            if (diff > 50) next();
            if (diff < -50) prev();
        }, { passive: true });
    }

    // Inicializar
    setTimeout(updateCarousel, 100);
    window.addEventListener('resize', updateCarousel);
});
