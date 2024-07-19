import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EventosTabela = ({ eventos }) => {
  const [detalhes, setDetalhes] = React.useState(null);

  const handleDetalhesClick = (index) => {
    setDetalhes(detalhes === index ? null : index);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Liga</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Partida Finalizada?</TableCell>
            <TableCell>Horário do Jogo</TableCell>
            <TableCell>Em Casa</TableCell>
            <TableCell>Placar</TableCell>
            <TableCell>Visitante</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventos.map((row, index) => (
            <React.Fragment key={row.match_id}>
              <TableRow>
                <TableCell>
                  <img
                    src={row.league_logo}
                    alt="Liga"
                    style={{ width: 30, height: 30 }}
                  />
                </TableCell>
                <TableCell>{row.match_date}</TableCell>
                <TableCell>{row.finished === "finished" ? "Sim" : "Não"}</TableCell>
                <TableCell>{row.match_time}</TableCell>
                <TableCell>
                  <img
                    src={row.team_home_badge}
                    alt="Casa"
                    style={{ width: 30, height: 30 }}
                  />{" "}
                  {row.match_hometeam_name}
                </TableCell>
                <TableCell>
                  {row.match_hometeam_score} VS {row.match_awayteam_score}
                </TableCell>
                <TableCell>
                  <img
                    src={row.team_away_badge}
                    alt="Visitante"
                    style={{ width: 30, height: 30 }}
                  />{" "}
                  {row.match_awayteam_name}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDetalhesClick(index)}>
                    <ExpandMoreIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={8}>
                  <Collapse in={detalhes === index}>
                    <Typography variant="body2">
                      Detalhes da partida:
                    </Typography>
                    {/* Simulação de detalhes */}
                    <List>
                      {row.lineup && row.lineup.starting_lineups && row.lineup.starting_lineups.map((lineup, lineupIndex) => (
                        <ListItem key={lineupIndex}>
                          <ListItemText primary={`${lineup.player_name} (${lineup.position})`} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventosTabela;
