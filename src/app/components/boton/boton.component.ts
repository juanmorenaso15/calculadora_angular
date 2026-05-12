import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss'
})
export class BotonComponent {
  @Input() label: string = '';
  @Output() clickBoton = new EventEmitter<string>();

  pulsar() {
    this.clickBoton.emit(this.label);
  }
}
