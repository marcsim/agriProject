/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './../Models/User.model';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { LoadingController, ToastController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  user: User;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    this.user$ = this.afauth.authState
    .pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public async signIn(email: string, password: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Authentification...',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
    .then(() => {
      this.afauth.signInWithEmailAndPassword(email, password)
      .then((data) =>
      {
        if (!data.user.emailVerified) {
          loading.dismiss();
          this.toast('Regardez vos emails ...', 'warning');
          this.afauth.signOut();
        } else {
          loading.dismiss();
          this.router.navigate(['/home']);
        }
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    });
  }

  public async signOut() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.signOut()
    .then(() => {
      loading.dismiss();
      this.router.navigate(['/home']);
    });
  }

  public async signUp(email: string, fullName: string, password: string) {
    const loading = await this.loadingCtrl.create({
      message: 'chargement...',
      spinner: 'crescent',
      backdropDismiss: true
    });
    loading.present();

    this.afauth.createUserWithEmailAndPassword(email, password)
    .then((data) => {
      data.user.sendEmailVerification();
      this.afs.collection('users').doc(data.user.uid).set({
        'userId': data.user.uid,
        'email': email,
        'fullName': fullName
      })
      .then(() => {
        loading.dismiss();
        this.toast('Inscription réussie', 'success');
        this.router.navigate(['/home']);
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
        console.log(error);
      });
    })
    .catch(error => {
      this.toast(error.message, 'danger');
    });
  }

  public async toast(message: string, status: string) {
    const toast = await this.toastCtrl.create({
      message,
      color: status,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
}
