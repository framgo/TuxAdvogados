import { Injectable, OnInit } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class FirebaseService{

    collection: AngularFirestoreCollection;

    constructor(private af: AngularFirestore){
        this.collection = this.af.collection('clientes'); 
    }
    
    consulta(){
        return this.collection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data}
                })
            })
        )
    }

    cadastrar(dados){
        return this.collection.add(dados);
    }

    editar(id, dados){
        return this.collection.doc(id).update(dados);
    }

    excluir(id){
        return this.collection.doc(id).delete();
    }
}