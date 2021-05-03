import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Farmer } from '../Models/Farmer.model';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

    constructor(
      private firestore: AngularFirestore
    ) { }

    getFarmers(): Observable<any[]> {
      console.log(this.firestore.collection('farmers').snapshotChanges());
      return this.firestore.collection('farmers').valueChanges();
    }

    getFarmer(id: string) {
        return this.firestore.collection('farmers').doc(id).valueChanges();
    }

    createFarmer(farmer: Farmer) {
      this.firestore.collection('farmers').add({
        numSiret: farmer.numSiret,
        address: farmer.address,
        isBio: farmer.isBio,
        products: farmer.products,
        specialite: farmer.specialite
      });
    }

    updateFarmer(farmer: Farmer){
        delete farmer.id;
        this.firestore.doc('farmers/' + farmer.id).update(farmer);
    }

    deleteFarmer(farmerId: string){
        this.firestore.doc('farmers/' + farmerId).delete();
    }
}
