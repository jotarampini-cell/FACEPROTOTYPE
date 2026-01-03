// Related Articles Injection Script
// Injects consistent related articles across all pages

(function () {
    'use strict';

    const relatedArticlesHTML = `
    <section class="related-section">
        <div class="related-header">
            <h3 class="related-title">Artículos Relacionados</h3>
            <div class="slider-nav">
                <div class="nav-btn" onclick="scrollGrid(-1)">&#10094;</div>
                <div class="nav-btn" onclick="scrollGrid(1)">&#10095;</div>
            </div>
        </div>

        <div class="related-grid" id="relatedGrid">

            <!-- Japanese Innovation Article -->
            <a href="blog-innovation-japonesa.html" class="related-card">
                <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    class="related-img">
                <div class="related-body">
                    <span class="related-tag">INNOVACIÓN</span>
                    <h4 class="related-h">Innovar sin inventar: la lección japonesa</h4>
                    <p class="related-excerpt">Cómo Venezuela puede aprender del modelo Toyota para transformar desafíos en ventajas competitivas.</p>
                </div>
            </a>

            <!-- React vs Create Future -->
            <a href="blog-post.html" class="related-card">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    class="related-img">
                <div class="related-body">
                    <span class="related-tag">ESTRATEGIA</span>
                    <h4 class="related-h">¿Estás reaccionando o creando el futuro?</h4>
                    <p class="related-excerpt">El cambio ya no es un suceso extraño; es el estado natural. Descubre cómo anticiparte.</p>
                </div>
            </a>

            <a href="#" class="related-card">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    class="related-img">
                <div class="related-body">
                    <span class="related-tag">LIDERAZGO</span>
                    <h4 class="related-h">Liderazgo Adaptativo: Guía 2024</h4>
                    <p class="related-excerpt">Cómo guiar a tu equipo en tiempos de incertidumbre.</p>
                </div>
            </a>

            <a href="#" class="related-card">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    class="related-img">
                <div class="related-body">
                    <span class="related-tag">CULTURA</span>
                    <h4 class="related-h">La cultura se come a la estrategia</h4>
                    <p class="related-excerpt">Por qué tus planes fallan si no cambias la mentalidad.</p>
                </div>
            </a>

            <a href="#" class="related-card">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    class="related-img">
                <div class="related-body">
                    <span class="related-tag">INNOVACIÓN</span>
                    <h4 class="related-h">Los 10 tipos de innovación</h4>
                    <p class="related-excerpt">No todo es tecnología. Descubre dónde puedes innovar.</p>
                </div>
            </a>

            <a href="#" class="related-card">
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    class="related-img">
                <div class="related-body">
                    <span class="related-tag">PRODUCTIVIDAD</span>
                    <h4 class="related-h">Sistemas vs Metas</h4>
                    <p class="related-excerpt">Por qué deberías enfocarte en procesos, no en resultados.</p>
                </div>
            </a>

        </div>
    </section>
    `;

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectRelatedArticles);
    } else {
        injectRelatedArticles();
    }

    function injectRelatedArticles() {
        // Find existing related section or placeholder
        const existingSection = document.querySelector('.related-section');
        const placeholder = document.getElementById('related-articles-placeholder');

        if (existingSection) {
            // Replace existing related section
            existingSection.outerHTML = relatedArticlesHTML;
        } else if (placeholder) {
            // Inject at placeholder
            placeholder.outerHTML = relatedArticlesHTML;
        }

        // Add scroll function if not already defined
        if (typeof window.scrollGrid !== 'function') {
            window.scrollGrid = function (direction) {
                const grid = document.getElementById('relatedGrid');
                if (grid) {
                    const scrollAmount = 350;
                    grid.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
                }
            };
        }
    }
})();
