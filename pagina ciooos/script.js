document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = { name, company, email, message };

    try {
        const response = await fetch('http://localhost:5000/api/meeting-requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Solicitud enviada correctamente');
        } else {
            alert('Error al enviar la solicitud');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error en la conexión con el servidor');
    }

    // Reiniciar el formulario
    document.getElementById('contact-form').reset();
});
