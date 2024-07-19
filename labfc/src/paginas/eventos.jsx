import React, { useState } from 'react';
import { Container } from '@mui/material';
import { chamadaDeEventos } from '../utils/chamadasApi';
import EventosForm from '../components/eventos/eventosForm';
import EventosTabela from '../components/eventos/jogosDeAte';

const EventosPage = () => {
  const [eventos, setEventos] = useState([]);

  const buscando = async (from, to, league_id = null, country_id = null) => {
    try {
      const eventosData = await chamadaDeEventos(from.toISOString().split('T')[0], to.toISOString().split('T')[0]);
      setEventos(eventosData);
    } catch (error) {
      console.error('Erro ao buscar dados de eventos.', error);
    }
  };

  return (
    <Container>
      <h1>Busca de Eventos</h1>
      <EventosForm onSearch={buscando} />
      {eventos.length > 0 && <EventosTabela eventos={eventos} />}
    </Container>
  );
};

export default EventosPage;
