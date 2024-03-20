const express = require('express');
const axios = require('axios'); // Necesitarás axios para hacer solicitudes HTTP
const app = express();
const port = 3000;

// Middleware para analizar datos JSON en solicitudes POST
app.use(express.json());

// Ruta para obtener datos meteorológicos (GET)
app.get('/clima', async (req, res) => {
  try {
    // Reemplaza 'TU_API_KEY' con tu clave de API de OpenWeatherMap
    const apiKey = 'TU_API_KEY';
    
    // Reemplaza 'Ciudad,País' con la ubicación deseada
    const location = 'Ciudad,País';

    // URL de la API de OpenWeatherMap para obtener datos meteorológicos
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    // Realiza una solicitud GET a la API de clima
    const response = await axios.get(apiUrl);

    // Envía la respuesta de la API al cliente
    res.json(response.data);
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ error: 'Error al obtener los datos meteorológicos.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
