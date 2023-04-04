import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticarService } from '../servico/autenticar.service';



@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit{

  mostrarMenu: boolean = false;
  usuario = "";

  constructor(private autencicarService: AutenticarService, private router: Router){}

  ngOnInit(): void {
    this.autencicarService.detailsUser().user.subscribe(results => this.usuario = results.email);

    this.autencicarService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  deslogar(){
    this.autencicarService.logout();

  }
}
