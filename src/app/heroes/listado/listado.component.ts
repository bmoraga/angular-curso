import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    /** Elimina el primer valor de la lista */
    this.heroeBorrado = this.heroes.shift() || '';
    /** Elimina el último valor de la lista */
    //this.heroes.pop();
    /** Elimina el valor que se desee de la lista (inicio, final)*/
    //this.heroes.splice(0, 1);
  }

}
