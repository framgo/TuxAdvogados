import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticarService } from '../servico/autenticar.service';

@Injectable({
  providedIn: 'root'
})

export class RouterGuard implements CanActivate {
  
  constructor(
    private autenticar: AutenticarService,
     private router: Router
  ){}


  canActivate(): Promise<boolean>{ 
    return new Promise( results => {
      this.autenticar.detailsUser().onAuthStateChanged(user => {
        if(!user) this.router.navigate(['']);
        results(user ? true: false)
      });
    })
   }
  
}
