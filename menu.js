// ============================================
// PREMIUM MOBILE MENU - TONY ROBBINS STYLE
// Funciones compartidas para todas las páginas
// ============================================

/**
 * Cierra el menú móvil
 */
function closeMenu() {
    const menu = document.getElementById('fullscreen-menu');
    if (menu) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Abre el menú móvil
 */
function openMenu() {
    const menu = document.getElementById('fullscreen-menu');
    if (menu) {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Toggle submenu (abrir/cerrar)
 * @param {Event} event - Click event
 * @param {string} submenuId - ID del submenu a toggle
 */
function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    event.stopPropagation();

    const submenu = document.getElementById(submenuId);
    if (!submenu) return;

    const parentLi = submenu.closest('.menu-parent');
    if (!parentLi) return;

    // Cerrar otros submenus abiertos
    const allParents = document.querySelectorAll('.menu-parent');
    allParents.forEach(parent => {
        if (parent !== parentLi) {
            parent.classList.remove('active');
            const otherSubmenu = parent.querySelector('.tr-submenu');
            if (otherSubmenu) {
                otherSubmenu.classList.remove('active');
            }
        }
    });

    // Toggle el submenu actual
    parentLi.classList.toggle('active');
    submenu.classList.toggle('active');
}

/**
 * Scroll suave al widget del diagnóstico
 */
function scrollToWidget() {
    const widget = document.querySelector('#adn-innovador-section');
    if (widget) {
        closeMenu();
        setTimeout(() => {
            widget.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    } else {
        // Si no está en la página actual, ir a index.html
        window.location.href = 'index.html#adn-innovador-section';
    }
}

// ============================================
// Event Listeners - Inicialización
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Botón toggle del menú (hamburger)
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    // Botón close del menú (X)
    const menuClose = document.querySelector('.tr-menu-close');
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    // Click fuera del menú para cerrar
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    if (fullscreenMenu) {
        fullscreenMenu.addEventListener('click', function (e) {
            if (e.target.id === 'fullscreen-menu') {
                closeMenu();
            }
        });
    }

    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});
