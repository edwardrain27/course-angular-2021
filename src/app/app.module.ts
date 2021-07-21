import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './contadores/contadores.module';
//tenemos este modulo.
import { HeroesModule } from './heroes/heroes.module';
//tarea: 
//Crear un modulo llamado ContadorModule
//No es necesario importar nada.
//debemos hacer las declaraciones, y exportaciones.

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule

    //importar aqui.
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
