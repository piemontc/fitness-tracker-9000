import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService, private dbService: DatabaseService, private router: Router, private route: ActivatedRoute, private nav: NavigationService) { }

  loggedInUser: User = new User
  user: User = new User
  goals: Object[] = []
  records: Object[] = []
  friends: Object[] = []
  bikeMins: number = 0
  bikeMiles: number = 0
  rowerMins: number = 0
  rowerStrokes: number = 0
  runningMins: number = 0
  runningMiles: number = 0
  ellipticalMins: number = 0
  ellipticalStrides: number = 0
  currentGoal: number
  currentRecord: number

  ngOnInit() {
    this.friends = []
    this.auth.user.subscribe(res => {
      this.loggedInUser = res
      this.currentGoal = this.loggedInUser.bikeMinGoal || 0
      this.goals = [
        {view: 'Bike Minutes', value: this.loggedInUser.bikeMinGoal || 0},
        {view: 'Bike Miles', value: this.loggedInUser.bikeMileGoal || 0},
        {view: 'Elliptical Minutes', value: this.loggedInUser.ellipticalMinGoal || 0},
        {view: 'Elliptical Strides', value: this.loggedInUser.ellipticalStrideGoal || 0},
        {view: 'Rower Minutes', value: this.loggedInUser.rowerMinGoal || 0},
        {view: 'Rower Strokes', value: this.loggedInUser.rowerStrokeGoal || 0},
        {view: 'Running Minutes', value: this.loggedInUser.runningMinGoal || 0},
        {view: 'Running Miles', value: this.loggedInUser.runningMileGoal || 0}
      ]
    })

    this.route.paramMap.subscribe(params => {
      this.dbService.getUserPromise(params.get('uid')).subscribe(snapshot => {
        snapshot.docs.forEach(doc => {
          this.user.uid = doc.data().uid
          this.user.email = doc.data().email
          this.user.firstName = doc.data().firstName
          this.user.lastName = doc.data().lastName
          this.user.displayName = doc.data().displayName
          this.user.photoURL = doc.data().photoURL
          this.user.friends = doc.data().friends
          this.getMaxBikeMinutes(this.user)
          this.getMaxBikeMiles(this.user)
          this.getMaxRowerMinutes(this.user)
          this.getMaxStrokes(this.user)
          this.getMaxEllipticalMinutes(this.user)
          this.getMaxEllipticalStrides(this.user)
          this.getMaxRunningMinutes(this.user)
          this.getMaxRunningMiles(this.user)
          if(this.user.friends) {
            this.user.friends.forEach(friend => {
              this.user.friends.push(friend)
              this.dbService.getUserPromise(friend).subscribe(snapshot => {
                snapshot.docs.forEach(doc => {
                  this.getFriendsInfo(doc.data().uid, doc.data().photoURL, doc.data().displayName)
                })
              })
            })
          }
        })
      })
    })
  }

  getFriendsInfo(uid: string, photoUrl: string, name: string) {
    this.friends.push({
      name: name,
      photo: photoUrl,
      uid: uid
    })
  }

  visitProfile(uid: string) {
    this.user = new User
    this.friends = []
    this.router.navigate(['/profile/' + uid])
  }

  getMaxBikeMinutes(user: User) {
    let mins: number[] = []
    this.dbService.getBikePromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        mins.push(doc.data().minutes)
        this.bikeMins = this.getMaxOfArray(mins)
        this.currentRecord = this.bikeMins
        this.setRecords()
      })
    })
  }

  getMaxBikeMiles(user: User) {
    let miles: number[] = []
    this.dbService.getBikePromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        miles.push(doc.data().miles)
        this.bikeMiles = this.getMaxOfArray(miles)
        this.setRecords()
      })
    })
  }

  getMaxEllipticalMinutes(user: User) {
    let mins: number[] = []
    this.dbService.getEllipticalPromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        mins.push(doc.data().minutes)
        this.ellipticalMins = this.getMaxOfArray(mins)
        this.setRecords()
      })
    })
  }

  getMaxEllipticalStrides(user: User) {
    let strides: number[] = []
    this.dbService.getEllipticalPromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        strides.push(doc.data().strides)
        this.ellipticalStrides = this.getMaxOfArray(strides)
        this.setRecords()
      })
    })
  }

  getMaxRowerMinutes(user: User) {
    let mins: number[] = []
    this.dbService.getRowerPromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        mins.push(doc.data().minutes)
        this.rowerMins = this.getMaxOfArray(mins)
        this.setRecords()
      })
    })
  }

  getMaxStrokes(user: User) {
    let strokes: number[] = []
    this.dbService.getRowerPromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        strokes.push(doc.data().strokes)
        this.rowerStrokes = this.getMaxOfArray(strokes)
        this.setRecords()
      })
    })
  }

  getMaxRunningMinutes(user: User) {
    let mins: number[] = []
    this.dbService.getRunningPromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        mins.push(doc.data().minutes)
        this.runningMins = this.getMaxOfArray(mins)
        this.setRecords()
      })
    })
  }

  getMaxRunningMiles(user: User) {
    let miles: number[] = []
    this.dbService.getRunningPromise(user.uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        miles.push(doc.data().miles)
        this.runningMiles = this.getMaxOfArray(miles)
        this.setRecords()
      })
    })
  }

  getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
  }

  setRecords() {
    this.records = [
      {view: 'Bike Minutes', value: this.bikeMins || 0},
      {view: 'Bike Miles', value: this.bikeMiles || 0},
      {view: 'Elliptical Minutes', value: this.ellipticalMins || 0},
      {view: 'Elliptical Strides', value: this.ellipticalStrides || 0},
      {view: 'Rower Minutes', value: this.rowerMins || 0},
      {view: 'Rower Strokes', value: this.rowerStrokes || 0},
      {view: 'Running Minutes', value: this.runningMins || 0},
      {view: 'Running Miles', value: this.runningMiles || 0}
    ]
  }

  recordsLoaded() {
    if(this.user.bikeMinGoal && this.user.bikeMinGoal && this.user.rowerMinGoal && this.user.rowerStrokeGoal && this.user.ellipticalMinGoal
      && this.user.ellipticalStrideGoal && this.user.runningMileGoal && this.user.runningMinGoal) {
      return true
    } else {
      return false
    }
  }

  followUser() {
    this.dbService.followUser(this.loggedInUser, this.user.uid)
    this.router.navigate(['/profile/' + this.user.uid])
  }

  unfollowUser() {
    this.dbService.unfollowUser(this.loggedInUser, this.user.uid)
    this.router.navigate(['/profile/' + this.user.uid])
  }

  areWeFriends(uid: string) {
    let friends = false
    if(this.loggedInUser.friends) {
      this.loggedInUser.friends.forEach(friend => {
        if(uid == friend) {
          friends = true
        }
      })
    }
    return friends
  }

  goBack() {
    this.friends = []
    this.nav.back()
  }
}
