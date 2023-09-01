import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  public name: string = "angular";
  public number: number = 0;
  public apellido: string = "gonzales";
  //desde elk controlador a la vista escribo una interpolacion en el html {{}}
  public btnLabel = "click me";

  public onClickkk(event: any): void {
    console.log(event);
    this.number = Math.random()
  }



}
