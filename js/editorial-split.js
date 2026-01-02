/**
 * THE EDITORIAL SPLIT LOGIC
 * Renders list dynamically and handles Sticky Image interaction.
 */

document.addEventListener('DOMContentLoaded', () => {
    initEditorialSplit();
});

function initEditorialSplit() {
    const listContainer = document.getElementById('editorial-list');
    const stickyImg = document.getElementById('sticky-image');

    if (!listContainer || typeof galaxyIdeas === 'undefined') return;

    // Clear existing
    listContainer.innerHTML = '';

    // Render Cards
    galaxyIdeas.forEach((idea, index) => {
        const item = createEditorialItem(idea, index);
        listContainer.appendChild(item);
    });

    // Initialize Interactions
    setupInteractions();

    // Set Initial Image (Desktop)
    if (galaxyIdeas.length > 0 && stickyImg) {
        const firstImgUrl = getImageUrl(galaxyIdeas[0].category);
        stickyImg.src = firstImgUrl;
        stickyImg.classList.add('visible');
    }
}

function createEditorialItem(idea, index) {
    const li = document.createElement('li');
    li.className = 'e-item';
    li.setAttribute('data-category', idea.category || 'General');

    // Format Number (01, 02...)
    const num = (index + 1).toString().padStart(2, '0');

    // Get Image URL for this item
    const imgUrl = getImageUrl(idea.category);
    li.setAttribute('data-img', imgUrl);

    li.innerHTML = `
        <div class="e-head">
            <span class="e-num">${num}</span>
            <h3 class="e-name">${idea.t}</h3>
            <span class="e-icon">+</span>
        </div>
        <div class="e-body">
            <div class="e-content-wrapper">
                <p>${idea.context} -> ${idea.adaptation}</p>
                <p><strong>Impacto:</strong> ${idea.impact}</p>
                <span class="e-lesson">"${idea.lesson}"</span>
            </div>
        </div>
    `;

    return li;
}

function setupInteractions() {
    constitems = document.querySelectorAll('.e-item');
    const stickyImg = document.getElementById('sticky-image');

    constitems.forEach(item => {
        // --- MOBILE LOGIC (Click = Accordion) ---
        item.addEventListener('click', (e) => {
            // Check if mobile/tablet view (< 992px)
            if (window.innerWidth < 992) {
                const isActive = item.classList.contains('active');

                // Close others
                items.forEach(i => i.classList.remove('active'));

                // Toggle clicked (if it wasn't active, make it active)
                if (!isActive) {
                    item.classList.add('active');
                }
            }
        });

        // --- DESKTOP LOGIC (Hover = Change Image) ---
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 992) {
                // Highlight Text
                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                // Change Image
                if (stickyImg) {
                    const imgUrl = item.getAttribute('data-img');

                    // Don't refresh if same image (optimization)
                    if (stickyImg.src === imgUrl && stickyImg.classList.contains('visible')) return;

                    // Transition
                    stickyImg.classList.remove('visible');

                    setTimeout(() => {
                        stickyImg.src = imgUrl;
                        // Preload? Browser handles it usually fast enough for Unsplash
                        stickyImg.onload = () => stickyImg.classList.add('visible');
                        // Fallback if cached
                        if (stickyImg.complete) stickyImg.classList.add('visible');
                    }, 150);
                }
            }
        });
    });
}

// Helper: Theme Images based on Category
function getImageUrl(category) {
    // High quality Unsplash IDs
    const categoryMap = {
        'Tecnología': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', // Chips/Tech
        'Negocios': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Skyscrapers
        'Procesos': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Industrial/Factory (Abstract)
        'Cultura': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'    // People/Collab
    };

    // Default Fallback
    const fallback = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'; // Galaxy/Space abstract

    return categoryMap[category] || fallback;
}
