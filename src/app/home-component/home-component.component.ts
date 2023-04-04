import { Component } from '@angular/core';
import { AutenticarService } from '../servico/autenticar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jhAY53zrNbo2sJYoJoQw0ozUuN1eWu-q5g&usqp=CAU'
  title = 'Tux Advogados'

  mudar: boolean = true

  clicando() {
    this.mudar = !this.mudar;
 
    if (this.mudar) {
     this.imagem = 'https://thumbs.dreamstime.com/b/d-cool-penguin-does-his-dance-render-dressed-very-smartly-engaging-rather-46577021.jpg'
    } else {
     this.imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jhAY53zrNbo2sJYoJoQw0ozUuN1eWu-q5g&usqp=CAU'
    }
  }

  constructor(private autencicarService: AutenticarService, private router: Router){}

  deslogar(){
    this.autencicarService.logout();
  }
}
