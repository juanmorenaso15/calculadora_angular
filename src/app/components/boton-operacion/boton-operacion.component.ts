import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton-operacion',
  templateUrl: './boton-operacion.component.html',
  styleUrl: './boton-operacion.component.scss'
})
export class BotonOperacionComponent {
  @Input() operacion: string = '';
  @Input() color: string = '#ff9800';
  @Output() pulsar = new EventEmitter<string>();

  onClick() {
    this.pulsar.emit(this.operacion);
  }
}
