const express = require('express');
const MeetingRequest = require('../models/MeetingRequest');

const router = express.Router();

// Ruta para crear una nueva solicitud de reunión
router.post('/', async (req, res) => {
    const { name, company, email, message } = req.body;

    try {
        const newRequest = new MeetingRequest({ name, company, email, message });
        await newRequest.save();
        res.status(201).json({ message: 'Solicitud de reunión enviada con éxito.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar la solicitud de reunión.' });
    }
});

module.exports = router;
