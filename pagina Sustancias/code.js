const header = document.querySelector('.header-container');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px"; /* Cambia este valor según tu preferencia para ocultar completamente el encabezado */
    }
    prevScrollPos = currentScrollPos;
};