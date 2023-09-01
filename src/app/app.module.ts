import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './componentes/binding/binding.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [ //los componentes que vamos a usar
    AppComponent,
    BindingComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [ //los modulos que vamos a usar
    BrowserModule,
    AppRoutingModule,
    FormsModule // se agrega para usar inputs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
