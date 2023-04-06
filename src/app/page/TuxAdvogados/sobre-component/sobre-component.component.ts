import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-component',
  templateUrl: './sobre-component.component.html',
  styleUrls: ['./sobre-component.component.css']
})
export class SobreComponentComponent {

  title = "Sobre Nós"
  sobre = 'A TuxAdvogados é uma empress do ramo jurídico. Pensando em melhorar o atendimento aos seus clientes a Tux te contratou para desenvolver uma aplicação para cadstros de clientes.'

}
