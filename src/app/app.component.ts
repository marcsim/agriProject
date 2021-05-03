import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    firebase.analytics();
  }
}
