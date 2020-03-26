'use strict'

const express = require('express');
const bodyParser =require('body-parser');
const mysql = require('mysql');

//Rutas

let personaRoutes = require('./routes/persona_routes');
let direccionRoutes = require('./routes/direccion_routes');
let consultaPersona = require('./routes/consultaPersona_routes');
let consultaDireccion = require('./routes/consultaDireccion_routes');
let PutPersona = require('./routes/PutPesona_routes');
let PutDireccion = require('./routes/PutDireccion_routes');
let BorrarPersona = require('./routes/BorrarPersona_routes');

let app = express();
let port = 8081;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-whot, Content-Type, Accept, Access-Control-Request-Method, enctype, Autorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Allow', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});
 //Ruta de los controladores
 app.use('/api', personaRoutes);
 app.use('/api', direccionRoutes);
 app.use('/api', consultaPersona);
 app.use('/api', consultaDireccion);
 app.use('/api', PutPersona);
 app.use('/api', PutDireccion);
 app.use('/api', BorrarPersona);


app.listen(port, function(){
    console.log("Servidor listo en el puerto:" + port);
});

module.exports = app;