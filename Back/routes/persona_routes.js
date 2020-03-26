'use strict'

const express = require ('express');
let personaController = require("../controllers/persona");
let api = express.Router();

api.post('/insertar_Persona', personaController.insertarPersona);

module.exports = api;