/**
 * PILLARS INTERACTIVE GALLERY
 * Motor de cambio dinámico de imágenes - Compatible con Desktop (hover) y Móvil (tap)
 */

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.pillar-link');
    const images = document.querySelectorAll('.p-img');

    // Función unificada para activar un pilar
    function setActivePillar(index) {
        // 1. Resetear todos
        links.forEach(l => l.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));

        // 2. Activar el seleccionado
        if (links[index]) links[index].classList.add('active');
        if (images[index]) images[index].classList.add('active');
    }

    links.forEach(link => {
        // --- EVENTO 1: MOUSE (Desktop Hover) ---
        link.addEventListener('mouseenter', () => {
            // Solo activar en hover si es pantalla grande (opcional)
            if (window.innerWidth >= 1024) {
                const index = link.getAttribute('data-index');
                setActivePillar(index);
            }
        });

        // --- EVENTO 2: CLICK / TAP (Móvil y Desktop) ---
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte al #hash
            const index = link.getAttribute('data-index');
            setActivePillar(index);
        });
    });
});
