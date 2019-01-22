import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  organizations: AngularFirestoreCollection<User>;
  organisationDoc: AngularFirestoreDocument<User>;

  constructor(private firestore: AngularFirestore) { }
  
}
