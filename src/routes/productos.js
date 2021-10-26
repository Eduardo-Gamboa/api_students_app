const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const productosController = require('../controller/productoController');
const cors = require('cors');
const { Student } = require('../db/students');
const student = new Student();

// CONSULTAR TODOS LOS PRODUCTOS
router.get('/', async(req, res) => {
    try {
        const students = await student.getAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/students', cors(), productosController.getAll);
// CONSULTAR UN PRODUCTO POR ID
router.get('/students/:id', productosController.getByID);
// AÑADIR PRODUCTO
router.post('/students/add', productosController.insert);
// ACTUALIZAR UN PRODUCTO:
router.put('/students/update/:id', productosController.update);
// ELIMINAR UN PRODUCTO
router.delete('/students/delete/:id', productosController.delete);

module.exports = router;