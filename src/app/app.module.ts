import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponentComponent } from './page/home-component/home-component.component';
import { ClientComponentComponent } from './page/TuxAdvogados/client-component/client-component.component';

import { FormularioComponentComponent } from './page/TuxAdvogados/formulario-component/formulario-component.component';
import { SobreComponentComponent } from './page/TuxAdvogados/sobre-component/sobre-component.component';

import { FotoComponentComponent } from './page/TuxAdvogados/foto-component/foto-component.component';
import { HeaderComponentComponent } from './componente/header-component/header-component.component';
import { environment } from 'src/environments/environments';
import { FormupdateComponent } from './page/TuxAdvogados/formupdate/formupdate.component';
import { LoginComponent } from './page/login/login.component';
import { AutenticarService } from './servico/autenticar.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ClientComponentComponent,
    FormularioComponentComponent,
    SobreComponentComponent,
    FotoComponentComponent,
    HeaderComponentComponent,
    FormupdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  ],
  providers: [AutenticarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
