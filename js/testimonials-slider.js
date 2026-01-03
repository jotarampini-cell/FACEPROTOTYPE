let currentSlide = 0;
const reviews = document.querySelectorAll('.sync-review');
const bgs = document.querySelectorAll('.sync-bg');
const navItems = document.querySelectorAll('.avatar-nav-item');
const totalSlides = reviews.length;

function updateSlider() {
    // 1. Reset all
    reviews.forEach(r => r.classList.remove('active'));
    bgs.forEach(b => b.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));

    // 2. Activate current
    reviews[currentSlide].classList.add('active');
    bgs[currentSlide].classList.add('active');
    navItems[currentSlide].classList.add('active');
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Auto-play (Optional)
setInterval(() => {
    currentSlide++;
    if (currentSlide >= totalSlides) currentSlide = 0;
    updateSlider();
}, 6000);

// Swipe Support
const sliderSection = document.querySelector('.tony-cinematic-slider');
let touchStartX = 0;
let touchEndX = 0;

if (sliderSection) {
    sliderSection.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderSection.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
        // Swipe Left -> Next Slide
        currentSlide++;
        if (currentSlide >= totalSlides) currentSlide = 0;
        updateSlider();
    }
    if (touchEndX > touchStartX + threshold) {
        // Swipe Right -> Prev Slide
        currentSlide--;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        updateSlider();
    }
}
