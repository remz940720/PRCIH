'use strict'

const express = require ('express');
let direccionController = require("../controllers/direccion");
let api = express.Router();

api.put('/traer_Direccion/:id_Direccion', direccionController.PruebaPut_Direccion);

module.exports = api;