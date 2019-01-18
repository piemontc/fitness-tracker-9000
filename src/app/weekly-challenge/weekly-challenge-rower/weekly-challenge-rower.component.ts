import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/core/auth.service';
import { Rower } from 'src/app/models/rower.model';
import { SortingService } from 'src/app/services/sorting.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-weekly-challenge-rower',
  templateUrl: './weekly-challenge-rower.component.html',
  styleUrls: ['./weekly-challenge-rower.component.css']
})
export class WeeklyChallengeRowerComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private sort: SortingService, private nav: NavigationService) { }

  user: User = new User
  userStats: Rower[] = []
  allStats: Object[] = []
  friendStats: Object[] = []
  minutesStats: Object[] = []
  strokesStats: Object[] = []

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getUserStats(this.user.uid)
      this.allStats = [{name: this.user.firstName, stats: this.userStats}]
      this.user.friends.forEach(friend => {
        this.dbService.getUserPromise(friend).subscribe(snapshot => {
          snapshot.docs.forEach(doc => {
            this.getFriendsStats(doc.data().uid, doc.data().firstName)
          })
        })
      })
    })
  }

  getWeekStrokes(rower: Rower[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    rower.forEach(entry => {
      let entryWeek = this.getWeek(new Date(entry.date))

      if (entryWeek == currentWeek) {
        weekTotal+= entry.strokes
      }
    })

    return weekTotal
  }

  getWeekMins(rower: Rower[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    rower.forEach(entry => {
      if (this.getWeek(new Date(entry.date)) == currentWeek) {
        weekTotal+= entry.minutes
      }
    })

    return weekTotal
  }

  getWeek(d: Date) {
    let now = d;
    let onejan = new Date(now.getFullYear(), 0, 1);
    return Math.ceil( (((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7 );
  }

  getUserStats(uid: string) {
    this.dbService.getRowerPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let r = new Rower
        r.id = doc.id
        r.minutes = doc.data().minutes
        r.strokes = doc.data().strokes
        r.date = doc.data().date
        this.userStats.push(r)
      })
    })
  }

  getFriendsStats(uid: string, name: string) {
    let rowerStats = []
    this.dbService.getRowerPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let b = new Rower
        b.id = doc.id
        b.minutes = doc.data().minutes
        b.strokes = doc.data().strokes
        b.date = doc.data().date
        rowerStats.push(b)
      })
      this.friendStats.push({
        name: name,
        stats: rowerStats
      })
      this.sortStats(this.friendStats)
    })
  }

  sortStats(friendsStats) {
    friendsStats.forEach(friend => {
      this.allStats.push(friend)
    })
    this.minutesStats = this.sort.sortByMinutes(this.allStats)
    this.strokesStats = this.sort.sortByStrokes(this.allStats)
  }

  goBack() {
    this.nav.back()
  }
}
