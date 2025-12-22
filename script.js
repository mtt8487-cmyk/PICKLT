let current = 0;
const slides = document.querySelectorAll('.carousel-img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  current = index;
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

function prevSlide() {
  showSlide((current - 1 + slides.length) % slides.length);
}

function setSlide(i) {
  showSlide(i);
}
