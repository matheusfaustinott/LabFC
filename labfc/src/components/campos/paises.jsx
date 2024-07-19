import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { chamadaDePaises } from '../../utils/chamadasApi';

const AutocompletePaises = ({ onChange }) => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const data = await chamadaDePaises();
        setPaises(data);
      } catch (error) {
        console.error('Erro ao buscar países.', error);
      }
    };

    fetchPaises();
  }, []);

  return (
    <Autocomplete
      options={paises}
      getOptionLabel={(option) => option.country_name}
      renderOption={(props, option) => (
        <li {...props}>
          <img src={option.country_logo} alt={option.country_name} style={{ width: 20, height: 20, marginRight: 8 }} />
          {option.country_name}
        </li>
      )}
      onChange={(event, value) => onChange(value ? value.country_id : null)}
      renderInput={(params) => <TextField {...params} label="País" />}
    />
  );
};

export default AutocompletePaises;
