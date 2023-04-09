import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component'
import { HeaderComponentComponent } from './componente/header-component/header-component.component';

import { environment } from 'src/environments/environments';
import { AutenticarService } from './servico/autenticar.service';
import { sharedModule } from './shared/shared.module';

import { coreModule } from './core/core.module';
import { loginModule } from './page/login/login.module';

import { homeModule } from './page/home-component/home.module';
import { tuxModule } from './page/TuxAdvogados/tux.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    sharedModule,
    coreModule,
    loginModule,
    homeModule,
    tuxModule
    
  ],
  providers: [AutenticarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
