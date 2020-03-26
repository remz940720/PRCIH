'use strict'
const CONN = require('./connection');
let Direccion = require('../models/direccion_model');

function insertarDireccion (req, res){
        let direc = new Direccion(
            req.body.id_Persona,
            req.body.calle,
            req.body.colonia,
            req.body.numero_int,
            req.body.numero_ext,
            req.body.alcaldia,
            req.body.codigo_postal
        )
CONN('direccion').insert(direc).then(lugar=> {
    if(!lugar){
        res.status(500).send({resp: 'Error', error: 'No se creo la direccion'});
    }else{
        res.status(200).send({
            resp: 'Direccion Creada',
            lugar:lugar
        });
    }
}).catch(error => {

    res.status(500).send({resp: 'error',
        error: `${error}`});
    });

}

function ConsultaDireccion(req, res){
    CONN('direccion').select().then(colonia =>{
        if(!colonia){
            res.status(500).send({resp: 'No se encontro Direccion'});
        }else{
            res.status(200).send({resp: 'Consulta Exitosa de Direccion',colonia:colonia});
        }
    });


}


function PruebaPut_Direccion(req,res){
    let idDireccion = req.params.id_Direccion;
    let arregloDireccion = new Direccion(
       //req.body.id_Persona,
      //req.body.calle
    );
    console.log(arregloDireccion);

CONN('direccion').where('id_Direccion',idDireccion).update({calle: req.body.calle}).then(Actualizado =>{
    console.log(Actualizado);
    if(!Actualizado){
       
        res.status(500).send({resp: 'Error', error: 'Error'});
    }else{
        res.status(200).send({ resp: 'consulta exitosa Actualizado', Actualizado:Actualizado});
    }
})
}




module.exports = {
    insertarDireccion,
    ConsultaDireccion,
    PruebaPut_Direccion
}