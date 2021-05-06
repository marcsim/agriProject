import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    constructor(
        private firestore: AngularFirestore
    ) { }

    getCategories(): Observable<any[]> {
        console.log(this.firestore.collection('categories').snapshotChanges());
        return this.firestore.collection('categories').valueChanges();
    }
    //TODO : trouver le type de retour
    getCategory(name: string): any {
        this.firestore.collection('categories').snapshotChanges(['added'])
        .subscribe(actions => {
            actions.forEach(action => {
                if(name === action.payload.doc.data()['nom']) {
                    console.log(action.payload.doc.data()['nom']);
                    return action.payload.doc.data()['nom'];
                }
            });
        });
        //return this.firestore.collection('categories').doc(name).valueChanges();
    }
}
