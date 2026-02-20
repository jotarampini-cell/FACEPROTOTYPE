// Main App Logic
// Handles app initialization and global functions

// Initialize app
function initApp() {
    const user = auth.getCurrentUser();

    if (!user) {
        console.error('No user found in app');
        return;
    }

    // Update header with user info
    updateUserHeader(user);

    console.log('App initialized for user:', user.displayName);
}

// Update user info in header
function updateUserHeader(user) {
    const userNameEl = document.getElementById('user-name-header');
    const userAvatarEl = document.getElementById('user-avatar');

    if (userNameEl) {
        userNameEl.textContent = user.displayName;
    }

    if (userAvatarEl) {
        userAvatarEl.src = user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName)}&background=0066FF&color=fff`;
    }
}

// Handle sign out
function handleSignOut() {
    if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
        auth.signOut();
        window.location.href = '/home';
    }
}

// Play video (placeholder)
function playVideo(videoId) {
    const video = getVideoById(videoId);
    if (video) {
        alert(`Reproduciendo: ${video.title}\n\nEn producción, esto abriría el reproductor de video.`);
        // In production: open video player modal or navigate to video page
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Make functions globally available
window.handleSignOut = handleSignOut;
window.playVideo = playVideo;
