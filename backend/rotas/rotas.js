const express = require('express');
const router = express.Router();
const tabelaControladores = require('../controlador/todosControladores');


router.get('/', tabelaControladores.getTabelas);
router.get('/paises', tabelaControladores.getPaises);
router.get('/competicoes', tabelaControladores.getCompeticoes);
router.get('/times', tabelaControladores.getTimes);

module.exports = router;
