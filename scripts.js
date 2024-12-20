fetch('app.js', { cache: 'no-store' }).then(response => response.text()).then(data => { const script = document.createElement('script'); script.innerHTML = data; document.body.appendChild(script) }); const animatedElements = document.querySelectorAll('.animate-text'); function isVisible(element) { const rect = element.getBoundingClientRect(); return rect.top < window.innerHeight && rect.bottom > 0 }
function animateOnScroll() { animatedElements.forEach((el) => { if (isVisible(el)) { el.classList.add('visible') } }) }
window.addEventListener('scroll', animateOnScroll); animateOnScroll()

window.onload = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
