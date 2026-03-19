// Animación de aparición de secciones al hacer scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        }
    });
});

// Función para mostrar mensaje de confirmación del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado con éxito. ¡Gracias por contactarme!');
});
