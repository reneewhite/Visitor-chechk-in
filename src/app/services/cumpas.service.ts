import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';
import { Cumpas } from '../models/cumpas';

@Injectable({
  providedIn: 'root'
})
export class CumpasService {

  cumpasesRef: AngularFirestoreCollection<Cumpas>;
  cumpasDoc: AngularFirestoreDocument<Cumpas>;
  cumpas: Cumpas;
  cumpases: Observable<any>
  
  constructor(private firestore: AngularFirestore) { 

    this.cumpasesRef = firestore.collection<Cumpas>("campuses");
 
  }
  addCumpas(cumpas:Cumpas){
    var id = this.cumpasesRef.ref.doc().id;
    console.log(id);
    this.cumpasesRef.add(cumpas);
  }
  getCumpases() : Observable<any>{
    return  this.cumpasesRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Cumpas;
        const id = a.payload.doc.id;
        console.log(id);
        return { id, ...data };
      }))
    );
  }
  updateCumpas() {
    this.cumpasDoc = this.firestore.doc<Cumpas>("campuses/oddmMVaHxs32DHBpsEJx");
    console.log(this.cumpasDoc);
    this.cumpasDoc.update({name:"csir"});
  } 
  removeCumpas(){
    this.cumpasDoc = this.firestore.doc<Cumpas>("organizations/VnRojEW9OYI9JKFGzxxO");
    console.log(this.cumpasDoc);
    this.cumpasDoc.delete();
  }

}
