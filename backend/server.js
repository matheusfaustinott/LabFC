const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

// Rotas
const rotaDasTabelas = require('./rotas/rotas');
app.use('/tabelas', rotaDasTabelas);
app.use('/paises', rotaDasTabelas);
app.use('/competicoes', rotaDasTabelas);
app.use('/times', rotaDasTabelas);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
