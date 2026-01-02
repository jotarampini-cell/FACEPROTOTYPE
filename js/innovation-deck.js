/**
 * INNOVATION MINDSET DECK LOGIC
 * Renders the "Tinder-like" cards from the galaxyIdeas array.
 */

document.addEventListener('DOMContentLoaded', () => {
    initDeck();
});

function initDeck() {
    const container = document.getElementById('innovation-deck-container');

    if (!container) {
        console.error('Deck container not found!');
        return;
    }

    // Check if galaxyIdeas is loaded
    if (typeof galaxyIdeas === 'undefined') {
        console.error('galaxyIdeas data is missing. Ensure improved_messages.js is loaded.');
        return;
    }

    // Clear existing
    container.innerHTML = '';

    // Render Cards
    galaxyIdeas.forEach((idea, index) => {
        const card = createCard(idea, index);
        container.appendChild(card);
    });
}

function createCard(idea, index) {
    // Determine icon based on index (just for visual variety)
    const iconType = index % 3 === 0 ? 'bulb' : (index % 3 === 1 ? 'rocket' : 'spark');
    const iconSvg = getIconSvg(iconType);

    const card = document.createElement('div');
    card.className = 'mindset-card';
    card.setAttribute('data-index', index);

    // Accessibility
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Revelar idea: ${idea.t}`);

    card.innerHTML = `
        <div class="card-inner">
            <!-- FRONT -->
            <div class="card-front">
                <div class="card-icon-glow">
                    ${iconSvg}
                </div>
                <h3 class="card-title-front">${idea.t}</h3>
                <div class="card-tap-hint">
                    <span>Toca para revelar</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z"/></svg>
                </div>
            </div>

            <!-- BACK -->
            <div class="card-back">
                <div class="back-badge">Caso de Estudio</div>
                
                <div class="back-context">
                    <strong>Contexto:</strong> ${idea.context}
                </div>
                
                <div class="back-adaptation">
                    <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 15px;">
                        <strong style="color: #fff;">Adaptación:</strong> ${idea.adaptation}
                    </p>
                </div>

                <div class="back-impact">
                    ${idea.impact}
                </div>

                <div class="back-lesson">
                    "${idea.lesson}"
                </div>
            </div>
        </div>
    `;

    // Interaction: Flip on click
    card.addEventListener('click', () => {
        // Close others (optional - decided to keep simple for now, let multiple stay open if user wants)
        // document.querySelectorAll('.mindset-card.is-flipped').forEach(c => {
        //     if (c !== card) c.classList.remove('is-flipped');
        // });

        card.classList.toggle('is-flipped');
    });

    return card;
}

function getIconSvg(type) {
    if (type === 'bulb') {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`;
    } else if (type === 'rocket') {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="m9 12-3 3-4-4 3-3"/></svg>`;
    } else {
        // Spark
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.2 1.3l-6.1 2 6.1 2a2 2 0 0 1 1.2 1.3l1.9 5.8 1.9-5.8a2 2 0 0 1 1.2-1.3l6.1-2-6.1-2a2 2 0 0 1-1.2-1.3z"/></svg>`;
    }
}
