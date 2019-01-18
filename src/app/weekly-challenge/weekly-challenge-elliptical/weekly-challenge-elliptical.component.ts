import { Component, OnInit } from '@angular/core';
import { Elliptical } from 'src/app/models/elliptical.model';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/core/auth.service';
import { SortingService } from 'src/app/services/sorting.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-weekly-challenge-elliptical',
  templateUrl: './weekly-challenge-elliptical.component.html',
  styleUrls: ['./weekly-challenge-elliptical.component.css']
})
export class WeeklyChallengeEllipticalComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private sort: SortingService, private nav: NavigationService) { }

  user: User = new User
  userStats: Elliptical[] = []
  allStats: Object[] = []
  friendStats: Object[] = []
  stridesStats: Object[] = []
  minutesStats: Object[] = []

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

  getWeekStrides(elliptical: Elliptical[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    elliptical.forEach(entry => {
      let entryWeek = this.getWeek(new Date(entry.date))

      if (entryWeek == currentWeek) {
        weekTotal+= entry.strides
      }
    })

    return weekTotal
  }

  getWeekMins(elliptical: Elliptical[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    elliptical.forEach(entry => {
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
    this.dbService.getEllipticalPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let e = new Elliptical
        e.id = doc.id
        e.minutes = doc.data().minutes
        e.strides = doc.data().strides
        e.date = doc.data().date
        this.userStats.push(e)
      })
    })
  }

  getFriendsStats(uid: string, name: string) {
    let ellipticalStats = []
    this.dbService.getEllipticalPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let e = new Elliptical
        e.id = doc.id
        e.minutes = doc.data().minutes
        e.strides = doc.data().strides
        e.date = doc.data().date
        ellipticalStats.push(e)
      })
      this.friendStats.push({
        name: name,
        stats: ellipticalStats
      })
      this.sortStats(this.friendStats)
    })
  }

  sortStats(friendsStats) {
    friendsStats.forEach(friend => {
      this.allStats.push(friend)
    })
    this.stridesStats = this.sort.sortByStrides(this.allStats)
    this.minutesStats = this.sort.sortByMinutes(this.allStats)
  }

  goBack() {
    this.nav.back()
  }
}
