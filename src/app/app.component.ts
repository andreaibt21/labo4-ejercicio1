import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //etiqueta DEBE TENER UN GUION EN EL MEDIO
  templateUrl: './app.component.html', //donde escribo
  styleUrls: ['./app.component.scss'], //solo afecta al de arriba
})
export class AppComponent {
  edad1: number = 0;
  edad2: number = 0;
  suma: number = 0;
  promedio: number = 0;

  public calcular(): void {
    this.suma = (Number(this.edad1) + Number(this.edad2))
    this.promedio = this.suma / 2;
    console.log(this.promedio);
  }
}
