// Authentication UI Controller

document.addEventListener('DOMContentLoaded', () => {
    initAuthUI();
    checkAuthState();
});

function initAuthUI() {
    createAuthModals();
    createBottomNav();
    attachEventListeners();
}

// Create auth modals
function createAuthModals() {
    const overlay = document.createElement('div');
    overlay.className = 'auth-overlay';
    overlay.id = 'auth-overlay';
    overlay.innerHTML = `
        <!-- Login Modal -->
        <div class="auth-modal" id="login-modal" style="display: none;">
            <button class="auth-close" onclick="closeAuthModal()">×</button>
            <div class="auth-header">
                <div class="auth-logo">FACE</div>
                <h2>Bienvenido de nuevo</h2>
                <p>Accede a tu cuenta para continuar</p>
            </div>
            
            <form class="auth-form" id="login-form">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="login-email" required placeholder="tu@email.com">
                    <span class="error-message" id="login-email-error"></span>
                </div>
                
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" id="login-password" required placeholder="••••••••">
                    <span class="error-message" id="login-password-error"></span>
                </div>
                
                <button type="submit" class="auth-submit">Iniciar Sesión</button>
            </form>
            
            <div class="auth-divider">o continúa con</div>
            
            <button class="google-signin" onclick="handleGoogleSignIn()">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google">
                Continuar con Google
            </button>
            
            <div class="demo-credentials">
                <strong>📧 Credenciales Demo:</strong>
                <code>demo@face.com</code> / <code>demo123</code>
            </div>
            
            <div class="auth-switch">
                ¿No tienes cuenta? <a onclick="switchToSignup()">Regístrate</a>
            </div>
        </div>
        
        <!-- Signup Modal -->
        <div class="auth-modal" id="signup-modal" style="display: none;">
            <button class="auth-close" onclick="closeAuthModal()">×</button>
            <div class="auth-header">
                <div class="auth-logo">FACE</div>
                <h2>Crea tu cuenta</h2>
                <p>Accede gratis a todo el contenido</p>
            </div>
            
            <form class="auth-form" id="signup-form">
                <div class="form-group">
                    <label>Nombre completo</label>
                    <input type="text" id="signup-name" required placeholder="Tu nombre">
                </div>
                
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="signup-email" required placeholder="tu@email.com">
                </div>
                
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" id="signup-password" required placeholder="Mínimo 6 caracteres">
                </div>
                
                <button type="submit" class="auth-submit">Crear Cuenta Gratis</button>
            </form>
            
            <div class="auth-divider">o regístrate con</div>
            
            <button class="google-signin" onclick="handleGoogleSignIn()">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google">
                Continuar con Google
            </button>
            
            <div class="auth-switch">
                ¿Ya tienes cuenta? <a onclick="switchToLogin()">Inicia sesión</a>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

// Create bottom navigation
function createBottomNav() {
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'bottom-nav';
    bottomNav.id = 'bottom-nav';
    bottomNav.innerHTML = `
        <a href="#dashboard" class="nav-item active" data-page="dashboard">
            <span class="nav-icon">🏠</span>
            <span>Inicio</span>
        </a>
        <a href="#library" class="nav-item" data-page="library">
            <span class="nav-icon">📚</span>
            <span>Biblioteca</span>
        </a>
        <a href="#challenges" class="nav-item" data-page="challenges">
            <span class="nav-icon">🎯</span>
            <span>Retos</span>
        </a>
        <a href="#profile" class="nav-item" data-page="profile">
            <span class="nav-icon">👤</span>
            <span>Perfil</span>
        </a>
    `;
    document.body.appendChild(bottomNav);
}

// Attach event listeners
function attachEventListeners() {
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);

    // Signup form
    document.getElementById('signup-form').addEventListener('submit', handleSignup);

    // Close overlay on click outside
    document.getElementById('auth-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'auth-overlay') {
            closeAuthModal();
        }
    });

    // Bottom nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', handleNavClick);
    });
}

// Handle login
async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const submitBtn = e.target.querySelector('.auth-submit');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Iniciando sesión...';

    try {
        const result = await auth.signIn(email, password);
        if (result.success) {
            closeAuthModal();
            redirectToDashboard();
        }
    } catch (error) {
        showError('login', error.error || 'Error al iniciar sesión');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Iniciar Sesión';
    }
}

// Handle signup
async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const submitBtn = e.target.querySelector('.auth-submit');

    if (password.length < 6) {
        showError('signup', 'La contraseña debe tener al menos 6 caracteres');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Creando cuenta...';

    try {
        const result = await auth.signUp(email, password, name);
        if (result.success) {
            closeAuthModal();
            redirectToDashboard();
        }
    } catch (error) {
        showError('signup', error.error || 'Error al crear cuenta');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Crear Cuenta Gratis';
    }
}

// Handle Google Sign-In
async function handleGoogleSignIn() {
    try {
        const result = await auth.signInWithGoogle();
        if (result.success) {
            closeAuthModal();
            redirectToDashboard();
        }
    } catch (error) {
        console.error('Google sign-in error:', error);
    }
}

// Show login modal
function showLoginModal() {
    const overlay = document.getElementById('auth-overlay');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');

    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Show signup modal
function showSignupModal() {
    const overlay = document.getElementById('auth-overlay');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');

    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Switch modals
function switchToSignup() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('signup-modal').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('signup-modal').style.display = 'none';
    document.getElementById('login-modal').style.display = 'block';
}

// Close auth modal
function closeAuthModal() {
    const overlay = document.getElementById('auth-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('signup-modal').style.display = 'none';
    }, 300);
}

// Show error
function showError(form, message) {
    alert(message); // Simple for demo, can be improved
}

// Check auth state
function checkAuthState() {
    const user = auth.getCurrentUser();
    if (user) {
        showBottomNav();
        // Can redirect or show dashboard elements
    }
}

// Show bottom nav
function showBottomNav() {
    document.getElementById('bottom-nav').classList.add('show');
}

// Handle nav click
function handleNavClick(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    const page = e.currentTarget.dataset.page;
    // Navigate to page (implement routing)
    console.log('Navigate to:', page);
}

// Redirect to dashboard
function redirectToDashboard() {
    // Redirect to the actual dashboard app
    window.location.href = 'app.html';
}

// Make functions global
window.showLoginModal = showLoginModal;
window.showSignupModal = showSignupModal;
window.switchToSignup = switchToSignup;
window.switchToLogin = switchToLogin;
window.closeAuthModal = closeAuthModal;
window.handleGoogleSignIn = handleGoogleSignIn;
