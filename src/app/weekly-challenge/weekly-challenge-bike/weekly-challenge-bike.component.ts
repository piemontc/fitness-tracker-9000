import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Bike } from 'src/app/models/bike.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/core/auth.service';
import { SortingService } from 'src/app/services/sorting.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-weekly-challenge-bike',
  templateUrl: './weekly-challenge-bike.component.html',
  styleUrls: ['./weekly-challenge-bike.component.css']
})
export class WeeklyChallengeBikeComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private sort: SortingService, private nav: NavigationService) { }

  user: User = new User
  userStats: Bike[] = []
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

  getWeekMiles(bike: Bike[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    bike.forEach(entry => {
      let entryWeek = this.getWeek(new Date(entry.date))

      if (entryWeek == currentWeek) {
        weekTotal+= entry.miles
      }
    })

    return weekTotal
  }

  getWeekMins(bike: Bike[]) {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    bike.forEach(entry => {
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
    this.dbService.getBikePromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let b = new Bike
        b.id = doc.id
        b.minutes = doc.data().minutes
        b.miles = doc.data().miles
        b.date = doc.data().date
        this.userStats.push(b)
      })
    })
  }

  getFriendsStats(uid: string, name: string) {
    let bikeStats = []
    this.dbService.getBikePromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let b = new Bike
        b.id = doc.id
        b.minutes = doc.data().minutes
        b.miles = doc.data().miles
        b.date = doc.data().date
        bikeStats.push(b)
      })
      this.friendStats.push({
        name: name,
        stats: bikeStats
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
