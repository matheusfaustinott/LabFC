const axios = require('axios');
const { ENDPOINTS } = require('../constantes/config');

const getTabelas = async (req, res) => {
    const { league_id } = req.query;
    

    const url = `${ENDPOINTS.GET_TABELAS}&league_id=${league_id ?? 75}`;

    try {
        const response = await axios.get(url);
        const tabelas = response.data;
        res.json({ tabelas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
};

const getPaises = async (req, res) => {

    const url = `${ENDPOINTS.GET_PAISES}`;

    try {
        const response = await axios.get(url);
        const paises = response.data;
        res.json({ paises });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
};

const getCompeticoes = async (req, res) => {
    const {country_id} = req.query;
    console.log('testando um negocinho',country_id )

    const url = `${ENDPOINTS.GET_COMPETICOES}&country_id=${country_id}`;

    try {
        const response = await axios.get(url);
        const competicoes = response.data;
        res.json({ competicoes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
};

const getTimes = async (req, res) => {
    const {league_id} = req.query;
    console.log('testando um negocinho',league_id )

    const url = `${ENDPOINTS.GET_TIMES}&get_teams&league_id=${league_id ?? 302}`;

    try {
        const response = await axios.get(url);
        const times = response.data;
        res.json({ times });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
};

module.exports = {
    getTabelas,
    getPaises,
    getCompeticoes,
    getTimes

};
