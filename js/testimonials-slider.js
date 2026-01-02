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
