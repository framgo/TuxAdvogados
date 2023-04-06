import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../../servico/firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formupdate',
  templateUrl: './formupdate.component.html',
  styleUrls: ['./formupdate.component.css']
})
export class FormupdateComponent implements OnInit {

  updateForm!: FormGroup

  routeId = null;

  constructor(private activated : ActivatedRoute, private fs : FirebaseService, private formBuilder : FormBuilder){}

  ngOnInit(): void {  

    this.createForm("");

    this.routeId = this.activated.snapshot.params['id'];
    
    if(this.routeId)
    this.fs.consultaUm(this.routeId).subscribe(caixinha => this.createForm(caixinha))
  }

  createForm(dados){
    this.updateForm = this.formBuilder.group({
      nome: [dados.nome],
      sexo: [dados.sexo],
      email: [dados.email],
      cidade: [dados.cidade],
      url: [dados.url]
    })
  }

  atualizar(){
    this.fs.editar(this.routeId, this.updateForm.value);
  }

}
