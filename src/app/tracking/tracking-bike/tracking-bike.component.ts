import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Bike } from 'src/app/models/bike.model';
import { Router } from '@angular/router';
import { SortingService } from 'src/app/services/sorting.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/core/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tracking-bike',
  templateUrl: './tracking-bike.component.html',
  styleUrls: ['./tracking-bike.component.css']
})
export class TrackingBikeComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private sort: SortingService, public auth: AuthService, private nav: NavigationService) { }
  
  user: User = new User
  bike: Bike[] = []

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
    })
  }

  formatDate(dateString) {
    return (new Date(dateString).getMonth() + 1).toString() + '/' + new Date(dateString).getDate().toString()
  }

  deleteEntry(entry: Bike) {
    this.router.navigate(['/tracking/bike/delete/' + entry.id])
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
        this.bike = this.sort.sortByDate(this.bike)
      })
    })
  }

  getPace(val: number) {
    return `${moment.duration(val, 'minutes').get('minutes').toString()}:${moment.duration(val, 'minutes').get('seconds').toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`
  }

  goBack() {
    this.nav.back()
  }
}
