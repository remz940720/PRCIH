import{Injectable} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GLOBAL} from '../services/global';
import {Persona} from '../models/persona.model';
import {HttpClientModule} from '@angular/common/http';

@Injectable()
export class personaService{
    public url: string;
    constructor(private _http: Http){
        this.url=GLOBAL.url;
    }
    //Servicio para insertar una persona
    postPersona(persona){
        let params = JSON.stringify(persona);
        let headers = new Headers({
            'Content-Type':'application/json'
        });
        return this._http.post(this.url+'insertar_Persona', params, {headers}).pipe(map(res => res.json()));
    }

}