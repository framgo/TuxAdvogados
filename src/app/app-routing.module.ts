import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponentComponent } from './client-component/client-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SobreComponentComponent } from './sobre-component/sobre-component.component';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'clientes', component: ClientComponentComponent},
  {path: 'formulario', component: FormularioComponentComponent},
  {path: 'sobre', component: SobreComponentComponent},
  {path: 'update/:id', component: FormupdateComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
