'use strict'

class direccion {
    constructor (id_Persona,calle,colonia,numero_int,numero_ext,alcaldia,codigo_postal){
        this.id_Persona = id_Persona;
        this.calle = calle;
        this.colonia = colonia;
        this.numero_int = numero_int;
        this.numero_ext = numero_ext;
        this.alcaldia = alcaldia;
        this.codigo_postal = codigo_postal;
    }
}

module.exports = direccion;