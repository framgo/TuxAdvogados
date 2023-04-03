import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../servico/autenticar.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit{

  mostrarMenu: boolean = false;

  constructor(private autencicarService: AutenticarService){}

  ngOnInit(): void {
    this.autencicarService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  
}
