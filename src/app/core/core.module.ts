import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],

    exports: [
        AngularFirestoreModule,
        AngularFireAuthModule,
        AppRoutingModule
    ]
})

export class coreModule {}