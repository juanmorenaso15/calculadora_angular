import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton-numero',
  templateUrl: './boton-numero.component.html',
  styleUrl: './boton-numero.component.scss'
})
export class BotonNumeroComponent {
  @Input() numero: string = '';
  @Output() pulsar = new EventEmitter<string>();

  onClick() {
    this.pulsar.emit(this.numero);
  }
}
