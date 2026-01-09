// Footer Injection Script
// Injects consistent footer across all pages

(function () {
    'use strict';

    const footerHTML = `
    <footer style="background-color: #000; padding: 60px 20px 20px; border-top: 1px solid #222;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 40px;">
                <div>
                    <h3 style="font-family: 'Oswald', sans-serif; font-size: 1.5rem; margin-bottom: 15px; color: #c5a059;">
                        FACE</h3>
                    <p style="color: #999; line-height: 1.6; font-size: 0.95rem;">Innovación sin inventar.
                        Transformamos el ingenio de tus colaboradores en ventaja competitiva.</p>
                </div>
                <div>
                    <h4 style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; margin-bottom: 15px; text-transform: uppercase; color: #c5a059;">
                        Navegación</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 10px;"><a href="index.html" style="color: #999; text-decoration: none; transition: 0.3s;">Inicio</a></li>
                        <li style="margin-bottom: 10px;"><a href="programas.html" style="color: #999; text-decoration: none; transition: 0.3s;">Programas</a></li>
                        <li style="margin-bottom: 10px;"><a href="blog.html" style="color: #999; text-decoration: none; transition: 0.3s;">Blog</a></li>
                        <li style="margin-bottom: 10px;"><a href="#manifesto" style="color: #999; text-decoration: none; transition: 0.3s;">Manifiesto</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; margin-bottom: 15px; text-transform: uppercase; color: #c5a059;">
                        Programas</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 10px;"><a href="innova-desde-adentro.html" style="color: #999; text-decoration: none; transition: 0.3s;">Coeficiente de Ingenio</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; margin-bottom: 15px; text-transform: uppercase; color: #c5a059;">
                        Contacto</h4>
                    <p style="color: #999; margin-bottom: 10px; font-size: 0.95rem;">info@faceinnovation.com</p>
                    <p style="color: #999; font-size: 0.95rem;">Caracas, Venezuela</p>
                </div>
            </div>
            <div style="border-top: 1px solid #222; padding-top: 20px; text-align: center; color: #666; font-size: 0.85rem;">
                <p style="margin: 0;">© 2026 FACE Innovation. Todos los derechos reservados.</p>
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
