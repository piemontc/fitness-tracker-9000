import { Component, OnInit } from '@angular/core';
import { Rower } from 'src/app/models/rower.model';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
import { SortingService } from 'src/app/services/sorting.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-tracking-rower',
  templateUrl: './tracking-rower.component.html',
  styleUrls: ['./tracking-rower.component.css']
})
export class TrackingRowerComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private sort: SortingService, public auth: AuthService) { }

  user: User = new User
  rower: Rower[] = []

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
      this.getStats(this.user.uid)
    })
  }

  formatDate(dateString) {
    return (new Date(dateString).getMonth() + 1).toString() + '/' + new Date(dateString).getDate().toString()
  }

  deleteEntry(entry: Rower) {
    this.router.navigate(['/tracking/rower/delete/' + entry.id])
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
        this.rower = this.sort.sortByDate(this.rower)
      })
    })
  }
}