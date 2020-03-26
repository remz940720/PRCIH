import { Component, OnInit } from '@angular/core';
import {GLOBAL} from './services/global';
import { personaService} from './services/persona.services';
import { Persona} from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [personaService]
})
export class AppComponent implements OnInit {
  title = 'Mi-Pimer-Proyecto-Front';
  public url: string;
  public persona: Persona;
  constructor(
    private _personaService: personaService
  ){
    this.url = GLOBAL.url;
  }
  ngOnInit(){
    console.log('Hola');
  }
}
