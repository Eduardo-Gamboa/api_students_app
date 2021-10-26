const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const productosController = require('../controller/productoController');

// CONSULTAR TODOS LOS PRODUCTOS
router.get('/students/getAll', productosController.getAll);
// CONSULTAR UN PRODUCTO POR ID
router.get('/students/getByID/:id', productosController.getByID);
// AÑADIR PRODUCTO
router.post('/students/add', productosController.insert);
// ACTUALIZAR UN PRODUCTO:
router.put('/students/update/:id', productosController.update);
// ELIMINAR UN PRODUCTO
router.delete('/students/delete/:id', productosController.delete);

module.exports = router;