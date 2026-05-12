import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PantallaComponent } from './components/pantalla/pantalla.component';
import { BotonComponent } from './components/boton/boton.component';
import { BotonNumeroComponent } from './components/boton-numero/boton-numero.component';
import { BotonOperacionComponent } from './components/boton-operacion/boton-operacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaComponent,
    BotonComponent,
    BotonNumeroComponent,
    BotonOperacionComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
