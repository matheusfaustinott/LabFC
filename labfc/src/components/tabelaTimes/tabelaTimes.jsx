import { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container,
  TablePagination
} from '@mui/material';
import { chamadaDeTabelaTimes } from '../../utils/chamadasApi';

const TabelaDePontosTimes = () => {
  const [tabela, setTabela] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [linhasPorPagina, setLinhasPorPagina] = useState(6);

  useEffect(() => {
    const getTabela = async () => {
      try {
        const data = await chamadaDeTabelaTimes();
        setTabela(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API.', error);
      }
    };

    getTabela();
  }, []);

  const handleChangePagina = (event, newpagina) => {
    setPagina(newpagina);
  };

  const handleChangelinhasPorPagina = (event) => {
    setLinhasPorPagina(parseInt(event.target.value, 10));
    setPagina(0); 
  };


  const mostrarTabela = tabela.slice(pagina * linhasPorPagina, pagina * linhasPorPagina + linhasPorPagina);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Classificação 2024 - {tabela.length > 0 && tabela[0].league_name}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Bandeira</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Pontos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mostrarTabela.map((team) => (
              <TableRow key={team.team_id}>
                <TableCell>{team.overall_league_position}</TableCell>
                <TableCell>
                  <img src={team.team_badge} alt={team.team_name} style={{ width: 30, height: 30 }} />
                </TableCell>
                <TableCell>{team.team_name}</TableCell>
                <TableCell>{team.overall_league_PTS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[6, 10, 25]}
          component="div"
          count={tabela.length}
          rowsPerPage={linhasPorPagina}
          page={pagina}
          onPageChange={handleChangePagina}
          onRowsPerPageChange={handleChangelinhasPorPagina}
          labelRowsPerPage="Linhas por página:"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        />
      </TableContainer>
    </Container>
  );
};

export default TabelaDePontosTimes;
