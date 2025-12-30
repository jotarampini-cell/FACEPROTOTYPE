/**
 * Standalone Accordion Logic for 11 Principles
 * Guarantees functionality independent of main script.js
 */
console.log("Loading Accordion Logic...");

window.toggleCard = function (card) {
    if (!card) return;

    // Toggle current
    card.classList.toggle('active');

    // Optional: Log for debugging
    console.log("Toggled card:", card.querySelector('.card-title')?.innerText);
};

// Auto-init: Ensure first card is open for better UX
document.addEventListener('DOMContentLoaded', () => {
    const firstCard = document.querySelector('.manifesto-card');
    // Only if none are active
    if (firstCard && !document.querySelector('.manifesto-card.active')) {
        firstCard.classList.add('active');
    }
});
