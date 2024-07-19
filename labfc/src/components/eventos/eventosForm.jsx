import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const EventosForm = ({ onSearch }) => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const buscando = () => {
    if (from && to) {
      onSearch(from, to);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={8}>
          <DatePicker
            label="De"
            value={from}
            onChange={(newValue) => setFrom(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={6} sm={8}>
          <DatePicker
            label="Até"
            value={to}
            onChange={(newValue) => setTo(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={buscando}>
            Buscar
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default EventosForm;
