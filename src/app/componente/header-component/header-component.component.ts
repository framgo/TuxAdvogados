import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticarService } from '../../servico/autenticar.service';



@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit{

  header = false;

  constructor(private autencicarService: AutenticarService, private router: Router){}

  ngOnInit(): void {
      this.autencicarService.detailsUser().onAuthStateChanged(user => {
        if(user){
          this.header = true;
        }
      })
  }

  deslogar(){
    this.autencicarService.logout();
  }
}
