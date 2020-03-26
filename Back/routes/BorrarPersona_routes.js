'use strict'

const express = require ('express');
let personaController = require("../controllers/persona");
let api = express.Router();

api.delete('/Borrar_Persona/:id_datos', personaController.deletePersona);

module.exports = api;