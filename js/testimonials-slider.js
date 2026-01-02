/* =========================================
   TESTIMONIALS SLIDER - JAVASCRIPT CONTROLLER
   ========================================= */

let currentSlide = 0;
const slides = document.querySelectorAll('.sync-review');
const bgs = document.querySelectorAll('.sync-bg');
const dots = document.querySelectorAll('.p-dot');
const totalSlides = slides.length;

// Main Update Function - Syncs Everything
function updateSlider() {
    // 1. Deactivate all elements
    slides.forEach(s => s.classList.remove('active'));
    bgs.forEach(b => b.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    // 2. Activate current index
    slides[currentSlide].classList.add('active');
    bgs[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Navigation Functions
function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) currentSlide = 0;
    updateSlider();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// --- MOBILE SWIPE SUPPORT ---
let touchStartX = 0;
let touchEndX = 0;
const sliderZone = document.querySelector('.tony-sync-slider');

if (sliderZone) {
    sliderZone.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderZone.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const threshold = 50; // Minimum distance to consider swipe
    if (touchEndX < touchStartX - threshold) {
        nextSlide(); // Swiped left -> Next
    }
    if (touchEndX > touchStartX + threshold) {
        prevSlide(); // Swiped right -> Previous
    }
}

// Optional: Autoplay (uncomment to enable)
// setInterval(nextSlide, 6000);
