
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    if (!slider) {
        return;
    }

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slides = Array.from(slider.querySelectorAll('img'));
    const slideCount = slides.length;
    let slideIndex = 0;
    let slideInterval;

    function updateSlider() {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        if (slides[slideIndex]) {
            slides[slideIndex].classList.add('active');
        }
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
        resetInterval();
    }


    function showPrevSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
        resetInterval();
    }

    function startInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(showNextSlide, 2800);
    }

    function resetInterval() {
        startInterval();
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            showPrevSlide();
        });

        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            showNextSlide();
        });
    }
    updateSlider();
    startInterval();

    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        startInterval();
    });
});
