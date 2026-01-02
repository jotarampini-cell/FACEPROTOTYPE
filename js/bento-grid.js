/**
 * THE LIVING BENTO GRID LOGIC
 * Renders filterable masonry grid and handles modal interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initBentoVault();
});

let activeCategory = 'all';

function initBentoVault() {
    const gridContainer = document.getElementById('bento-grid-container');
    const filters = document.querySelectorAll('.filter-btn');

    if (!gridContainer || typeof galaxyIdeas === 'undefined') return;

    // 1. Render Initial Grid
    renderGrid('all');

    // 2. Setup Filter Listeners
    filters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // UI Toggle
            filters.forEach(f => f.classList.remove('active'));
            e.target.classList.add('active');

            // Logic
            const filter = e.target.getAttribute('data-filter');
            activeCategory = filter;
            renderGrid(filter);
        });
    });

    // 3. Setup Modal Close
    const modalOverlay = document.getElementById('bento-modal');
    const closeBtn = document.getElementById('bento-close-btn');

    // Close on X
    closeBtn.addEventListener('click', closeModal);
    // Close on Click Outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function renderGrid(filter) {
    const container = document.getElementById('bento-grid-container');
    container.innerHTML = ''; // Clear current

    // Seed "random" but deterministic layout for visual consistency? 
    // For now, let's simple iterate.

    let index = 0;
    galaxyIdeas.forEach((idea) => {
        // Filter Check
        const cat = idea.category || 'General';

        // Mapping simple filter keys to dataset strings
        // Filters: 'all', 'tech', 'business', 'process', 'culture'
        const matchesFilter =
            filter === 'all' ||
            (filter === 'tech' && cat === 'Tecnología') ||
            (filter === 'business' && cat === 'Negocios') ||
            (filter === 'process' && cat === 'Procesos') ||
            (filter === 'culture' && cat === 'Cultura');

        if (!matchesFilter) return;

        // Create Element
        const item = document.createElement('div');
        item.className = 'bento-item';

        // Assign Size Variations (Pseudo-random based on string length or index)
        // Only on "All" view to avoid huge gaps on filtered views? 
        // Or simple pattern: every 7th is tall, every 5th is wide.
        if (filter === 'all') {
            if (index % 5 === 0) item.classList.add('wide');
            else if (index % 7 === 0) item.classList.add('tall');
        }

        item.innerHTML = `
            <div class="bento-content">
                <div class="bento-cat-tag">${cat}</div>
                <h3 class="bento-title">${idea.t}</h3>
                <div class="hover-reveal">
                    ${truncate(idea.lesson, 60)}
                </div>
            </div>
            <div class="bento-icon-corner">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </div>
        `;

        // Click to Open Modal
        item.addEventListener('click', () => openModal(idea));

        container.appendChild(item);
        index++;
    });
}

function openModal(idea) {
    const modal = document.getElementById('bento-modal');

    // Fill Content
    document.getElementById('m-cat').innerText = idea.category || 'Caso de Estudio';
    document.getElementById('m-title').innerText = idea.t;
    document.getElementById('m-context').innerText = idea.context;
    document.getElementById('m-adaptation').innerText = idea.adaptation;
    document.getElementById('m-impact').innerText = idea.impact;
    document.getElementById('m-lesson').innerText = `"${idea.lesson}"`;

    // Show
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeModal() {
    const modal = document.getElementById('bento-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Helper: Truncate text
function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
}
