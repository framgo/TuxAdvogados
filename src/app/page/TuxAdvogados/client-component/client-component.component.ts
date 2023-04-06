import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../servico/firebase.service';

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent implements OnInit{

  clientes = []

  constructor(private fs: FirebaseService){

  }
  ngOnInit(): void {
    this.fs.consulta().subscribe(caixinha => this.clientes = caixinha);
  }

  excluir(id){
    this.fs.excluir(id);

  }
}

