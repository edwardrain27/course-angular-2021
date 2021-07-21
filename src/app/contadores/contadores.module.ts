
//importamos NgModule de la ruta @angular/core
import { NgModule } from "@angular/core"
//Luego importamos los componentes que tenga la carpeta contadores.
//Importamos la clase ContadorComponent
import { ContadorComponent } from './contador/contador.component';


//Usamos el decorador para expandir la clase con las declaraciones y los exports.
@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
})
export class ContadoresModule {}