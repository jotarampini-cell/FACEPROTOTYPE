// Auth Guard - Protects app.html from unauthorized access
// Redirects to landing page if user is not authenticated

class AuthGuard {
    constructor() {
        this.checkAuth();
    }

    checkAuth() {
        const user = auth.getCurrentUser();
        const currentPage = window.location.pathname;

        // If we're on app.html and NO user is logged in
        if (currentPage.includes('app.html') && !user) {
            console.log('AuthGuard: No user found, redirecting to landing');
            // Save the attempted route
            localStorage.setItem('redirectAfterLogin', window.location.href);
            // Redirect to landing with login modal
            window.location.href = 'index.html?showLogin=true';
            return;
        }

        // If we're on index.html and there's a showLogin parameter
        if (currentPage.includes('index.html')) {
            const params = new URLSearchParams(window.location.search);
            if (params.get('showLogin') === 'true') {
                // Wait for authUI to load, then show modal
                setTimeout(() => {
                    if (typeof showLoginModal === 'function') {
                        showLoginModal();
                    }
                }, 500);
            }
        }

        // If user is logged in and on index.html, could show "Go to Dashboard" button
        if (currentPage.includes('index.html') && user) {
            this.showDashboardButton();
        }
    }

    showDashboardButton() {
        // Add a "Go to Dashboard" button in the header
        const header = document.querySelector('.main-header .header-container');
        if (header && !document.getElementById('dashboard-btn')) {
            const btn = document.createElement('a');
            btn.id = 'dashboard-btn';
            btn.href = 'app.html';
            btn.className = 'btn btn-primary';
            btn.textContent = 'Ir al Dashboard';
            btn.style.cssText = 'padding: 0.5rem 1rem; font-size: 0.9rem;';
            header.appendChild(btn);
        }
    }

    static redirectAfterLogin() {
        const redirect = localStorage.getItem('redirectAfterLogin');
        if (redirect) {
            localStorage.removeItem('redirectAfterLogin');
            window.location.href = redirect;
        } else {
            window.location.href = 'app.html';
        }
    }
}

// Initialize auth guard
const authGuard = new AuthGuard();

// Make redirectAfterLogin available globally
window.redirectAfterLogin = AuthGuard.redirectAfterLogin;
