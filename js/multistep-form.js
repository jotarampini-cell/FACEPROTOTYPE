/**
 * Multi-Step Business Evaluation Form
 * Connects to "Iniciar ahora" button in global header
 */

// Form Data
const formData = {
    currentStep: 0,
    answers: {},
    leadInfo: {}
};

// Form Steps Configuration
const formSteps = [
    // Step 0: Welcome
    {
        type: 'welcome',
        title: 'Evaluación de Perfil Empresarial',
        subtitle: 'Completa estos 5 puntos clave para preparar tu diagnóstico de innovación y sesión de consultoría estratégica.',
        cta: 'COMENZAR EVALUACIÓN'
    },
    // Step 1: Business Focus
    {
        type: 'question',
        question: '¿Cuál es el área de tu negocio a la que le estás dedicando más tiempo, energía o presupuesto actualmente?',
        options: [
            'A. Ventas y Captación de Clientes',
            'B. Organización y Procesos',
            'C. Desarrollo de Nuevos Productos/Servicios',
            'D. Talento y Cultura'
        ]
    },
    // Step 2: Company Age
    {
        type: 'question',
        question: '¿Cuántos años tiene tu empresa operando en el mercado?',
        options: [
            'A. Menos de 3 años',
            'B. Entre 3 y 10 años',
            'C. Entre 10 y 25 años',
            'D. Más de 25 años'
        ]
    },
    // Step 3: Business Stage
    {
        type: 'question',
        question: '¿Cómo describirías la etapa actual en la que se encuentra tu negocio?',
        options: [
            'A. Arranque / Validación',
            'B. Crecimiento Acelerado',
            'C. Consolidación / Madurez',
            'D. Reinvención / Cambio de Rumbo'
        ]
    },
    // Step 4: Team Structure
    {
        type: 'question',
        question: 'Selecciona la descripción que mejor se ajusta a la estructura de tu equipo hoy:',
        options: [
            'A. Estructura Flexible: Todos hacemos de todo y yo superviso directamente.',
            'B. Estructura Jerárquica: Departamentos definidos y gerentes que toman decisiones.',
            'C. Estructura Familiar: La propiedad y dirección son principalmente de la familia.',
            'D. Estructura Institucional: Organización grande o regulada con procesos formales.'
        ]
    },
    // Step 5: Desired Outcome
    {
        type: 'question',
        question: 'Para aprovechar al máximo tu sesión de diagnóstico, ¿qué resultado te gustaría obtener?',
        options: [
            'A. Vender más o llegar a nuevos mercados.',
            'B. Que mi equipo trabaje mejor y dependa menos de mí.',
            'C. Modernizar la empresa sin perder nuestra esencia.',
            'D. Tener un plan claro de innovación.'
        ]
    },
    // Step 6: Lead Capture
    {
        type: 'lead',
        title: '¡Perfil Procesado!',
        subtitle: 'Para enviarte el diagnóstico y agendar tu sesión estratégica gratuita, ingresa tus datos directos.',
        fields: [
            { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
            { name: 'apellido', label: 'Apellido', type: 'text', placeholder: 'Tu apellido' },
            { name: 'email', label: 'Correo Electrónico Corporativo', type: 'email', placeholder: 'nombre@empresa.com' },
            { name: 'telefono', label: 'Número de Teléfono (WhatsApp)', type: 'tel', placeholder: '+58 414 1234567' }
        ],
        cta: 'OBTENER MI DIAGNÓSTICO AHORA'
    }
];

// DOM Elements
let overlay, container, progressFill, content, backBtn, closeBtn;

// Initialize Form
function initMultiStepForm() {
    // Create overlay structure
    createFormHTML();

    // Get DOM references
    overlay = document.getElementById('multistep-form-overlay');
    container = overlay.querySelector('.form-container');
    progressFill = overlay.querySelector('.form-progress-fill');
    content = overlay.querySelector('.form-content');
    backBtn = overlay.querySelector('.form-back-btn');
    closeBtn = overlay.querySelector('.form-close-btn');

    // Attach event listeners
    closeBtn.addEventListener('click', closeForm);
    backBtn.addEventListener('click', previousStep);

    // Close on overlay click (outside container)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeForm();
        }
    });

    // Connect to "Iniciar ahora" button
    connectToHeader();

    console.log('Multi-Step Form initialized');
}

