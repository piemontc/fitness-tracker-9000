import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/core/auth.service';
import { SortingService } from 'src/app/services/sorting.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Running } from 'src/app/models/running.model';

@Component({
  selector: 'app-weekly-challenge-running',
  templateUrl: './weekly-challenge-running.component.html',
  styleUrls: ['./weekly-challenge-running.component.css']
})
export class WeeklyChallengeRunningComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private sort: SortingService, private nav: NavigationService) { }

  user: User = new User
  userStats: Running[] = []
  allStats: Object[] = []
  friendStats: Object[] = []
  minutesStats: Object[] = []
  milesStats: Object[] = []

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

  getWeekMiles(run: Running[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    run.forEach(entry => {
      let entryWeek = this.getWeek(new Date(entry.date))

      if (entryWeek == currentWeek) {
        weekTotal+= entry.miles
      }
    })

    return weekTotal
  }

  getWeekMins(run: Running[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    run.forEach(entry => {
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
    this.dbService.getRunningPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let r = new Running
        r.id = doc.id
        r.minutes = doc.data().minutes
        r.miles = doc.data().miles
        r.date = doc.data().date
        this.userStats.push(r)
      })
    })
  }

  getFriendsStats(uid: string, name: string) {
    let runningStats = []
    this.dbService.getRunningPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let r = new Running
        r.id = doc.id
        r.minutes = doc.data().minutes
        r.miles = doc.data().miles
        r.date = doc.data().date
        runningStats.push(r)
      })
      this.friendStats.push({
        name: name,
        stats: runningStats
      })
      this.sortStats(this.friendStats)
    })
  }

  sortStats(friendsStats) {
    friendsStats.forEach(friend => {
      this.allStats.push(friend)
    })
    this.minutesStats = this.sort.sortByMinutes(this.allStats)
    this.milesStats = this.sort.sortByMiles(this.allStats)
  }

  goBack() {
    this.nav.back()
  }
}
