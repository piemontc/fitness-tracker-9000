import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
import { SortingService } from 'src/app/services/sorting.service';
import { AuthService } from 'src/app/core/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Elliptical } from 'src/app/models/elliptical.model';

@Component({
  selector: 'app-tracking-elliptical',
  templateUrl: './tracking-elliptical.component.html',
  styleUrls: ['./tracking-elliptical.component.css']
})
export class TrackingEllipticalComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private sort: SortingService, public auth: AuthService, private nav: NavigationService) { }
  
  user: User = new User
  elliptical: Elliptical[] = []

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
    })
  }

  formatDate(dateString) {
    return (new Date(dateString).getMonth() + 1).toString() + '/' + new Date(dateString).getDate().toString()
  }

  deleteEntry(entry: Elliptical) {
    this.router.navigate(['/tracking/elliptical/delete/' + entry.id])
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
        this.elliptical.push(e)
        this.elliptical = this.sort.sortByDate(this.elliptical)
      })
    })
  }

  goBack() {
    this.nav.back()
  }
}
