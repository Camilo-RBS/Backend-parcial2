const express = require('express');
const app = express();

app.use(express.json());

const { addUser, getUsers } = require('../models/user.model');

const getUsersList = (req, res) => {
    res.status(200).json(getUsers());
};

const createUser = (req, res) => {
    const { nombre, email, edad } = req.body;
    if (!nombre || !email || !edad) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
    const edadNumero = Number(edad);
    if (isNaN(edadNumero) || edadNumero < 1) {
        return res.status(400).json({ error: 'La edad debe ser un número mayor que 0.' });
    }
    const newUser = { nombre, email, edad: edadNumero };
    addUser(newUser);
    res.status(201).json(newUser);
};

module.exports = {
    getUsersList,
    createUser
};