// Create Form HTML
function createFormHTML() {
    const formHTML = `
        <div id="multistep-form-overlay" class="form-overlay hidden">
            <div class="form-container">
                <button class="form-close-btn" aria-label="Cerrar">×</button>
                
                <div class="form-progress-bar">
                    <div class="form-progress-fill"></div>
                </div>
                
                <div class="form-content">
                    <!-- Dynamic content -->
                </div>
                
                <button class="form-back-btn">← Atrás</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', formHTML);
}

// Connect to Header Button
function connectToHeader() {
    // Wait for menu.js to inject header
    const checkHeader = setInterval(() => {
        const iniciarnowBtn = document.querySelector('.nav-cta-btn');
        if (iniciarnowBtn) {
            clearInterval(checkHeader);
            iniciarnowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openForm();
            });
            console.log('Form connected to "Iniciar ahora" button');
        }
    }, 100);

    // Safety timeout
    setTimeout(() => clearInterval(checkHeader), 5000);
}

// Open Form
function openForm() {
    formData.currentStep = 0;
    formData.answers = {};
    formData.leadInfo = {};

    renderStep();
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close Form
function closeForm() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// Render Current Step
function renderStep() {
    const step = formSteps[formData.currentStep];
    updateProgress();
    updateBackButton();

    if (step.type === 'welcome') {
        renderWelcome(step);
    } else if (step.type === 'question') {
        renderQuestion(step);
    } else if (step.type === 'lead') {
        renderLeadForm(step);
    }
}

// Render Welcome Screen
function renderWelcome(step) {
    content.innerHTML = `
        <h1 class="form-title">${step.title}</h1>
        <p class="form-subtitle">${step.subtitle}</p>
        <button class="form-cta-btn" onclick="window.multistepForm.nextStep()">${step.cta}</button>
    `;
}

// Render Question Screen
function renderQuestion(step) {
    const optionsHTML = step.options.map((option, index) => `
        <button class="form-option-btn" onclick="window.multistepForm.selectOption(${index})">
            ${option}
        </button>
    `).join('');

    content.innerHTML = `
        <h2 class="form-question">${step.question}</h2>
        <div class="form-options">
            ${optionsHTML}
        </div>
    `;
}

// Render Lead Capture Form
function renderLeadForm(step) {
    const fieldsHTML = step.fields.map(field => `
        <div class="form-input-group">
            <label class="form-input-label">${field.label}</label>
            <input 
                type="${field.type}" 
                name="${field.name}" 
                class="form-input-field" 
                placeholder="${field.placeholder}"
                required
            >
        </div>
    `).join('');

    content.innerHTML = `
        <h1 class="form-title">${step.title}</h1>
        <p class="form-subtitle">${step.subtitle}</p>
        
        <form class="form-inputs" id="lead-form">
            ${fieldsHTML}
        </form>
        
        <div class="form-privacy">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            Tus datos están protegidos y son 100% confidenciales.
        </div>
        
        <button class="form-cta-btn" onclick="window.multistepForm.submitForm()">${step.cta}</button>
    `;
}

// Select Option (Auto-advance)
function selectOption(index) {
    const step = formSteps[formData.currentStep];
    formData.answers[`question${formData.currentStep}`] = step.options[index];

    // Visual feedback
    const buttons = content.querySelectorAll('.form-option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');

    // Auto-advance after 400ms
    setTimeout(() => {
        nextStep();
    }, 400);
}

// Next Step
function nextStep() {
    if (formData.currentStep < formSteps.length - 1) {
        formData.currentStep++;
        renderStep();
    }
}

// Previous Step
function previousStep() {
    if (formData.currentStep > 0) {
        formData.currentStep--;
        renderStep();
    }
}

// Update Progress Bar
function updateProgress() {
    const progress = (formData.currentStep / (formSteps.length - 1)) * 100;
    progressFill.style.width = progress + '%';
}

// Update Back Button Visibility
function updateBackButton() {
    if (formData.currentStep === 0) {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }
}

// Submit Lead Form
function submitForm() {
    const form = document.getElementById('lead-form');

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Collect form data
    const formElements = form.elements;
    for (let element of formElements) {
        if (element.name) {
            formData.leadInfo[element.name] = element.value;
        }
    }

    // Log to console (can be replaced with API call)
    console.log('Form Submitted!');
    console.log('Answers:', formData.answers);
    console.log('Lead Info:', formData.leadInfo);

    // Show success message
    content.innerHTML = `
        <h1 class="form-title">¡Gracias!</h1>
        <p class="form-subtitle">Tu diagnóstico está en camino. Nos pondremos en contacto contigo muy pronto para agendar tu sesión estratégica.</p>
        <button class="form-cta-btn" onclick="window.multistepForm.closeForm()">CERRAR</button>
    `;

    // Hide back button
    backBtn.classList.add('hidden');
}

// Global exposure
window.multistepForm = {
    nextStep,
    previousStep,
    selectOption,
    submitForm,
    closeForm,
    openForm
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMultiStepForm);
} else {
    initMultiStepForm();
}
