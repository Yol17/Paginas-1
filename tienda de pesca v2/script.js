
//carrusel 

document.querySelectorAll('.product-grid').forEach((productGrid) => {
    productGrid.addEventListener('wheel', handleWheel);
});

function handleWheel(event) {
    event.preventDefault();
    const scrollAmount = event.deltaY * 5;
    event.currentTarget.scrollLeft += scrollAmount;
}


// carrito
const cartBtn = document.getElementById('cart-btn');
const cart = document.querySelector('.cart');
const checkoutBtn = document.querySelector('.checkout-btn');
let total = 0;

cartBtn.addEventListener('click', () => {
    cart.classList.toggle('show-cart');
});

// Evento para simular agregar un producto al carrito
const productBoxes = document.querySelectorAll('.product-box');

productBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const productName = box.querySelector('h3').textContent;
        const productPrice = parseFloat(box.querySelector('p').textContent.replace('Precio: $', ''));

        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
        total += productPrice;

        const cartItemsList = document.querySelector('.cart-items');
        cartItemsList.appendChild(cartItem);

        updateCartTotal();
    });
});

// Función para actualizar el total del carrito
function updateCartTotal() {
    const cartTotalElement = document.querySelector('.cart-total');
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

checkoutBtn.addEventListener('click', () => {
    alert('Procesando pago...'); // Aquí podrías agregar la lógica para procesar el pago
    window.location.reload(); // Recargar la página después de procesar el pago
});