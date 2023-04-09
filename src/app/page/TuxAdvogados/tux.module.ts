import { NgModule } from "@angular/core";

import { FotoComponentComponent } from "./foto-component/foto-component.component";
import { ClientComponentComponent } from "./client-component/client-component.component";

import { FormupdateComponent } from "./formupdate/formupdate.component";
import { SobreComponentComponent } from "./sobre-component/sobre-component.component";

import { FormularioComponentComponent } from "./formulario-component/formulario-component.component";
import { sharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        FotoComponentComponent,
        ClientComponentComponent,
        FormupdateComponent,
        SobreComponentComponent,
        FormularioComponentComponent
    ],

    imports: [sharedModule],

    exports: [FotoComponentComponent]
})

export class tuxModule{}