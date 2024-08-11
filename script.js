const words = ["Diseñador Web ", "Melómano ", "Autodidacta ", "Desarrollador Frontend "];
let wordIndex = 0
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter-text');

function type() {
    const currentWord = words[wordIndex];
    let displayText = isDeleting 
        ? currentWord.substring(0, charIndex--) 
        : currentWord.substring(0, charIndex++);

    typewriterElement.textContent = displayText;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 3) % words.length;
        setTimeout(type, 500); // Wait before typing the next word
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

type();

// Carrusel
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const cards = Array.from(track.children);

// Verificar la existencia de los elementos del carrusel
if (track && prevButton && nextButton && cards.length > 0) {
    let cardWidth = cards[0].getBoundingClientRect().width;
    let currentIndex = 0;

    function updateCarouselPosition() {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 2) {
            currentIndex++;
            updateCarouselPosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });

    window.addEventListener('resize', () => {
        cardWidth = cards[0].getBoundingClientRect().width;
        updateCarouselPosition();
    });
} else {
    console.error("Carousel elements are missing");
}
