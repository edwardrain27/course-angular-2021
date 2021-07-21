
import { Component } from '@angular/core';


//Este es el template de este component
@Component({

    selector:'app-contador',
    template:`
    <h1>{{ titulo }}</h1> 

    <h3>La base es: <strong>{{ base }}</strong></h3>
    <button (click) ="acumular(base);" > +{{base}} </button>

    <span>{{ numero }}</span>

    <button (click) = "acumular(-base);" > -{{base}} </button>
    
    `
})
//le pondré el export porque la voy a usar en otrs lugares
export class ContadorComponent {
    public titulo:string = 'Contador App';
    public numero:number = 10;
    public base:number = 5;


  //base: number = 5;
    acumular( valor:number )
    {
        this.numero += valor;
    }


}