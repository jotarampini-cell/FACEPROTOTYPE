// Footer Injection Script
// Injects consistent footer across all pages

(function () {
    'use strict';

    const footerHTML = `
    <style>
        /* --- FOOTER ESTILO TONY ROBBINS --- */
        .tr-master-footer {
            background-color: #000000;
            color: #ffffff;
            padding: 80px 20px 40px;
            font-family: 'Inter', 'Montserrat', sans-serif;
            border-top: 1px solid #1a1a1a;
        }

        .tr-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* GRID SUPERIOR */
        .tr-footer-top {
            display: grid;
            grid-template-columns: 1fr 1fr; /* Móvil: 2 columnas */
            gap: 40px 20px;
            margin-bottom: 80px;
        }

        /* Títulos de Columna */
        .tr-heading {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 25px;
            color: #ffffff;
            letter-spacing: 0.5px;
        }

        /* Enlaces */
        .tr-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .tr-links li {
            margin-bottom: 16px;
        }

        .tr-links a {
            color: #a1a1a1;
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s;
            font-weight: 400;
        }

        .tr-links a:hover {
            color: #ffffff;
        }

        /* Columna de Contacto */
        .contact-block {
            margin-bottom: 30px;
        }

        .contact-link {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #ffffff;
            font-weight: 600;
            text-decoration: none;
            font-size: 1rem;
            margin-bottom: 8px;
            transition: color 0.3s;
        }
        
        .contact-link:hover {
            color: #c5a059;
        }

        .contact-link svg {
            width: 16px;
            height: 16px;
        }

        .contact-desc {
            color: #666;
            font-size: 0.85rem;
            margin: 0;
            line-height: 1.4;
        }

        /* BARRA INFERIOR */
        .tr-footer-bottom {
            display: flex;
            flex-direction: column-reverse;
            gap: 40px;
            border-top: 1px solid #1a1a1a;
            padding-top: 40px;
        }

        .tr-bottom-left {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* Selector de Idioma */
        .lang-selector {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #ffffff;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
        }

        /* Legal y Copyright */
        .legal-links {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .legal-links a {
            color: #666;
            font-size: 0.85rem;
            text-decoration: none;
            transition: 0.3s;
        }
        
        .legal-links a:hover { 
            color: white; 
        }

        .copyright-text {
            color: #444;
            font-size: 0.85rem;
            line-height: 1.5;
        }

        /* Redes Sociales */
        .tr-social-icons {
            display: flex;
            gap: 25px;
        }

        .tr-social-icons a {
            color: #ffffff;
            transition: transform 0.3s, color 0.3s;
            display: flex;
            align-items: center;
        }

        .tr-social-icons svg {
            width: 20px;
            height: 20px;
        }

        .tr-social-icons a:hover {
            color: #c5a059;
            transform: translateY(-3px);
        }

        /* --- RESPONSIVE DESKTOP (Min-Width 992px) --- */
        @media (min-width: 992px) {
            .tr-footer-top {
                grid-template-columns: repeat(4, 1fr);
            }

            .tr-footer-bottom {
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
            }

            .tr-bottom-left {
                flex-direction: row;
                align-items: center;
                gap: 40px;
            }
        }
    </style>

    <footer class="tr-master-footer">
        <div class="tr-container">
            
            <div class="tr-footer-top">
                
                <div class="tr-col">
                    <h4 class="tr-heading">Nosotros</h4>
                    <ul class="tr-links">
                        <li><a href="index.html#manifesto">Manifiesto</a></li>
                        <li><a href="metodologia-face.html">Metodología FACE</a></li>
                        <li><a href="index.html">Nuestra Historia</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                </div>

                <div class="tr-col">
                    <h4 class="tr-heading">Recursos</h4>
                    <ul class="tr-links">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="podcasts.html">Podcast</a></li>
                        <li><a href="index.html#galaxy-section">Casos de Éxito</a></li>
                        <li><a href="evaluacion.html">Diagnósticos</a></li>
                    </ul>
                </div>

                <div class="tr-col">
                    <h4 class="tr-heading">Programas</h4>
                    <ul class="tr-links">
                        <li><a href="innova-desde-adentro.html">Innova desde Adentro</a></li>
                        <li><a href="programas.html">Todos los Programas</a></li>
                        <li><a href="evaluacion.html">Evaluación de Perfil</a></li>
                    </ul>
                </div>

                <div class="tr-col contact-col">
                    <div class="contact-block">
                        <a href="mailto:soporte@faceinnovation.com" class="contact-link">
                            Soporte al Cliente
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                        </a>
                        <p class="contact-desc">Dudas sobre programas, pagos o acceso a la plataforma.</p>
                    </div>

                    <div class="contact-block">
                        <a href="mailto:info@faceinnovation.com" class="contact-link">
                            Prensa y Alianzas
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                        </a>
                        <p class="contact-desc">Para entrevistas o colaboraciones corporativas.</p>
                    </div>
                </div>

            </div>

            <div class="tr-footer-bottom">
                
                <div class="tr-bottom-left">
                    <div class="lang-selector">
                        Español <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                    </div>
                    
                    <div class="legal-links">
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos de Servicio</a>
                    </div>

                    <div class="copyright-text">
                        &copy; 2026 FACE Innovation. Todos los derechos reservados.<br>
                        Caracas, Venezuela.
                    </div>
                </div>

                <div class="tr-social-icons">
                    <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                    <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                    <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
                </div>

            </div>
        </div>
    </footer>
    `;

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }

    function injectFooter() {
        // Find existing footer or inject at end of body
        const existingFooter = document.querySelector('footer');

        if (existingFooter) {
            // Replace existing footer
            existingFooter.outerHTML = footerHTML;
        } else {
            // Inject at end of body
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }
})();
