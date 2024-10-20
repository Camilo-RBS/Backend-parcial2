const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

let users = []; // Almacenamiento en memoria

// Endpoint para registrar un usuario
app.post('/api/users', (req, res) => {
    const { nombre, email, edad } = req.body;
    users.push({ nombre, email, edad });
    res.status(201).json({ message: 'Usuario registrado con éxito!' });
});

// Endpoint para obtener todos los usuarios registrados
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
