const con = require('../../config/db');
var productoModel = require('../model/productoModel');
const msj = "¡¡¡INGRESA UN ID EXISTENTE!!!";
module.exports = {
    getAll: function(req, res) {
        productoModel.getAll(con, function(params, datos) {
            res.json(datos);
        });
    },
    getByID: function(req, res) {
        productoModel.getByID(con, req.params.id, function(params, datos) {
            if (datos[0] === undefined) {
                res.json(msj);
            } else {
                console.log(datos[0]);
                res.json(datos[0]);
            }
        });
    },
    insert: function(req, res) {
        const { id, name, grade, group_, email, direccion, lat, long } = req.body;
        productoModel.insert(con, req.body, function(err) {
            if (!err) {
                res.json({ status: 'ESTUDIANTE AGREGADO CORRECTAMENTE' });
            } else {
                console.log(err);
            }
        });
    },
    update: function(req, res) {
        const { name, grade, group_, email, direccion, lat, long } = req.body;
        productoModel.update(con, req.body, req.params.id, function(err) {
            console.log(req.params.id);
            if (!err) {
                res.json({ status: '¡¡¡ESTUDIANTE ACTUALIZACO CORRECTAMENTE!!!' });
            } else {
                console.log(err);
            }
        });
    },
    delete: function(req, res) {
        productoModel.delete(con, req.params.id, function(err) {
            if (!err) {
                res.json({ status: '¡¡¡ESTUDIANTE ELIMINADO CORRECTAMENTE :( !!!' });
            } else {
                console.log(err);
            }
        });
    }
}