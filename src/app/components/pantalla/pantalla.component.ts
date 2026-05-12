import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.scss'
})
export class PantallaComponent {
  @Input() valor: string = '0';
}
