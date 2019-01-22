import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';
import { Organisation } from '../models/organisation';

@Injectable({
  providedIn: 'root'
})

export class OrganisationService {

  organizationsRef: AngularFirestoreCollection<Organisation>;
  organisationDoc: AngularFirestoreDocument<Organisation>;



  constructor(private firestore: AngularFirestore) {

    this.organizationsRef = firestore.collection<Organisation>("organizations");
  }

  getOrganisations() : Observable<any>{
    return  this.organizationsRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Organisation;
        const id = a.payload.doc.id;
        console.log(id);
        return { id, ...data };
      }))
    );
  }

  createOrganisation(organisation: Organisation) {
    this.organizationsRef.add(organisation);
  }

  updateOrganisation() {

    this.organisationDoc = this.firestore.doc<Organisation>("organizations/oddmMVaHxs32DHBpsEJx");
    console.log(this.organisationDoc);
    this.organisationDoc.update({name:"csir"});
  } 

  removeOrganisation(organisationId){
    
    this.organisationDoc = this.firestore.doc<Organisation>("organizations/"+organisationId);
    console.log(this.organisationDoc);
    this.organisationDoc.delete();
  }

}
