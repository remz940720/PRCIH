import { Component, OnInit } from '@angular/core';
import { personaService} from '../../services/persona.services';
import { Persona} from '../../models/persona.model';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { GLOBAL}  from '../../services/global';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
public persona: Persona;
public url:string; 
  constructor(
    private _personaService: personaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = GLOBAL.url;
    this.persona = new Persona("","","","","");
  }

  ngOnInit() {
  }

  insertarPersona(){
    this._personaService.postPersona(this.persona).subscribe(respond =>{
      console.log(respond);
    })
  }

}
