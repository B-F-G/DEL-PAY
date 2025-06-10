const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.getAttribute('data-index')));
  });
});

function autoSlide() {
  let newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}

setInterval(autoSlide, 6000);

showSlide(0);
 function toggleMenu() {
            const nav = document.querySelector('.sidebar nav');
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        }
        