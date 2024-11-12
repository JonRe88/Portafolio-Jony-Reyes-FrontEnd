// Máquina de escribir en el texto "Creer es Crear"
document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".typewriter");
    const textContent = text.textContent;
    let index = 0;

    function type() {
        if (index < textContent.length) {
            text.innerHTML = textContent.slice(0, index + 1) + '<span class="caret">|</span>';
            index++;
            setTimeout(type, 100);
        } else {
            text.innerHTML = textContent;
        }
    }
    type();
});

// Menú hamburguesa para dispositivos móviles
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
});
// Mostrar el botón de scroll al subir