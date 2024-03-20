const express = require('express');
const app = express();
const port = 3000; // Puerto en el que escuchará el servidor

// Middleware para analizar datos JSON en solicitudes POST
app.use(express.json());

// Base de datos simulada para almacenar usuarios registrados (esto es solo un ejemplo)
const users = [];

// Ruta para el registro de usuarios (POST)
app.post('/registro', (req, res) => {
  const { username, password } = req.body;

  // Verificar si el nombre de usuario ya existe en la base de datos
  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
  }

  // Si es un nombre de usuario único, almacenarlo en la base de datos (en este ejemplo, en un arreglo)
  users.push({ username, password });

  // Respuesta exitosa
  res.status(201).json({ message: 'Registro exitoso.' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});