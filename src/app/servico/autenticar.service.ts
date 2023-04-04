import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  mostrarMenu = new EventEmitter<boolean>();
  
  constructor(private angularFireAuth : AngularFireAuth){}

  autenticarUser(user){
    if(user){
    this.mostrarMenu.emit(true);
    return this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password);
  } else {
    return this.mostrarMenu.emit(false);
  }
} 

  cadastrarUser(user){
    return this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.angularFireAuth.signOut();
  }

  detailsUser(){
    return this.angularFireAuth
  }

}
