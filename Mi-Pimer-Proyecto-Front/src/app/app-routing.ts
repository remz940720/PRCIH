import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { PersonaComponent } from './components/persona/persona.component';

const appRoutes: Routes=[
    {path: '', component:PersonaComponent},
    {path: '**', component:PersonaComponent}
]

export const appRoutingProvider:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);