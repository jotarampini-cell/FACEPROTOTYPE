// Demo Mode - Investor Guide
// Provides a non-intrusive toast notification to guide investors through the prototype

(function () {
    const isApp = window.location.pathname.includes('app.html');

    const messages = isApp ? [
        "👋 ¡Bienvenido al Dashboard! Explora tus estadísticas reales.",
        "📚 En 'Biblioteca' puedes filtrar habilidades por categoría.",
        "🎯 Los 'Retos' gamifican la cultura del aprendizaje.",
        "👤 En 'Perfil' verás tus logros y racha de aprendizaje."
    ] : [
        "🚀 Estás viendo el futuro de la metodología FACE.",
        "📱 Pruébame en móvil: el diseño es 100% responsive.",
        "🔑 Usa el botón 'Iniciar Sesión' para ver la app real.",
        "💡 Foco -> Acción -> Corazón -> Evolución"
    ];

    let currentMsgIndex = 0;

    function createToast() {
        const toast = document.createElement('div');
        toast.id = 'demo-guide-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: ${isApp ? '90px' : '30px'};
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: rgba(32, 33, 36, 0.95);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 500;
            z-index: 9999;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
            text-align: center;
            width: max-content;
            max-width: 90vw;
            border: 1px solid rgba(255,255,255,0.1);
        `;
        document.body.appendChild(toast);
        return toast;
    }

    function showNextMessage(toast) {
        if (currentMsgIndex >= messages.length) {
            toast.style.transform = 'translateX(-50%) translateY(150px)';
            setTimeout(() => toast.remove(), 1000);
            return;
        }

        toast.textContent = messages[currentMsgIndex];
        toast.style.transform = 'translateX(-50%) translateY(0)';

        currentMsgIndex++;

        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(150px)';
            setTimeout(() => showNextMessage(toast), 1000);
        }, 4000);
    }

    // Start tour after a short delay
    setTimeout(() => {
        const toast = createToast();
        showNextMessage(toast);
    }, 2000);

})();
