import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto-component',
  templateUrl: './foto-component.component.html',
  styleUrls: ['./foto-component.component.css']
})
export class FotoComponentComponent {
  @Input() imagem = '';
}
