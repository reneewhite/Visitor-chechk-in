import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';
import { User } from "../models/user";

@Injectable()
export class UserService {
    userRef: AngularFirestoreCollection<User>;
    userDoc: AngularFirestoreDocument<User>;
    user: User;
    users: Observable<any>

    constructor(private firestore: AngularFirestore) {
        this.userRef = firestore.collection<User>("users");
    }

    createUser(user: User) {
        this.userRef.add(user);
    }
    usersList() {
        return this.userRef.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as User;
                const id = a.payload.doc.id;
                console.log(id);
                return { id, ...data };
            }))
        );
    }
    getUsersByOrganisation(organisationId): Observable<any> {
        return null;
    }
    getAllEmplyees(){
        return this.firestore.collection('users').valueChanges()
    
        .pipe(map(users => {
            console.log(users);
            return users.filter((user: any) => {
                console.log(user.firstname)
                if (user.firstname.length > 1) {
                    return true
                }

                return false;
            })
        }))
    }
    deleteUser(userId) {
        this.userDoc = this.firestore.doc<User>("users/" + userId);
        this.userDoc.delete();
    }
    updateEmployee(userId, val: string, field: string) {
        this.userDoc = this.firestore.doc<User>("users/" + userId);
        switch (field) {
            case "firstname": {
                //statements; 
                this.userDoc.update({firstname:val});
                break;
            }
            case "lastname": {
                //statements; 
                this.userDoc.update({lastname:val});
                break;
            }
            case "email": {
                //statements; 
                this.userDoc.update({email:val});
                break;
            }
            case "organizationId": {
                //statements; 
                this.userDoc.update({organizationId:val});
                break;
            }
            default: {
                //statements; 
                
                break;
            }
        }
    }
}