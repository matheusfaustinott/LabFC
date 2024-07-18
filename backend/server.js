const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3003;

// Middleware para analisar JSON
app.use(express.json());

// Rota principal que recebe parâmetros do front-end
app.get('/standings', async (req, res) => {
    const { league, season } = req.query;
    
    // Verifique se todos os parâmetros necessários estão presentes
    if (!league || !season ) {
        return res.status(400).json({ error: 'Parâmetros league, season e team são obrigatórios.' });
    }

    const options = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/standings',
        params: { league, season, team },
        headers: {
            'x-apisports-key': process.env.API_KEY
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
});

// Rota de teste com parâmetros fixos
app.get('/test', async (req, res) => {
    const league = '75';  
    const season = '2024';  

    const options = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/standings',
        params: { league, season},
        headers: {
            'x-apisports-key': process.env.API_KEY
        }
    };

    try {
        const response = await axios.request(options);
        const standings = response.data.response;
        res.json({ standings })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
