var express = require('express');
var router = express.Router();
var usuariosController = require('../controllers/usuariosController')

router.get('/listado',usuariosController.listar)
router.get('/agregar',usuariosController.agregar)
router.post('/crear',usuariosController.añadir)

module.exports = router