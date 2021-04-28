import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAgqf4p4Hn7ScOhvxGsudvCrYZ05elfZV0',
      authDomain: 'agriproject-df5f4.firebaseapp.com',
      databaseURL: 'https://agriproject-df5f4-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'agriproject-df5f4',
      storageBucket: 'agriproject-df5f4.appspot.com',
      messagingSenderId: '807796952573',
      appId: '1:807796952573:web:929f82b278919eb0989d94',
      measurementId: 'G-Q31TXT0BWF'
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
