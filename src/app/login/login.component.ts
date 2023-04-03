import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticarService } from '../servico/autenticar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formulario: FormGroup

  constructor(private formBuilder : FormBuilder, private autenticarService : AutenticarService, private router : Router){}

  ngOnInit(): void {
      this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  formAuth(){
    if(this.nameButtonForm == "Logar"){
      alert("Botão Login")
      this.autenticarService.autenticarUser(this.formulario.value)
      this.router.navigate(['/home'])
    } else if(this.nameButtonForm == "Cadastrar"){
      alert("Usuario Cadastrado")
      this.autenticarService.cadastrarUser(this.formulario.value);
      this.router.navigate(['/'])
    }
  }

  titulo = "Login";
  nameButtonForm = "Logar";
  nameButtonCad = "Não possui conta? Clique aqui";

  alterar(){
    if(this.titulo == "Login"){
    this.titulo = "Cadastre-se";
    this.nameButtonCad = "Autenticar";
    this.nameButtonForm = "Cadastrar";
  } else {
    this.titulo = "Login";
    this.nameButtonCad = "Não possui conta? Clique aqui";
    this.nameButtonForm = "Logar";
    }
  } 
}
