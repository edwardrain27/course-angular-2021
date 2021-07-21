import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

//implementa la clase automáticamente.
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';
  borrarHeroe()
  {
    const heroeBorrado = this.heroes.shift();
    console.log(heroeBorrado);
    this.heroeBorrado = heroeBorrado || '';
  }

}
