import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ClientComponentComponent } from './client-component/client-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { SobreComponentComponent } from './sobre-component/sobre-component.component';
import { FotoComponentComponent } from './foto-component/foto-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ClientComponentComponent,
    FormularioComponentComponent,
    SobreComponentComponent,
    FotoComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
