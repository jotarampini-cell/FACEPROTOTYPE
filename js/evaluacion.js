/**
 * Evaluación de Perfil - FACE Innovation
 * Updated to match "Coeficiente de Ingenio" logic and designs
 */

// State
const evalState = {
    currentStep: 0,
    score: 0,
    answers: {},
    leadData: {}
};

// Knowledge Base (Archetypes)
const knowledgeBase = {
    'micro': {
        name: "EL MICRO-INNOVADOR",
        subtitle: "Arquetipo: Emprendedor / Pequeña Empresa Ágil",
        risk: "MEDIO (Dependencia del Fundador)",
        diagnosis: "Tienes la agilidad que las grandes empresas envidian, pero sufres de 'Ceguera de Taller'. Estás tan metido en la operación diaria que confundes 'estar ocupado' con 'ser productivo'. Tu innovación es reactiva: apagas fuegos en lugar de prevenirlos.",
        imperative: "Sistematizar tu intuición. Necesitas dejar de ser el cuello de botella y empoderar a tu equipo para que resuelvan problemas sin ti.",
        plan: {
            t: "Tu Plan de 90 Días:",
            d: "1. Estandarización: Documenta los 3 procesos que más consumen tu tiempo.\n2. Delegación Gradual: Entrega la toma de decisiones operativas a tu persona de mayor confianza.\n3. Rituales de Escucha: Implementa una reunión semanal de 15 min solo para escuchar ideas del equipo, sin juzgar."
        },
        video: "Te recomendamos el Módulo 1: 'Mentalidad de Fundador vs. CEO' del Bootcamp."
    },
    'medium': {
        name: "EL SCALING-INNOVATOR",
        subtitle: "Arquetipo: Empresa Mediana (50-250 Empleados)",
        risk: "ALTO (Complejidad)",
        diagnosis: "Estás en la 'Trampa de la Adolescencia Corporativa'. Has crecido y tienes recursos, pero la complejidad estructural está empezando a matar tu agilidad. Tus mandos medios, que antes impulsaban, ahora pueden estar resistiéndose al cambio por miedo a perder control.",
        imperative: "Romper silos. La comunicación fluida que tenías antes se ha cortado. Necesitas reconectar la estrategia con la operación.",
        plan: {
            t: "Tu Plan de 90 Días:",
            d: "1. Cross-Functional Teams: Crea un equipo temporal multidisciplinario para resolver un problema crítico.\n2. Desburocratización: Elimina 2 niveles de aprobación para decisiones de bajo riesgo.\n3. Gemba Walks: Obliga a los directivos a pasar 1 hora semanal en el 'piso de venta' u operación."
        },
        video: "Te recomendamos el Módulo 3: 'Escalando sin Perder el Alma' del Bootcamp."
    },
    'family': {
        name: "EL GUARDIÁN DEL LEGADO",
        subtitle: "Arquetipo: Empresa Familiar / Tradicional",
        risk: "ALTO (Resistencia Cultural)",
        diagnosis: "Tu mayor activo es tu historia, pero también es tu mayor lastre. La frase 'siempre se ha hecho así' es la ley no escrita. Hay lealtad, pero falta hambre de cambio. El riesgo de obsolescencia es inminente si no renuevas tu visión.",
        imperative: "Honrar el pasado, desafiar el futuro. Necesitas demostrar que la innovación no es una traición a los fundadores, sino la única forma de proteger su legado.",
        plan: {
            t: "Tu Plan de 90 Días:",
            d: "1. Proyecto Faro: Lanza una iniciativa pequeña pero visible que demuestre resultados rápidos de una nueva forma de trabajar.\n2. Inyección de Sangre Nueva: Incorpora talento externo o mentores en áreas digitales/innovación.\n3. Consejo de Innovación: Crea un comité mixto (vieja y nueva guardia) para evaluar ideas."
        },
        video: "Te recomendamos el Módulo 2: 'Innovación en Empresas Tradicionales' del Bootcamp."
    },
    'corp': {
        name: "EL GIGANTE SILENCIOSO",
        subtitle: "Arquetipo: Gran Corporación / Multinacional",
        risk: "MEDIO (Lentitud)",
        diagnosis: "Eres un transatlántico: poderoso y estable, pero lento para girar. Tienes talento brillante y recursos infinitos, pero están atrapados en procesos, políticas y aversión al riesgo. La innovación muere por asfixia burocrática.",
        imperative: "Crear 'Zonas de Excepción'. No puedes cambiar toda la empresa de golpe. Necesitas crear islas de agilidad donde las reglas corporativas normales no apliquen.",
        plan: {
            t: "Tu Plan de 90 Días:",
            d: "1. Sandbox Regulatorio: Define un presupuesto y un equipo que puedan operar fuera de las políticas estándar de compras/RRHH.\n2. Intraemprendimiento: Lanza un programa donde los empleados puedan dedicar 10% de su tiempo a proyectos nuevos.\n3. Alianzas con Startups: Busca agilidad externa para inyectar velocidad interna."
        },
        video: "Te recomendamos el Módulo 4: 'Corporaciones Ágiles' del Bootcamp."
    }
};

