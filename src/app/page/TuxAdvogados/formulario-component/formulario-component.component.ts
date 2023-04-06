import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../../servico/firebase.service';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit{

  formDataDriven!: FormGroup;
  

  constructor(private clientes: FormBuilder, private fs: FirebaseService){}
  ngOnInit(): void {
     this.validaForm();
  }


  validaForm(){
    this.formDataDriven = this.clientes.group({
      nome: ['',[Validators.required, Validators.minLength(5)]],
      sexo: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.maxLength(255)]],
      cidade: ['', [Validators.required, Validators.maxLength(255)]],
      url: ['', [Validators.required, Validators.maxLength(255)]],
    })
  }

  formData(){
    this.fs.cadastrar(this.formDataDriven.value);
  }

}
