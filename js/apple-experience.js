/**
 * APPLE EXPERIENCE LOGIC (Master Version)
 * Minimalist, Data-Attribute Driven.
 */

// LÓGICA MINIMALISTA
const modal = document.getElementById('faceModal');

// Elementos del Modal
const fTitle = document.getElementById('f-title');
const fContext = document.getElementById('f-context');
const fInnovation = document.getElementById('f-innovation');
const fFace = document.getElementById('f-face');

function openFaceModal(element) {
    // 0. Safety Check
    if (!modal) {
        console.error('Modal element #faceModal not found');
        return;
    }

    // 1. Extraer datos del HTML del elemento clickeado
    const data = element.dataset;

    // 2. Rellenar el Modal
    fTitle.innerText = data.title || 'SIN TÍTULO';
    fContext.innerText = data.context || '...';
    fInnovation.innerText = data.innovation || '...';
    fFace.innerText = data.face || '...';

    // 3. Mostrar Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquear scroll de fondo
}

function closeFaceModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
}

// Inicialización de Listeners cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cerrar al tocar fuera
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeFaceModal();
        });
    }

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeFaceModal();
    });
});
