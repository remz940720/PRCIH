'use strict'

const express = require ('express');
let DireccionController = require("../controllers/direccion");

let api = express.Router();

api.get('/consulta_Direccion', DireccionController.ConsultaDireccion);


module.exports = api;