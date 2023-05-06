// Obtener el contenedor del carrusel
const carouselContainer = document.querySelector('.carousel-container');

// Clonar el contenido del carrusel para que se repita
const carouselSlide = carouselContainer.querySelector('.carousel-slide');
const carouselItems = carouselSlide.querySelectorAll('.carousel-item');
const clonedSlide = carouselSlide.cloneNode(true);
carouselContainer.appendChild(clonedSlide);

// Iniciar el carrusel
let slidePosition = 0;
setInterval(() => {
  slidePosition -= carouselItems[0].offsetWidth; // mover el contenido hacia la izquierda un elemento a la vez
  carouselSlide.style.transform = `translateX(${slidePosition}px)`;
  if (slidePosition <= -carouselItems.length * carouselItems[0].offsetWidth) {
    slidePosition = 0; // reiniciar la posición del carrusel
  }
}, 5000); // tiempo de espera entre cada movimiento en milisegundos