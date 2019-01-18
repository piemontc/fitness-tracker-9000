import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import * as firebase from 'firebase';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit{

  constructor(private firestore: AngularFirestore) { }

  db: any

  ngOnInit() {
  }

  getBikePromise(uid: string) {
    return this.firestore.collection('bike', ref => ref.where('uid', '==', uid)).get()
  }

  getEllipticalPromise(uid: string) {
    return this.firestore.collection('elliptical', ref => ref.where('uid', '==', uid)).get()
  }

  getRowerPromise(uid: string) {
    return this.firestore.collection('rower', ref => ref.where('uid', '==', uid)).get()
  }

  getUserPromise(uid: String) {
    return this.firestore.collection('users', ref => ref.where('uid', '==', uid)).get()
  }

  getRunningPromise(uid: string) {
    return this.firestore.collection('running', ref => ref.where('uid', '==', uid)).get()
  }

  getEntry(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).get()
  }

  deleteEntry(collection: string, id: string) {
    this.firestore.collection(collection).doc(id).delete()
  }

  searchForUserByFirstName(name: string) {
    return this.firestore.collection('users', ref => ref.orderBy("firstName").startAt(name).endAt(name + "\uf8ff")).get()
  }

  searchForUserByLastName(name: string) {
    return this.firestore.collection('users', ref => ref.orderBy("lastName").startAt(name).endAt(name + "\uf8ff")).get()
  }

  searchForUserByFullName(name: string) {
    return this.firestore.collection('users', ref => ref.orderBy("displayName").startAt(name).endAt(name + "\uf8ff")).get()
  }

  searchForUserByEmail(name: string) {
    return this.firestore.collection('users', ref => ref.orderBy("email").startAt(name).endAt(name + "\uf8ff")).get()
  }

  addActivity(user: User, activity: Activity) {
    this.firestore.collection('users').doc(user.uid).update({
      activities: firebase.firestore.FieldValue.arrayUnion({
        day: activity.day,
        duration: activity.duration,
        activity: activity.activity
      })
    })
  }

  removeActivity(user: User, activity: Activity) {
    this.firestore.collection('users').doc(user.uid).update({
      activities: firebase.firestore.FieldValue.arrayRemove({
        day: activity.day,
        duration: activity.duration,
        activity: activity.activity
      })
    })
  }
  
  editGoals(user: User) {
    this.firestore.collection('users').doc(user.uid).update({
      bikeMinGoal: user.bikeMinGoal,
      bikeMileGoal: user.bikeMileGoal,
      rowerMinGoal: user.rowerMinGoal,
      rowerStrokeGoal: user.rowerStrokeGoal,
      runningMinGoal: user.runningMinGoal,
      runningMileGoal: user.runningMileGoal,
      ellipticalMinGoal: user.ellipticalMinGoal,
      ellipticalStrideGoal: user.ellipticalStrideGoal
    })
  }

  followUser(user: User, uid: string) {
    this.firestore.collection('users').doc(user.uid).update({
      friends: firebase.firestore.FieldValue.arrayUnion(uid)
    })
  }

  unfollowUser(user: User, uid: string) {
    this.firestore.collection('users').doc(user.uid).update({
      friends: firebase.firestore.FieldValue.arrayRemove(uid)
    })
  }
}
