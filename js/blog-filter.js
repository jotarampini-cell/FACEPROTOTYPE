// Blog Category Filter JavaScript
// Filters blog posts by category

(function () {
    'use strict';

    function initCategoryFilters() {
        const categoryLinks = document.querySelectorAll('.cat-link');
        const postCards = document.querySelectorAll('.post-card');
        const heroArticle = document.querySelector('.hero-article');
        const sideCards = document.querySelectorAll('.side-card');

        if (!categoryLinks.length) return;

        // Combine all filterable elements
        const allArticles = [...postCards, heroArticle, ...sideCards].filter(Boolean);

        categoryLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove active class from all links
                categoryLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                this.classList.add('active');

                // Get category from link text
                const category = this.textContent.trim().toLowerCase();

                // Filter articles
                allArticles.forEach(article => {
                    const articleCategory = article.getAttribute('data-category');

                    if (category === 'todos los temas' || !articleCategory) {
                        // Show all articles
                        article.style.display = '';
                    } else if (articleCategory && articleCategory.toLowerCase().includes(category)) {
                        // Show matching articles
                        article.style.display = '';
                    } else {
                        // Hide non-matching articles
                        article.style.display = 'none';
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
