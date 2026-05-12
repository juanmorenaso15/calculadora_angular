import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
pantalla: string = '0';
  numero1: number = 0;
  operacion: string = '';
  nuevoNumero: boolean = false;

  pulsar(valor: string) {
    if (valor >= '0' && valor <= '9') {
      if (this.nuevoNumero) {
        this.pantalla = valor;
        this.nuevoNumero = false;
      } else {
        this.pantalla = this.pantalla === '0' ? valor : this.pantalla + valor;
      }
    }
    else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      this.numero1 = parseFloat(this.pantalla);
      this.operacion = valor;
      this.nuevoNumero = true;
    }
    else if (valor === '=') {
      const numero2 = parseFloat(this.pantalla);
      let resultado = 0;
      
      if (this.operacion === '+') resultado = this.numero1 + numero2;
      if (this.operacion === '-') resultado = this.numero1 - numero2;
      if (this.operacion === '*') resultado = this.numero1 * numero2;
      if (this.operacion === '/') {
        if (numero2 === 0) {
          this.pantalla = 'ERROR';
          return;
        }
        resultado = this.numero1 / numero2;
      }
      
      this.pantalla = resultado.toString();
      this.nuevoNumero = true;
    }
    else if (valor === 'C') {
      this.pantalla = '0';
      this.numero1 = 0;
      this.operacion = '';
      this.nuevoNumero = false;
    }
    else if (valor === 'DEL') {
      // Borrar un carácter
      if (this.pantalla.length > 1) {
        this.pantalla = this.pantalla.slice(0, -1);
      } else {
        this.pantalla = '0';
      }
    }
  }
}
