document.querySelector('.search-btn').addEventListener('click', function() {
    const searches = {
        temple: document.querySelector('.search-input[placeholder*="temple"]').value,
        accommodations: document.querySelector('.search-input[placeholder*="Accommodations"]').value,
        transport: document.querySelector('.search-input[placeholder*="Transport"]').value
    };
    console.log('Search initiated:', searches);
    // Add your search logic here
});

document.querySelectorAll('.search-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.closest('.search-container').style.boxShadow = '0 8px 40px rgba(0,0,0,0.2)';
        this.closest('.search-container').style.borderColor = '#4CAF50';
    });
    
    input.addEventListener('blur', function() {
        this.closest('.search-container').style.boxShadow = '0 6px 30px rgba(0,0,0,0.15)';
        this.closest('.search-container').style.borderColor = '#e0e0e0';
    });
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.querySelector('.search-btn').click();
        }
    });
});

// Testimonial slider

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const slider = document.getElementById('testimonialSlider');
const testimonialSection = document.getElementById('testimonialSection');
let autoplayInterval;

function updateActiveSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

function scrollSlider(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  const slideOffsetLeft = slides[currentSlide].offsetLeft;
  slider.scrollTo({ left: slideOffsetLeft, behavior: 'smooth' });
  updateActiveSlide();
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    scrollSlider(1);
  }, 5000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

testimonialSection.addEventListener('mouseenter', stopAutoplay);
testimonialSection.addEventListener('mouseleave', startAutoplay);

window.addEventListener('load', () => {
  updateActiveSlide();
  startAutoplay();
});

window.addEventListener('resize', () => {
  const slideOffsetLeft = slides[currentSlide].offsetLeft;
  slider.scrollTo({ left: slideOffsetLeft });
});

