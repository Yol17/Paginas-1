document.getElementById('form-busqueda').addEventListener('submit', function(e) {
    e.preventDefault();
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;

    alert(`Buscando vuelos desde ${origen} a ${destino} el ${fecha}`);
});

document.getElementById('form-estado').addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroVuelo = document.getElementById('numero-vuelo').value;

    // Lógica para buscar el estado del vuelo (puede ser una API en el futuro)
    document.getElementById('resultado-estado').innerText = `El estado del vuelo ${numeroVuelo} es: En horario.`;
});

document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Gracias, ${nombre}. Hemos recibido tu mensaje y te contactaremos a ${correo}.`);
});



