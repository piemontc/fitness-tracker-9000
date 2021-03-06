import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Bike } from 'src/app/models/bike.model';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-stats-bike-miles',
  templateUrl: './stats-bike-miles.component.html',
  styleUrls: ['./stats-bike-miles.component.css']
})
export class StatsBikeMilesComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private nav: NavigationService) { }

  user: User = new User
  bike: Bike[] = []
  thisMonth = new Date().getMonth()
  thisYear = new Date().getFullYear()
  months: Object = [
    {value: 0, viewValue: 'January'},
    {value: 1, viewValue: 'February'},
    {value: 2, viewValue: 'March'},
    {value: 3, viewValue: 'April'},
    {value: 4, viewValue: 'May'},
    {value: 5, viewValue: 'June'},
    {value: 6, viewValue: 'July'},
    {value: 7, viewValue: 'August'},
    {value: 8, viewValue: 'September'},
    {value: 9, viewValue: 'October'},
    {value: 10, viewValue: 'November'},
    {value: 11, viewValue: 'December'},
  ]
  years: Object = [
    {value: 2018, viewValue: '2018'},
    {value: 2019, viewValue: '2019'}
  ]

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
    })
  }

  getWeekMiles() {
    let currentWeek = this.getWeek(new Date())
    let weekTotal = 0

    this.bike.forEach(entry => {
      let entryWeek = this.getWeek(new Date(entry.date))

      if (entryWeek == currentWeek) {
        weekTotal+= entry.miles
      }
    })

    return weekTotal
  }

  getMonthMiles(month: number) {
    let monthTotal = 0

    this.bike.forEach(entry =>{
      let entryMonth = new Date(entry.date).getMonth()

      if (entryMonth == month) {
        monthTotal+= entry.miles
      }
    })

    return monthTotal
  }

  getYearMiles(year: number) {
    let yearTotal = 0

    this.bike.forEach(entry =>{
      let entryYear = new Date(entry.date).getFullYear()

      if (entryYear == year) {
        yearTotal+= entry.miles
      }
    })

    return yearTotal
  }

  getWeek(d: Date) {
    let now = d;
    let onejan = new Date(now.getFullYear(), 0, 1);
    return Math.ceil( (((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7 );
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
        this.bike.push(b)
      })
    })
  }

  goBack() {
    this.nav.back()
  }
}
