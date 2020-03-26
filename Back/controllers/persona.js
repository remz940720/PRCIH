'use strict'
const CONN = require('./connection');
let Persona = require('../models/persona_model');

function insertarPersona (req, res){
        let person = new Persona(
            req.body.Nombre,
            req.body.ApPaterno,
            req.body.ApMaterno,
            req.body.correo
        )
CONN('datos').insert(person).then(gente=> {
    if(!gente){
        res.status(500).send({resp: 'Error', error: 'No se creo la persona'});
    }else{
        res.status(200).send({
            resp: 'Persona Creada',
            gente:gente
        });
    }
}).catch(error => {

    res.status(500).send({resp: 'error',
        error: `${error}`});
    });

}

function ConsultaPersona(req, res){
        CONN('datos').select().then(gente =>{
            if(!gente){
                res.status(500).send({resp: 'No se encontro Persona'});
            }else{
                res.status(200).send({resp: 'Consulta Exitosa de Persona',gente:gente});
            }
        });


}

function PruebaPut_Persona(req,res){
    let idPersona = req.params.id_datos;
    let arregloPersona = new Persona(
        req.body.Nombre
    );
    console.log(arregloPersona);

CONN('datos').where('id_datos',idPersona).update(arregloPersona).then(Actualizado =>{
    console.log(Actualizado);
    if(!Actualizado){
       
        res.status(500).send({resp: 'Error', error: 'Error'});
    }else{
        res.status(200).send({ resp: 'consulta exitosa Actualizado', Actualizado:Actualizado});
    }
})
}

function deletePersona (req,res){
    let idPersona = req.params.id_datos;

    CONN('datos').where('id_datos',idPersona).del().then(Borrado =>{
        console.log(Borrado);
        if(!Borrado){
           
            res.status(500).send({resp: 'Error', error: 'Error'});
        }else{
            res.status(200).send({ resp: 'consulta exitosa Borrado', Borrado:Borrado});
        }
    })
}

module.exports = {
    insertarPersona,
    ConsultaPersona,
    PruebaPut_Persona,
    deletePersona
}