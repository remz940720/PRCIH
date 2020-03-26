'use strict'

const express = require ('express');
let personaController = require("../controllers/persona");
let api = express.Router();

api.put('/traer_Persona/:id_datos', personaController.PruebaPut_Persona);

module.exports = api;