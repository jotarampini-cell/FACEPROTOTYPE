// Blog Category Filter JavaScript
// Filters blog posts by category

(function () {
    'use strict';

    function initCategoryFilters() {
        const categoryLinks = document.querySelectorAll('.cat-link');
        const postCards = document.querySelectorAll('.post-card');

        if (!categoryLinks.length || !postCards.length) return;

        categoryLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove active class from all links
                categoryLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                this.classList.add('active');

                // Get category from link text
                const category = this.textContent.trim().toLowerCase();

                // Filter posts
                postCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (category === 'todos los temas' || !cardCategory) {
                        // Show all cards
                        card.style.display = 'block';
                    } else if (cardCategory && cardCategory.toLowerCase().includes(category)) {
                        // Show matching cards
                        card.style.display = 'block';
                    } else {
                        // Hide non-matching cards
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCategoryFilters);
    } else {
        initCategoryFilters();
    }
})();
