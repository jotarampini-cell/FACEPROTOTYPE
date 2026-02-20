/**
 * Evaluación Page - Standalone
 * Conversational, friendly business evaluation
 */

// State
const evalState = {
    currentStep: 0,
    answers: {},
    leadData: {}
};

// Steps Configuration
const steps = [
    // Welcome
    {
        type: 'welcome',
        title: 'Hagamos que las cosas pasen.',
        subtitle: 'Olvídate de los diagnósticos aburridos. Responde unas preguntas rápidas y descubre las oportunidades de innovación que tienes frente a ti y quizás no estás viendo.',
        badge: '5 preguntas · 2 minutos',
        cta: 'VAMOS A ELLO'
    },
    // Question 1
    {
        type: 'question',
        id: 'focus_area',
        question: '¿Cuál es el área de tu negocio a la que le estás dedicando más tiempo, energía o presupuesto actualmente?',
        options: [
            'Ventas y Captación de Clientes',
            'Organización y Procesos',
            'Desarrollo de Nuevos Productos/Servicios',
            'Talento y Cultura'
        ]
    },
    // Question 2
    {
        type: 'question',
        id: 'company_age',
        question: '¿Cuántos años tiene tu empresa operando en el mercado?',
        options: [
            'Menos de 3 años',
            'Entre 3 y 10 años',
            'Entre 10 y 25 años',
            'Más de 25 años'
        ]
    },
    // Question 3
    {
        type: 'question',
        id: 'business_stage',
        question: '¿Cómo describirías la etapa actual en la que se encuentra tu negocio?',
        options: [
            'Arranque / Validación',
            'Crecimiento Acelerado',
            'Consolidación / Madurez',
            'Reinvención / Cambio de Rumbo'
        ]
    },
    // Question 4
    {
        type: 'question',
        id: 'team_structure',
        question: 'Selecciona la descripción que mejor se ajusta a la estructura de tu equipo hoy:',
        options: [
            'Todos hacemos de todo y yo superviso directamente',
            'Departamentos definidos con gerentes que toman decisiones',
            'La propiedad y dirección son principalmente de la familia',
            'Organización grande o regulada con procesos formales'
        ]
    },
    // Question 5
    {
        type: 'question',
        id: 'desired_outcome',
        question: 'Para aprovechar al máximo tu sesión de diagnóstico, ¿qué resultado te gustaría obtener?',
        options: [
            'Vender más o llegar a nuevos mercados',
            'Que mi equipo trabaje mejor y dependa menos de mí',
            'Modernizar la empresa sin perder nuestra esencia',
            'Tener un plan claro de innovación'
        ]
    },
    // Lead Capture
    {
        type: 'lead',
        title: '¡Ya casi!',
        subtitle: 'Para enviarte el diagnóstico y agendar tu sesión estratégica gratuita, ingresa tus datos directos.',
        fields: [
            { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
            { name: 'apellido', label: 'Apellido', type: 'text', placeholder: 'Tu apellido' },
            { name: 'email', label: 'Email Corporativo', type: 'email', placeholder: 'nombre@empresa.com' },
            { name: 'telefono', label: 'WhatsApp', type: 'tel', placeholder: '+58 414 1234567' }
        ],
        cta: 'OBTENER MI DIAGNÓSTICO'
    },
    // Success
    {
        type: 'success',
        title: '¡Listo! Tu diagnóstico está en camino',
        subtitle: 'Nos pondremos en contacto contigo en las próximas 24-48 horas para agendar tu sesión estratégica personalizada.',
        cta: 'EXPLORAR PROGRAMAS',
        link: '/programas'
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

    // Check URL param
    const urlParams = new URLSearchParams(window.location.search);
    const stepParam = parseInt(urlParams.get('step'));
    if (stepParam >= 0 && stepParam < steps.length) {
        evalState.currentStep = stepParam;
    }

    // Render
    renderStep();
}

// Save state to sessionStorage
function saveState() {
    sessionStorage.setItem('evalState', JSON.stringify(evalState));
}

// Load state from sessionStorage
function loadState() {
    const saved = sessionStorage.getItem('evalState');
    if (saved) {
        const savedState = JSON.parse(saved);
        evalState.answers = savedState.answers || {};
        evalState.leadData = savedState.leadData || {};
    }
}

// Render current step
function renderStep() {
    const step = steps[evalState.currentStep];

    // Update progress
    updateProgress();
    updateURL();

    // Render based on type
    if (step.type === 'welcome') {
        renderWelcome(step);
    } else if (step.type === 'question') {
        renderQuestion(step);
    } else if (step.type === 'lead') {
        renderLeadForm(step);
    } else if (step.type === 'success') {
        renderSuccess(step);
    }

    // Trigger animation
    contentArea.style.animation = 'none';
    setTimeout(() => {
        contentArea.style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

// Render welcome
function renderWelcome(step) {
    contentArea.innerHTML = `
        ${step.badge ? `<div class="eval-badge">${step.badge}</div>` : ''}
        <h1 class="eval-title">${step.title}</h1>
        <p class="eval-subtitle">${step.subtitle}</p>
        <button class="eval-cta" onclick="window.evalPage.nextStep()">${step.cta}</button>
    `;
}

// Render question
function renderQuestion(step) {
    const optionsHTML = step.options.map((option, index) => `
        <button class="eval-option" onclick="window.evalPage.selectOption('${step.id}', '${option}', ${index})">
            ${option}
        </button>
    `).join('');

    contentArea.innerHTML = `
        <h2 class="eval-question">${step.question}</h2>
        <div class="eval-options">
            ${optionsHTML}
        </div>
    `;
}

// Render lead form
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
        <h1 class="eval-title">${step.title}</h1>
        <p class="eval-subtitle">${step.subtitle}</p>
        
        <form class="eval-form" id="lead-form">
            ${fieldsHTML}
        </form>
        
        <div class="eval-privacy">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span>Tus datos están protegidos y son 100% confidenciales.</span>
        </div>
        
        <button class="eval-cta" onclick="window.evalPage.submitForm()">${step.cta}</button>
    `;
}

// Render success
function renderSuccess(step) {
    contentArea.innerHTML = `
        <div class="eval-success">
            <div class="eval-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
            </div>
            <h1 class="eval-title">${step.title}</h1>
            <p class="eval-subtitle">${step.subtitle}</p>
            <button class="eval-cta" onclick="window.location.href='${step.link}'">${step.cta}</button>
        </div>
    `;

    // Trigger confetti animation
    createConfetti();
}

// Select option
function selectOption(questionId, answer, index) {
    // Save answer
    evalState.answers[questionId] = answer;
    saveState();

    // Visual feedback
    const buttons = document.querySelectorAll('.eval-option');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');

    // Auto-advance after delay
    setTimeout(() => {
        nextStep();
    }, 500);
}

// Next step
function nextStep() {
    if (evalState.currentStep < steps.length - 1) {
        evalState.currentStep++;
        renderStep();
    }
}

// Go back
function goBack() {
    if (evalState.currentStep > 0) {
        evalState.currentStep--;
        renderStep();
    }
}

// Submit form
function submitForm() {
    const form = document.getElementById('lead-form');

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Collect data
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        evalState.leadData[input.name] = input.value;
    });

    saveState();

    // Log (replace with API call)
    console.log('Evaluation Submitted:');
    console.log('Answers:', evalState.answers);
    console.log('Lead Data:', evalState.leadData);

    // Next step (success)
    nextStep();
}

// Update progress bar
function updateProgress() {
    const progress = (evalState.currentStep / (steps.length - 1)) * 100;
    progressFill.style.width = progress + '%';
    stepIndicator.textContent = `Paso ${evalState.currentStep + 1} de ${steps.length}`;
}


// Confetti Animation
function createConfetti() {
    const colors = ['#c5a059', '#000000', '#ffffff', '#e0b461'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// Update URL
function updateURL() {
    const newURL = `${window.location.pathname}?step=${evalState.currentStep}`;
    window.history.pushState({ step: evalState.currentStep }, '', newURL);
}

// Handle browser back/forward
window.addEventListener('popstate', (event) => {
    if (event.state && typeof event.state.step === 'number') {
        evalState.currentStep = event.state.step;
        renderStep();
    }
});

// Global exposure
window.evalPage = {
    nextStep,
    goBack,
    selectOption,
    submitForm
};

// Init when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEvaluation);
} else {
    initEvaluation();
}