// Steps Configuration matching innova-desde-adentro.html
const steps = [
    // Welcome
    {
        type: 'welcome',
        title: 'DESCUBRE TU COEFICIENTE DE INGENIO',
        subtitle: 'Este algoritmo de análisis diagnosticará tu capacidad actual para innovar y resolver problemas complejos.',
        badge: 'ALGORITMO DE ANÁLISIS',
        cta: 'INICIAR DIAGNÓSTICO'
    },
    // Q1
    {
        type: 'question',
        id: 'q1',
        question: '¿Cuándo fue la última vez que le preguntaste a un operativo: <br><span class="highlight">"¿En qué crees que estamos fallando?"</span>',
        options: [
            { text: 'Nunca. Asumo que si algo falla, me lo dirán.', value: 0 },
            { text: 'Quizás hace un año, en evaluaciones anuales.', value: 10 },
            { text: 'A veces, cuando veo problemas evidentes.', value: 20 },
            { text: 'Tenemos reuniones semanales específicas para esto.', value: 30 }
        ]
    },
    // Q2
    {
        type: 'question',
        id: 'q2',
        question: '¿Cuándo fue la última vez que hablaste con un empleado <span class="highlight">SOLO de los comentarios negativos</span> de clientes?',
        options: [
            { text: 'Solo cuando hay una queja grave para buscar culpables.', value: 0 },
            { text: 'Revisamos las quejas en reportes generales mensuales.', value: 10 },
            { text: 'Escucho lo malo, pero a veces me lo tomo personal.', value: 20 },
            { text: 'Analizamos lo malo constantemente sin culpas.', value: 30 }
        ]
    },
    // Q3
    {
        type: 'question',
        id: 'q3',
        question: 'Si un empleado sugiere cambiar un proceso establecido, <span class="highlight">¿cuál es la reacción inmediata?</span>',
        options: [
            { text: '"Aquí siempre se ha hecho así. No toques nada".', value: 0 },
            { text: '"Déjame pensarlo". (Y usualmente la idea se olvida).', value: 10 },
            { text: 'Le digo que lo intente bajo su propio riesgo.', value: 20 },
            { text: '"Tienes permiso para hacer una prueba piloto hoy".', value: 30 }
        ]
    },
    // Q4
    {
        type: 'question',
        id: 'q4',
        question: 'Tienes un problema operativo que cuesta dinero diario. <span class="highlight">¿Quién puede solucionarlo?</span>',
        options: [
            { text: 'Solo yo (Gerente/Dueño) puedo autorizar la solución.', value: 0 },
            { text: 'Necesitan llenar un formato y esperar aprobación.', value: 10 },
            { text: 'Los supervisores pueden decidir si no es muy caro.', value: 20 },
            { text: 'Cualquier empleado tiene autonomía para arreglarlo al momento.', value: 30 }
        ]
    },
    // Lead Capture
    {
        type: 'lead',
        title: 'ANÁLISIS COMPLETADO',
        subtitle: 'Tu perfil de innovación ha sido calculado. Ingresa tus datos para desbloquear tu Informe Técnico y Plan de 90 Días.',
        fields: [
            { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
            { name: 'email', label: 'Email Corporativo', type: 'email', placeholder: 'nombre@empresa.com' }
        ],
        cta: 'REVELAR RESULTADO'
    },
    // Success / Report
    {
        type: 'report'
    }
];

// DOM Elements
let contentArea, progressFill, stepIndicator;

// Init
function initEvaluation() {
    contentArea = document.getElementById('eval-content');
    progressFill = document.getElementById('progress-fill');
    stepIndicator = document.getElementById('step-indicator');

    // Load from sessionStorage
    loadState();

    // Render
    renderStep();
}

// Save state
function saveState() {
    sessionStorage.setItem('evalState', JSON.stringify(evalState));
}

// Load state
function loadState() {
    const saved = sessionStorage.getItem('evalState');
    if (saved) {
        const savedState = JSON.parse(saved);
        evalState.score = savedState.score || 0;
        evalState.currentStep = savedState.currentStep || 0;
        evalState.answers = savedState.answers || {};
    }
}

// Render current step
function renderStep() {
    const step = steps[evalState.currentStep];

    // Update progress
    const progress = (evalState.currentStep / (steps.length - 1)) * 100;
    if (progressFill) progressFill.style.width = progress + '%';
    if (stepIndicator) stepIndicator.textContent = `Paso ${Math.min(evalState.currentStep + 1, 5)} de 5`;

    // Render based on type
    if (step.type === 'welcome') {
        renderWelcome(step);
    } else if (step.type === 'question') {
        renderQuestion(step);
    } else if (step.type === 'lead') {
        renderLeadForm(step);
    } else if (step.type === 'report') {
        renderReport(); // This generates the Consulting Report
    } else {
        // Fallback
    }
}

function renderWelcome(step) {
    contentArea.innerHTML = `
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
            ${step.badge ? `<div class="eval-badge">${step.badge}</div>` : ''}
            <h1 class="eval-title" style="margin-bottom: 20px;">${step.title}</h1>
            <p class="eval-subtitle" style="margin-bottom: 40px;">${step.subtitle}</p>
            <button class="eval-cta" onclick="window.evalPage.nextStep()">${step.cta}</button>
        </div>
    `;
}

function renderQuestion(step) {
    const optionsHTML = step.options.map((option, index) => `
        <button class="eval-option" onclick="window.evalPage.selectOption('${step.id}', ${option.value}, ${index})">
            <span class="opt-marker">${String.fromCharCode(65 + index)}</span>
            <span class="opt-text">${option.text}</span>
        </button>
    `).join('');

    contentArea.innerHTML = `
        <h2 class="eval-question">${step.question}</h2>
        <div class="eval-options">
            ${optionsHTML}
        </div>
    `;
}

function renderLeadForm(step) {
    const fieldsHTML = step.fields.map(field => `
        <div class="eval-input-group">
            <label class="eval-label">${field.label}</label>
            <input 
                type="${field.type}" 
                name="${field.name}" 
                class="eval-input" 
                placeholder="${field.placeholder}"
                required
            >
        </div>
    `).join('');

    contentArea.innerHTML = `
        <h1 class="eval-title" style="font-size: 2rem;">${step.title}</h1>
        <p class="eval-subtitle">${step.subtitle}</p>
        
        <form class="eval-form" id="lead-form" style="max-width: 400px; margin: 0 auto;">
            ${fieldsHTML}
        </form>
        
        <div class="eval-privacy" style="margin-top: 20px;">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span>Tus datos están protegidos y son 100% confidenciales.</span>
        </div>
        
        <button class="eval-cta" style="margin-top: 30px;" onclick="window.evalPage.submitForm()">${step.cta}</button>
    `;
}

function renderReport() {
    // Determine Archetype
    const score = evalState.score;
    let type = 'micro';
    if (score >= 40 && score <= 70) type = 'medium';
    if (score >= 80 && score <= 100) type = 'family';
    if (score >= 110) type = 'corp';

    const result = knowledgeBase[type];

    // Build the Consulting Report HTML
    // Using inline styles/classes that match valid existing CSS or new logic

    // Note: We need to make sure the CSS supports this structure or inline it.
    // For safety, I'll inline critical layout styles to match the mockup

    const reportHTML = `
        <div class="consulting-report" style="background: white; color: #111; padding: 40px; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); text-align: left; max-width: 900px; margin: 0 auto;">
            
            <!-- HEADER -->
            <div class="report-header" style="border-bottom: 2px solid #f0f0f0; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: 20px;">
                <div>
                    <span class="report-badge" style="background: #333; color: white; padding: 4px 8px; font-size: 0.75rem; text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">DIAGNÓSTICO GENERADO</span>
                    <h2 style="font-family: 'Oswald', sans-serif; font-size: 2.5rem; color: #111; margin: 10px 0 5px 0; text-transform: uppercase; line-height: 1.1;">${result.name}</h2>
                    <p style="font-size: 1rem; color: #666; margin: 0;">${result.subtitle}</p>
                </div>
                <div style="background: #fff5f5; border: 1px solid #ffebeb; padding: 15px; border-radius: 4px;">
                    <span style="font-size: 0.8rem; color: #999; text-transform: uppercase; font-weight: 600;">NIVEL DE RIESGO</span>
                    <div style="font-family: 'Oswald', sans-serif; font-size: 1.2rem; color: #e53e3e; margin-top: 4px; font-weight: 500;">
                        ${result.risk}
                    </div>
                </div>
            </div>

            <!-- BODY -->
            <div class="report-body" style="display: grid; grid-template-columns: 1fr; gap: 30px;">
                
                <div class="analysis-section">
                    <h3 style="display: flex; align-items: center; color: #c5a059; font-family: 'Oswald', sans-serif; font-size: 1.3rem; margin-bottom: 15px;">
                        <span style="display: inline-flex; width: 32px; height: 32px; background: #c5a059; color: white; border-radius: 50%; align-items: center; justify-content: center; margin-right: 12px;">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
                        </span>
                        TU PATOLOGÍA ACTUAL
                    </h3>
                    <p style="font-size: 1.05rem; line-height: 1.6; color: #444;">${result.diagnosis}</p>
                </div>

                <div class="strategy-section">
                    <h3 style="display: flex; align-items: center; color: #c5a059; font-family: 'Oswald', sans-serif; font-size: 1.3rem; margin-bottom: 15px;">
                       <span style="display: inline-flex; width: 32px; height: 32px; background: #c5a059; color: white; border-radius: 50%; align-items: center; justify-content: center; margin-right: 12px;">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                        </span>
                        TU IMPERATIVO ESTRATÉGICO
                    </h3>
                    <p style="font-size: 1.05rem; line-height: 1.6; color: #444;">${result.imperative}</p>
                </div>

                <div class="roadmap-box" style="background: #f9f9f9; padding: 25px; border-left: 4px solid #c5a059;">
                    <h4 style="font-family: 'Oswald', sans-serif; font-size: 1.2rem; margin-bottom: 15px;">${result.plan.t}</h4>
                    <pre style="font-family: 'Montserrat', sans-serif; white-space: pre-wrap; color: #555; line-height: 1.7; font-size: 0.95rem;">${result.plan.d}</pre>
                </div>

                <div class="value-cta-box" style="margin-top: 20px; background: #000; color: white; padding: 25px; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <div style="flex: 1; min-width: 250px;">
                        <h4 style="color: #c5a059; margin-bottom: 10px; font-family: 'Oswald', sans-serif; display: flex; align-items: center;">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 10px;"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                           TU PRIMER PASO (GRATIS)
                        </h4>
                        <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 5px;">No intentes aplicar todo esto solo. Hemos desbloqueado un video específico:</p>
                        <p style="color: white; font-weight: 500;">${result.video}</p>
                    </div>
                    <a href="https://calendly.com/face-innovation/estrategia" target="_blank" style="background: #c5a059; color: black; padding: 12px 25px; text-decoration: none; font-weight: 700; border-radius: 4px; display: inline-block; white-space: nowrap;">
                        RESERVAR CONSULTA
                    </a>
                </div>

            </div>
        </div>
    `;

    // Inject
    contentArea.innerHTML = reportHTML;

    // Hide progress bar on result
    if (document.querySelector('.eval-progress-container')) {
        document.querySelector('.eval-progress-container').style.display = 'none';
    }
}

// Select option logic
function selectOption(questionId, value, index) {
    // Add Score
    evalState.score += value;
    evalState.answers[questionId] = value;
    saveState();

    // Visual
    const buttons = document.querySelectorAll('.eval-option');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');

    // Advance
    setTimeout(() => {
        nextStep();
    }, 400);
}

function nextStep() {
    if (evalState.currentStep < steps.length - 1) {
        evalState.currentStep++;
        saveState();
        renderStep();
    }
}

function submitForm() {
    // In a real scenario, validate and send to API
    const form = document.getElementById('lead-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Move to report (last step)
    evalState.currentStep++;
    saveState();
    renderStep();
}

function goBack() {
    if (evalState.currentStep > 0) {
        evalState.currentStep--;
        saveState();
        renderStep();
    }
}

// Expose
window.evalPage = {
    nextStep,
    goBack,
    selectOption,
    submitForm
};

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEvaluation);
} else {
    initEvaluation();
}
