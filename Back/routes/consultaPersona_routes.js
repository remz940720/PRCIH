'use strict'

const express = require ('express');
let PersonaController = require("../controllers/persona");

let api = express.Router();

api.get('/consulta_Persona', PersonaController.ConsultaPersona);


module.exports = api;