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
// Seleciona todas as imagens
const banners = document.querySelectorAll('.banner-image, .banner-image2');
const mockups = document.querySelectorAll('.mockup-image, .mockup-image2');

// Configura o Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando a imagem entra no viewport
            if (entry.target.classList.contains('banner-image') || entry.target.classList.contains('banner-image2')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        }
    });
}, { threshold: 0.5 }); // Altere o valor do threshold conforme necessário para controle de precisão

// Observa as imagens
banners.forEach(banner => observer.observe(banner));
mockups.forEach(mockup => observer.observe(mockup));

// Evento de rolagem
window.addEventListener('scroll', animateOnScroll);

// Anima elementos visíveis inicialmente
animateOnScroll();
