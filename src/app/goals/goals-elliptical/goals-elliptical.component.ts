import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/core/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Elliptical } from 'src/app/models/elliptical.model';

@Component({
  selector: 'app-goals-elliptical',
  templateUrl: './goals-elliptical.component.html',
  styleUrls: ['./goals-elliptical.component.css']
})
export class GoalsEllipticalComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private nav: NavigationService) { }

  user: User = new User
  elliptical: Elliptical[] = []
  stridesGoal: number = 0
  minsGoal: number = 0
  stridesProgress: number = 0
  minsProgress: number = 0

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
      this.stridesGoal = this.user.ellipticalStrideGoal || 0
      this.minsGoal = this.user.ellipticalMinGoal || 0
    })
  }

  getMonthStrides() {
    let month = new Date().getMonth()
    let monthTotal = 0
    this.elliptical.forEach(entry =>{
      let entryMonth = new Date(entry.date).getMonth()

      if (entryMonth == month) {
        monthTotal+= entry.strides
      }
    })
    return monthTotal
  }

  getMonthMins() {
    let month = new Date().getMonth()
    let monthTotal = 0
    this.elliptical.forEach(entry =>{
      let entryMonth = new Date(entry.date).getMonth()

      if (entryMonth == month) {
        monthTotal+= entry.minutes
      }
    })
    return monthTotal
  }

  getStridesProgress() {
    return Math.ceil((this.getMonthStrides() / this.stridesGoal) * 100)
  }

  getMinsProgress() {
    return Math.ceil((this.getMonthMins() / this.minsGoal) * 100)
  }

  getStats(uid: string) {
    this.elliptical = []
    this.dbService.getEllipticalPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let e = new Elliptical
        e.id = doc.id
        e.minutes = doc.data().minutes
        e.strides = doc.data().strides
        e.date = doc.data().date
        e.uid = doc.data().uid
        this.elliptical.push(e)

        this.stridesProgress = this.getStridesProgress()
        this.minsProgress = this.getMinsProgress()
      })
    })
  }

  goBack() {
    this.nav.back()
  }
}
