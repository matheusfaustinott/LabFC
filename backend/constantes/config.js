require('dotenv').config();

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

const ENDPOINTS = {
    GET_TABELAS: `${API_BASE_URL}?action=get_standings&APIkey=${API_KEY}`,
    GET_PAISES: `${API_BASE_URL}?action=get_countries&APIkey=${API_KEY}`,
    GET_COMPETICOES: `${API_BASE_URL}?action=get_leagues&APIkey=${API_KEY}`,
    GET_TIMES: `${API_BASE_URL}?action=get_teams&league_id&APIkey=${API_KEY}`,

};

module.exports = {
    ENDPOINTS
};
