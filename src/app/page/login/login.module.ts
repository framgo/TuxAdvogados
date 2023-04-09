import { NgModule } from "@angular/core";

import { sharedModule } from "src/app/shared/shared.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [LoginComponent],

    imports: [sharedModule]
})

export class loginModule{}