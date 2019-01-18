import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Bike } from 'src/app/models/bike.model';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-goals-bike',
  templateUrl: './goals-bike.component.html',
  styleUrls: ['./goals-bike.component.css']
})
export class GoalsBikeComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private nav: NavigationService) { }

  user: User = new User
  bike: Bike[] = []
  milesGoal: number = 0
  minsGoal: number = 0
  milesProgress: number = 0
  minsProgress: number = 0

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
      this.milesGoal = this.user.bikeMileGoal || 0
      this.minsGoal = this.user.bikeMinGoal || 0
    })
  }

  getMonthMiles() {
    let month = new Date().getMonth()
    let monthTotal = 0
    this.bike.forEach(entry =>{
      let entryMonth = new Date(entry.date).getMonth()

      if (entryMonth == month) {
        monthTotal+= entry.miles
      }
    })
    return monthTotal
  }

  getMonthMins() {
    let month = new Date().getMonth()
    let monthTotal = 0
    this.bike.forEach(entry =>{
      let entryMonth = new Date(entry.date).getMonth()

      if (entryMonth == month) {
        monthTotal+= entry.minutes
      }
    })
    return monthTotal
  }

  getMilesProgress() {
    return Math.ceil((this.getMonthMiles() / this.milesGoal) * 100)
  }

  getMinsProgress() {
    return Math.ceil((this.getMonthMins() / this.minsGoal) * 100)
  }

  getStats(uid: string) {
    this.bike = []
    this.dbService.getBikePromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let b = new Bike
        b.id = doc.id
        b.minutes = doc.data().minutes
        b.miles = doc.data().miles
        b.date = doc.data().date
        b.uid = doc.data().uid
        this.bike.push(b)

        this.milesProgress = this.getMilesProgress()
        this.minsProgress = this.getMinsProgress()
      })
    })
  }

  goBack() {
    this.nav.back()
  }
}
