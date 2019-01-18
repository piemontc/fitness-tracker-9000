import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Running } from 'src/app/models/running.model';
import { NavigationService } from 'src/app/services/navigation.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-goals-running',
  templateUrl: './goals-running.component.html',
  styleUrls: ['./goals-running.component.css']
})
export class GoalsRunningComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private nav: NavigationService) { }

  user: User = new User
  running: Running[] = []
  milesGoal: number = 30
  minsGoal: number = 240
  milesProgress: number = 0
  minsProgress: number = 0

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
      this.milesGoal = this.user.runningMileGoal || 0
      this.minsGoal = this.user.runningMinGoal || 0
    })
  }

  getMonthMiles() {
    let month = new Date().getMonth()
    let monthTotal = 0
    this.running.forEach(entry =>{
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
    this.running.forEach(entry =>{
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
    this.running = []
    this.dbService.getRunningPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let r = new Running
        r.id = doc.id
        r.minutes = doc.data().minutes
        r.miles = doc.data().miles
        r.date = doc.data().date
        this.running.push(r)

        this.milesProgress = this.getMilesProgress()
        this.minsProgress = this.getMinsProgress()
      })
    })
  }

  goBack() {
    this.nav.back()
  }
}
