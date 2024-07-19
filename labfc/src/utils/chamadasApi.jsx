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