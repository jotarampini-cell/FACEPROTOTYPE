document.addEventListener('DOMContentLoaded', () => {

    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Ajusta la velocidad (menor es más lento)

    // Función de Animación
    const animateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // El incremento es dinámico para efecto "frenado"
        const inc = target / speed;

        if (count < target) {
            // Sumamos y formateamos para quitar decimales feos mientras sube
            counter.innerText = Math.ceil(count + inc);

            // Llamamos a la función de nuevo súper rápido
            setTimeout(() => animateCount(counter), 20);
        } else {
            // Aseguramos que termine en el número exacto
            counter.innerText = target;
        }
    };

    // OBSERVER: Solo activa la animación cuando el usuario ve la sección
    const observerOptions = {
        root: null,
        threshold: 0.5 // Se activa cuando el 50% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCount(counter);
                observer.unobserve(counter); // Ya no observar para que no se repita
            }
        });
    }, observerOptions);

    // Conectar el observador a cada contador
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
