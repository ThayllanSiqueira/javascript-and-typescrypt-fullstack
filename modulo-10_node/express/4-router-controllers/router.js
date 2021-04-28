const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//Rotas da Home
router.get('/', homeController.paginaInicial);
router.post('/', homeController.trataPost);

//Rotas de Contato
router.get('/contato', contatoController.paginaInicial)

module.exports = router;