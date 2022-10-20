var express = require('express');
var router = express.Router();
var usuariosController = require('../controllers/usuariosController')

router.get('/listado',usuariosController.listar)
router.get('/agregar',usuariosController.agregar)
router.post('/crear',usuariosController.añadir)
router.get('/editar/:id',usuariosController.editar)
router.put('/actualizar/:id',usuariosController.actualizar)
router.get('/eliminar/:id',usuariosController.eliminar)
router.delete('/borrar/:id',usuariosController.borrar)

module.exports = router