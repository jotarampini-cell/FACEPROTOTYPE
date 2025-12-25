// Mock Videos Data for Demo
// Replace with real API calls in production

const MOCK_VIDEOS = [
    {
        id: 'v001',
        title: 'Introducción a FACE',
        description: 'Descubre los fundamentos de la metodología FACE y cómo puede transformar tu empresa',
        duration: '12:34',
        thumbnail: 'https://picsum.photos/seed/face1/400/225',
        category: 'fundamentos',
        locked: false,
        completed: true,
        progress: 100,
        views: 1250,
        likes: 89
    },
    {
        id: 'v002',
        title: 'Foco: Encuentra el Problema Real',
        description: 'Aprende a identificar el dolor crítico que debes resolver en tu negocio',
        duration: '18:45',
        thumbnail: 'https://picsum.photos/seed/face2/400/225',
        category: 'metodologia',
        locked: false,
        completed: true,
        progress: 100,
        views: 980,
        likes: 67
    },
    {
        id: 'v003',
        title: 'Adaptación: Observa y Aprende',
        description: 'Cómo identificar soluciones exitosas y adaptarlas a tu contexto',
        duration: '22:15',
        thumbnail: 'https://picsum.photos/seed/face3/400/225',
        category: 'metodologia',
        locked: false,
        completed: false,
        progress: 45,
        views: 756,
        likes: 54
    },
    {
        id: 'v004',
        title: 'Cultura de Innovación',
        description: 'Construye una cultura organizacional que celebre la creatividad',
        duration: '16:30',
        thumbnail: 'https://picsum.photos/seed/face4/400/225',
        category: 'avanzado',
        locked: false,
        completed: false,
        progress: 0,
        views: 543,
        likes: 42
    },
    {
        id: 'v005',
        title: 'Ejecución Ágil',
        description: 'Implementa tus ideas con velocidad y eficiencia',
        duration: '20:10',
        thumbnail: 'https://picsum.photos/seed/face5/400/225',
        category: 'metodologia',
        locked: false,
        completed: false,
        progress: 0,
        views: 432,
        likes: 38
    },
    {
        id: 'v006',
        title: 'Casos de Éxito Venezolanos',
        description: 'Empresas que transformaron su negocio con FACE',
        duration: '25:40',
        thumbnail: 'https://picsum.photos/seed/face6/400/225',
        category: 'fundamentos',
        locked: false,
        completed: false,
        progress: 0,
        views: 1100,
        likes: 95
    }
];

// Helper functions
function getVideos(filter = 'all') {
    switch (filter) {
        case 'completed':
            return MOCK_VIDEOS.filter(v => v.completed);
        case 'in-progress':
            return MOCK_VIDEOS.filter(v => v.progress > 0 && !v.completed);
        case 'new':
            return MOCK_VIDEOS.filter(v => v.progress === 0);
        default:
            return MOCK_VIDEOS;
    }
}

function getVideosByCategory(category) {
    return MOCK_VIDEOS.filter(v => v.category === category);
}

function getVideoById(id) {
    return MOCK_VIDEOS.find(v => v.id === id);
}

// For production: replace with real API
// const USE_REAL_API = false;
// const videoService = USE_REAL_API ? new RealVideoAPI() : { getVideos, getVideosByCategory, getVideoById };
