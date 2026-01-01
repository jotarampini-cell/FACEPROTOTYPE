
// ==========================================
// CENTRALIZED STICKY PLAYER INJECTION
// Source of Truth: Tony Robbins Style (B&W, Optimized)
// ==========================================
const STICKY_PLAYER_HTML = `
<div id="sticky-player" class="sticky-player">
    <div class="player-container">
        <div class="player-left">
            <img src="" alt="Album Art" id="player-art">
            <div class="player-info">
                <h4 id="player-title">Episode Title</h4>
                <span id="player-author">FACE Innovation</span>
            </div>
        </div>
        <div class="player-center">
            <div class="player-controls">
                <button class="player-btn" onclick="skipStickyTime(-15)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                        <path d="M3 3v5h5"/>
                        <text x="12" y="14" text-anchor="middle" font-size="7" font-family="Inter, sans-serif" stroke="none" fill="currentColor">15</text>
                    </svg>
                </button>
                <button class="player-btn play-toggle" id="sticky-play-btn" onclick="toggleStickyPlay()">
                    <svg id="sticky-icon-play" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <svg id="sticky-icon-pause" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                </button>
                <button class="player-btn" onclick="skipStickyTime(15)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                        <path d="M21 3v5h-5"/>
                        <text x="12" y="14" text-anchor="middle" font-size="7" font-family="Inter, sans-serif" stroke="none" fill="currentColor">15</text>
                    </svg>
                </button>
            </div>
            <!-- Progress bar exposed for mobile via CSS now -->
            <div class="player-progress-bar">
                <span id="player-current-time">0:00</span>
                <div class="progress-track" id="sticky-progress-container">
                    <div class="progress-fill" id="sticky-progress-bar"></div>
                </div>
                <span id="player-duration">--:--</span>
            </div>
        </div>
        <div class="player-right">
            <button class="player-btn close-player" onclick="closeStickyPlayer()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
    <audio id="sticky-audio"></audio>
</div>
`;

function injectStickyPlayer() {
    if (!document.getElementById('sticky-player')) {
        document.body.insertAdjacentHTML('beforeend', STICKY_PLAYER_HTML);
        console.log("Global Sticky Player injected successfully.");
    }
}

// Inject immediately when script loads to ensure elements exist for binding
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStickyPlayer);
} else {
    injectStickyPlayer();
}
