// Mock Authentication System for Demo
// Production-ready architecture with dummy data

class MockAuth {
    constructor() {
        this.currentUser = null;
        this.loadCurrentUser();
    }

    // Demo users pre-loaded
    getDemoUsers() {
        return {
            'demo@face.com': {
                uid: 'demo-001',
                email: 'demo@face.com',
                password: 'demo123',
                displayName: 'Carlos Rodríguez',
                photoURL: 'https://i.pravatar.cc/150?img=12',
                createdAt: '2024-01-15',
                stats: {
                    videosCompleted: 12,
                    totalHours: 24.5,
                    activeChallenges: 3,
                    level: 'Intermedio',
                    points: 450
                }
            },
            'investor@face.com': {
                uid: 'investor-002',
                email: 'investor@face.com',
                password: 'investor123',
                displayName: 'María González',
                photoURL: 'https://i.pravatar.cc/150?img=45',
                createdAt: '2024-12-01',
                stats: {
                    videosCompleted: 5,
                    totalHours: 8,
                    activeChallenges: 1,
                    level: 'Principiante',
                    points: 150
                }
            }
        };
    }

    // Load persisted user
    loadCurrentUser() {
        const stored = localStorage.getItem('faceUser');
        if (stored) {
            this.currentUser = JSON.parse(stored);
        }
    }

    // Sign in with email/password
    async signIn(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = this.getDemoUsers();
                const user = users[email];

                if (user && user.password === password) {
                    const { password: _, ...userWithoutPassword } = user;
                    this.currentUser = userWithoutPassword;
                    localStorage.setItem('faceUser', JSON.stringify(userWithoutPassword));
                    resolve({ user: userWithoutPassword, success: true });
                } else {
                    reject({ error: 'Credenciales inválidas' });
                }
            }, 800); // Simulate network delay
        });
    }

    // Sign up new user
    async signUp(email, password, displayName) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    uid: 'user-' + Date.now(),
                    email,
                    displayName,
                    photoURL: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                    createdAt: new Date().toISOString(),
                    stats: {
                        videosCompleted: 0,
                        totalHours: 0,
                        activeChallenges: 0,
                        level: 'Principiante',
                        points: 0
                    }
                };

                this.currentUser = newUser;
                localStorage.setItem('faceUser', JSON.stringify(newUser));
                resolve({ user: newUser, success: true });
            }, 1000);
        });
    }

    // Google Sign-In (simulated)
    async signInWithGoogle() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const googleUser = {
                    uid: 'google-' + Date.now(),
                    email: 'demo.google@gmail.com',
                    displayName: 'Usuario Google',
                    photoURL: 'https://i.pravatar.cc/150?img=32',
                    createdAt: new Date().toISOString(),
                    stats: {
                        videosCompleted: 0,
                        totalHours: 0,
                        activeChallenges: 0,
                        level: 'Principiante',
                        points: 0
                    }
                };

                this.currentUser = googleUser;
                localStorage.setItem('faceUser', JSON.stringify(googleUser));
                resolve({ user: googleUser, success: true });
            }, 1200);
        });
    }

    // Sign out
    signOut() {
        this.currentUser = null;
        localStorage.removeItem('faceUser');
        window.location.href = '/';
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is authenticated
    isAuthenticated() {
        return this.currentUser !== null;
    }
}

// Export singleton instance
const auth = new MockAuth();

// For production: switch to Firebase
// const auth = USE_REAL_AUTH ? new FirebaseAuth() : new MockAuth();
