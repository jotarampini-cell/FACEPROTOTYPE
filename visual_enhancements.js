
// === ANIMACIÓN DE ENTRADA DRAMÁTICA ===
const observerOptions = {
    threshold: 0.2
};

const galaxySection = document.getElementById('galaxy-section');

const galaxyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.star-card');
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('revealed');
                }, i * 50); // Aparecen escalonadas (50ms entre cada una)
            });
            galaxyObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (galaxySection) {
    galaxyObserver.observe(galaxySection);
}
