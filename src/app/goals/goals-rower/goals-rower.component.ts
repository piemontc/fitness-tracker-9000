import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Rower } from 'src/app/models/rower.model';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-goals-rower',
  templateUrl: './goals-rower.component.html',
  styleUrls: ['./goals-rower.component.css']
})
export class GoalsRowerComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private nav: NavigationService) { }

  user: User = new User
  rower: Rower[] = []
  strokesGoal: number = 0
  minsGoal: number = 0
  strokesProgress: number = 0
  minsProgress: number = 0

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
      this.strokesGoal = this.user.rowerStrokeGoal || 0
      this.minsGoal = this.user.rowerMinGoal || 0
    })
  }

  getMonthStrokes() {
    let month = new Date().getMonth()
    let monthTotal = 0
    this.rower.forEach(entry =>{
      let entryMonth = new Date(entry.date).getMonth()
      if (entryMonth == month) {
        monthTotal+= entry.strokes
      }
    })
    return monthTotal
  }

  getMonthMins() {
    let month = new Date().getMonth()
    let monthTotal = 0
    this.rower.forEach(entry =>{
      let entryMonth = new Date(entry.date).getMonth()
      if (entryMonth == month) {
        monthTotal+= entry.minutes
      }
    })
    return monthTotal
  }

  getStrokesProgress() {
    return Math.ceil((this.getMonthStrokes() / this.strokesGoal) * 100)
  }

  getMinsProgress() {
    return Math.ceil((this.getMonthMins() / this.minsGoal) * 100)
  }

  getStats(uid: string) {
    this.rower = []
    this.dbService.getRowerPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let r = new Rower
        r.id = doc.id
        r.minutes = doc.data().minutes
        r.strokes = doc.data().strokes
        r.date = doc.data().date
        this.rower.push(r)

        this.strokesProgress = this.getStrokesProgress()
        this.minsProgress = this.getMinsProgress()
      })
    })
  }

  goBack() {
    this.nav.back()
  }
}
