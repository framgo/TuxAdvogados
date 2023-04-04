import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponentComponent } from './client-component/client-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SobreComponentComponent } from './sobre-component/sobre-component.component';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { LoginComponent } from './login/login.component';
import { RouterGuard } from './guarda/router.guard';
import { LoginGuard } from './guarda/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponentComponent, canActivate: [RouterGuard]},
  {path: 'clientes', component: ClientComponentComponent, canActivate: [RouterGuard]},
  {path: 'formulario', component: FormularioComponentComponent, canActivate: [RouterGuard]},
  {path: 'sobre', component: SobreComponentComponent, canActivate: [RouterGuard]},
  {path: 'update/:id', component: FormupdateComponent, canActivate: [RouterGuard]},
  {path: '', component: LoginComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
