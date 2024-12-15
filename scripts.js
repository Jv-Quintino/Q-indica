// Seleciona todos os elementos animados
const animatedElements = document.querySelectorAll('.animate-text');

// Detecta se o elemento está na visualização
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Ativa animações ao rolar
function animateOnScroll() {
    animatedElements.forEach((el) => {
        if (isVisible(el)) {
            el.classList.add('visible');
        }
    });
}

// Evento de rolagem
window.addEventListener('scroll', animateOnScroll);

// Anima elementos visíveis inicialmente
animateOnScroll();
