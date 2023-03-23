import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent {

  formDataDriven!: FormGroup;
  clienteCollection!: AngularFirestoreCollection

  constructor(private clientes: FormBuilder, private register: AngularFirestore){
    this.validaForm();

    this.clienteCollection = register.collection("clientes")
  }

  validaForm(){
    this.formDataDriven = this.clientes.group({
      nome: ['',[Validators.required, Validators.minLength(5)]],
      sexo: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.maxLength(255)]],
      cidade: ['', [Validators.required, Validators.maxLength(255)]]
    })
  }

  formData(){
    this.clienteCollection.add(this.formDataDriven.value);
  }

}
