const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Переменные для автоматической прокрутки
let autoplayInterval;
const autoplayDelay = 3000; 

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// *** НОВАЯ ФУНКЦИЯ ДЛЯ АВТОМАТИЧЕСКОЙ ПРОКРУТКИ ***
function startAutoplay() {
  autoplayInterval = setInterval(showNextSlide, autoplayDelay);
}

// Опционально: функция для остановки автоматической прокрутки
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Устанавливаем обработчики событий для кнопок
// Добавляем логику для остановки/перезапуска автопрокрутки при ручной навигации
prevButton.addEventListener('click', () => {
  stopAutoplay(); // Останавливаем автопрокрутку
  showPreviousSlide();
  startAutoplay(); // Запускаем снова
});

nextButton.addEventListener('click', () => {
  stopAutoplay(); // Останавливаем автопрокрутку
  showNextSlide();
  startAutoplay(); // Запускаем снова
});

// Инициализация слайдера
updateSlider();
// *** ЗАПУСК АВТОМАТИЧЕСКОЙ ПРОКРУТКИ ПРИ ЗАГРУЗКЕ ***
startAutoplay();

// Опционально: остановка автопрокрутки при наведении курсора на слайдер
// и возобновление при уходе курсора (улучшает UX)
slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', startAutoplay);


// --- Ваш существующий код ниже остается без изменений ---

//открытие на полный экран
function openFullscreenImage(element) {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  const fullscreenImage = document.getElementById('fullscreen-image');

  fullscreenImage.src = element.src;
  fullscreenContainer.style.display = 'block';
}

function closeFullscreenImage() {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  fullscreenContainer.style.display = 'none';
}

// Когда пользователь прокручивает страницу вниз 20px от верха, показать кнопку
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('scrollToTopButton').style.display = 'block';
  } else {
      document.getElementById('scrollToTopButton').style.display = 'none';
  }
}

// Плавный скроллинг при клике на кнопку "Наверх"
document.getElementById('scrollToTopButton').addEventListener('click', function() {
  scrollToTop();
});

function scrollToTop() {
  const scrollStep = -window.scrollY / 15;
  const scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
      } else {
          clearInterval(scrollInterval);
      }
  }, 15);
}

