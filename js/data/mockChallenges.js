// Mock Challenges Data for Demo
// Replace with real API calls in production

const MOCK_CHALLENGES = [
    {
        id: 'c001',
        title: 'Identifica un Dolor en tu Empresa',
        description: 'Aplica el paso FOCO a un problema real de tu negocio. Define el dolor crítico que necesitas resolver.',
        status: 'active',
        progress: 60,
        dueDate: '2025-01-10',
        points: 50,
        difficulty: 'Principiante',
        steps: [
            { id: 1, text: 'Identifica 3 problemas en tu empresa', completed: true },
            { id: 2, text: 'Prioriza el más crítico', completed: true },
            { id: 3, text: 'Define el dolor en una frase', completed: false }
        ]
    },
    {
        id: 'c002',
        title: 'Benchmarking de Soluciones',
        description: 'Encuentra 3 empresas que resolvieron problemas similares al tuyo',
        status: 'active',
        progress: 30,
        dueDate: '2025-01-15',
        points: 75,
        difficulty: 'Intermedio',
        steps: [
            { id: 1, text: 'Investiga empresas similares', completed: true },
            { id: 2, text: 'Documenta sus soluciones', completed: false },
            { id: 3, text: 'Identifica patrones', completed: false }
        ]
    },
    {
        id: 'c003',
        title: 'Prototipo Rápido',
        description: 'Crea un MVP de tu solución en 1 semana',
        status: 'pending',
        progress: 0,
        dueDate: '2025-01-20',
        points: 100,
        difficulty: 'Avanzado',
        steps: [
            { id: 1, text: 'Define características mínimas', completed: false },
            { id: 2, text: 'Construye prototipo', completed: false },
            { id: 3, text: 'Prueba con 5 usuarios', completed: false }
        ]
    }
];

// Helper functions
function getChallenges(filter = 'all') {
    switch (filter) {
        case 'active':
            return MOCK_CHALLENGES.filter(c => c.status === 'active');
        case 'completed':
            return MOCK_CHALLENGES.filter(c => c.status === 'completed');
        case 'pending':
            return MOCK_CHALLENGES.filter(c => c.status === 'pending');
        default:
            return MOCK_CHALLENGES;
    }
}

function getChallengeById(id) {
    return MOCK_CHALLENGES.find(c => c.id === id);
}

// For production: replace with real API
// const USE_REAL_API = false;
// const challengeService = USE_REAL_API ? new RealChallengeAPI() : { getChallenges, getChallengeById };
