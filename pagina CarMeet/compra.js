// Obtener elementos del formulario
const ticketType = document.getElementById("ticketType");
const ticketQuantity = document.getElementById("ticketQuantity");
const totalAmountLabel = document.getElementById("totalAmountLabel"); // Cambiar a label
const calculateButton = document.getElementById("calculateButton"); // Agregar el botón

// Precios de las entradas
const ticketPrices = {
    general: 20,
    vip: 50,
    premium: 80
};

// Función para calcular y actualizar el total a pagar
function calculateTotal() {
    const selectedTicketType = ticketType.value;
    const selectedTicketQuantity = parseInt(ticketQuantity.value);
    const totalPrice = ticketPrices[selectedTicketType] * selectedTicketQuantity;
    totalAmountLabel.textContent = `$${totalPrice}`; // Actualizar el contenido del label
}

// Calcular el total cuando cambia el tipo de entrada
ticketType.addEventListener("change", calculateTotal);

// Calcular el total cuando cambia la cantidad de entradas
ticketQuantity.addEventListener("input", calculateTotal);

// Calcular el total cuando se presiona el botón
calculateButton.addEventListener("click", calculateTotal);