import { NgModule } from "@angular/core";
import { sharedModule } from "src/app/shared/shared.module";

import { tuxModule } from "../TuxAdvogados/tux.module";
import { HomeComponentComponent } from "./home-component.component";

@NgModule({
    declarations: [HomeComponentComponent],

    imports: [
        sharedModule,
        tuxModule
    ]
})

export class homeModule{}