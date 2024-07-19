
import React, { useEffect, useState } from 'react';
import {  Autocomplete, TextField } from '@mui/material';
import { chamadaDeCompeticoes } from '../../utils/chamadasApi';


const AutocompleteLigas = ({ onChange }) => {
  const [ligas, setLigas] = useState([]);

  useEffect(() => {
    const fetchLigas = async () => {
      try {
        const data = await chamadaDeCompeticoes();
        setLigas(data);
      } catch (error) {
        console.error('Erro ao buscar ligas.', error);
      }
    };

    fetchLigas();
  }, []);

  return (
    <Autocomplete
      options={ligas}
      getOptionLabel={(option) => option.league_name}
      renderOption={(props, option) => (
        <li {...props}>
          <img src={option.league_logo} alt={option.league_name} style={{ width: 20, height: 20, marginRight: 8 }} />
          {option.league_name}
        </li>
      )}
      onChange={(event, value) => onChange(value ? value.league_id : null)}
      renderInput={(params) => <TextField {...params} label="Liga" />}
    />
  );
};

export default AutocompleteLigas;
