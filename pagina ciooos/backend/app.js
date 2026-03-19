const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const meetingRequestsRoutes = require('./routes/meetingRequests');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB (sin opciones obsoletas)
mongoose.connect('mongodb://localhost:27017/cios', {
  // No es necesario agregar useNewUrlParser y useUnifiedTopology
})
.then(() => {
  console.log('Conectado a MongoDB');
})
.catch(err => {
  console.error('Error conectando a MongoDB:', err.message);
});

// Rutas
app.use('/api/meeting-requests', meetingRequestsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
