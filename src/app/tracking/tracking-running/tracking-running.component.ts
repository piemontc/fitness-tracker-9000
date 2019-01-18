import { Component, OnInit } from '@angular/core';
import { Running } from 'src/app/models/running.model';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
import { SortingService } from 'src/app/services/sorting.service';
import { AuthService } from 'src/app/core/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { User } from 'src/app/models/user.model';
import * as moment from 'moment';

@Component({
  selector: 'app-tracking-running',
  templateUrl: './tracking-running.component.html',
  styleUrls: ['./tracking-running.component.css']
})
export class TrackingRunningComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private sort: SortingService, public auth: AuthService, private nav: NavigationService) { }
  
  user: User = new User
  run: Running[] = []

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
    })
  }

  formatDate(dateString) {
    return (new Date(dateString).getMonth() + 1).toString() + '/' + new Date(dateString).getDate().toString()
  }

  deleteEntry(entry: Running) {
    this.router.navigate(['/tracking/running/delete/' + entry.id])
  }

  getStats(uid: string) {
    this.run = []
    this.dbService.getRunningPromise(uid).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        let r = new Running
        r.id = doc.id
        r.minutes = doc.data().minutes
        r.miles = doc.data().miles
        r.date = doc.data().date
        this.run.push(r)
        this.run = this.sort.sortByDate(this.run)
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
