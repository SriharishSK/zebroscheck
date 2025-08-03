document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const slideInterval = 4000;

  function nextSlide() {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slide');
  }

  setInterval(nextSlide, slideInterval);
});
  const keywords = document.querySelectorAll('.floating-keyword');
  keywords.forEach((keyword) => {
    const randomX = Math.random() * 80 - 40;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 8;

    keyword.style.left = `${Math.random() * 80 + 10}%`;
    keyword.style.top = `${Math.random() * 50 + 20}%`;
    keyword.style.animationDelay = `${delay}s`;
    keyword.style.animationDuration = `${duration}s`;
  });

    function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }


  document.addEventListener('DOMContentLoaded', function () {
    // --- Main Hero Slider ---
    const heroSlides = document.querySelectorAll('#hero-section .slide');
    let currentHeroSlide = 0;
    const heroSlideInterval = 4000;

    function nextHeroSlide() {
        if (heroSlides.length > 0) {
            heroSlides[currentHeroSlide].classList.remove('active-slide');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.add('active-slide');
        }
    }

    // --- Portfolio Section Slider ---
    const portfolioSlides = document.querySelectorAll('.portfolio-slide');
    let currentPortfolioSlide = 0;
    const portfolioSlideInterval = 3000; // A different interval for variety

    function nextPortfolioSlide() {
        if (portfolioSlides.length > 0) {
            portfolioSlides[currentPortfolioSlide].classList.remove('active');
            currentPortfolioSlide = (currentPortfolioSlide + 1) % portfolioSlides.length;
            portfolioSlides[currentPortfolioSlide].classList.add('active');
        }
    }

    // Start both sliders
    setInterval(nextHeroSlide, heroSlideInterval);
    setInterval(nextPortfolioSlide, portfolioSlideInterval);
});

// --- Mobile Menu Toggle ---
function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


 
  



 