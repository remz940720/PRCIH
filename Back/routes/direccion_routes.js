'use strict'

const express = require ('express');
let direccionController = require("../controllers/direccion");
let api = express.Router();

api.post('/insertar_Direccion', direccionController.insertarDireccion);


module.exports = api;