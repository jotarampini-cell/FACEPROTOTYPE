
/* ======================================
   UX ENHANCEMENTS - JAVASCRIPT
   ====================================== */

// 1. Scroll-triggered Animations (Intersection Observer)
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 100); // Stagger effect
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all program cards
    document.querySelectorAll('.wide-card').forEach(card => {
        cardObserver.observe(card);
    });
});

// 2. Proximity Modal for 'Próximamente'
function showProximityModal(programName) {
    const modal = document.getElementById('proximityModal');
    const programTitle = document.getElementById('modalProgramName');
    if (programTitle) {
        programTitle.textContent = programName || 'este programa';
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProximityModal() {
    const modal = document.getElementById('proximityModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on outside click
document.addEventListener('click', function (e) {
    const modal = document.getElementById('proximityModal');
    if (modal && e.target === modal) {
        closeProximityModal();
    }
});

// Handle newsletter form submission
function handleNotifyForm(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    // Simple validation
    if (!email || !email.includes('@')) {
        alert('Por favor ingresa un email válido');
        return;
    }

    // Simulate submission (replace with real API call)
    console.log('Newsletter signup:', email);

    // Show success message
    const successMsg = e.target.querySelector('.notify-success');
    if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.textContent = '✓ ¡Gracias! Te notificaremos cuando esté disponible.';
    }

    // Reset form
    e.target.reset();

    // Close modal after 2 seconds
    setTimeout(() => {
        closeProximityModal();
        if (successMsg) successMsg.style.display = 'none';
    }, 2000);
}

// 3. Counter Animation for Social Proof
function animateCounters() {
    const counters = document.querySelectorAll('.proof-number[data-target]');

    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + (counter.dataset.suffix || '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.dataset.suffix || '');
            }
        };

        updateCounter();
    });
}

// Trigger counter animation when section is in view
const proofObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            proofObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Observe social proof section on page load
document.addEventListener('DOMContentLoaded', function () {
    const proofSection = document.querySelector('.social-proof-section');
    if (proofSection) {
        proofObserver.observe(proofSection);
    }
});
