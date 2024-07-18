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
    const league_id = '73'; 

    const url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${league_id}&APIkey=${process.env.API_KEY}`;

    try {
        const response = await axios.get(url);
        // Acesse a propriedade específica dentro da resposta da API
        const standings = response.data;
        res.json({ standings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
