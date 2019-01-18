import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => this.updateUserData(credential))
  }


  private updateUserData(credential) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${credential.user.uid}`);
    const data: User = {
      uid: credential.user.uid,
      email: credential.user.email,
      firstName: credential.additionalUserInfo.profile.given_name,
      lastName: credential.additionalUserInfo.profile.family_name,
      displayName: credential.user.displayName,
      photoURL: credential.user.photoURL
      // bikeMinGoal: credential.user.bikeMinGoal || 0,
      // bikeMileGoal: credential.user.bikeMileGoal || 0,
      // rowerMinGoal: credential.user.rowerMinGoal || 0,
      // rowerStrokeGoal: credential.user.rowerStrokeGoal || 0,
      // runningMinGoal: credential.user.runningMinGoal || 0,
      // runningMileGoal: credential.user.runningMileGoal || 0,
      // ellipticalMinGoal: credential.user.ellipticalMinGoal || 0,
      // ellipticalStrideGoal: credential.user.ellipticalStrideGoal || 0,
      // activities: credential.user.activities || []
    }

    return userRef.set(data, { merge: true })
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}