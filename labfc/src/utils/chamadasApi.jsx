import axios from 'axios';

export const chamadaDeTabelaTimes = async () => {
  try {
    const response = await axios.get('http://localhost:3003/tabelas');
    return response.data.tabelas;
  } catch (error) {
    console.error('Erro ao buscar dados da tabela de jogadores na API.', error);
    throw error;
  }
};

export const chamadaDeEventos = async (from,to,league_id = null, country_id=null) => {
  try {
    const response = await axios.get('http://localhost:3003/eventos', {
      params: { from, to, league_id, country_id }
    });
    return response.data.eventos;
  } catch (error) {
    console.error('Erro ao buscar dados de eventos na API.', error);
    throw error;
  }
};

export const chamadaDePaises = async () => {
  try {
    const response = await axios.get('http://localhost:3003/paises');
    return response.data.paises;
  } catch (error) {
    console.error('Erro ao buscar dados de países.', error);
    throw error;
  }
};

export const chamadaDeCompeticoes = async () => {
  try {
    const response = await axios.get('http://localhost:3003/competicoes');
    return response.data.competicoes;
  } catch (error) {
    console.error('Erro ao buscar dados de competições.', error);
    throw error;
  }
};