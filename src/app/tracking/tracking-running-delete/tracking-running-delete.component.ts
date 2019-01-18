import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Running } from 'src/app/models/running.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-tracking-running-delete',
  templateUrl: './tracking-running-delete.component.html',
  styleUrls: ['./tracking-running-delete.component.css']
})
export class TrackingRunningDeleteComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private route: ActivatedRoute, private nav: NavigationService) { }

  runToDelete: Running = new Running()

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dbService.getEntry('running', params.get("id")).subscribe(entry => {
        this.runToDelete.id = entry.id
        this.runToDelete.minutes = entry.data().minutes
        this.runToDelete.miles = entry.data().miles
        this.runToDelete.date = entry.data().date
      })
    })
  }

  delete() {
    this.dbService.deleteEntry('running', this.runToDelete.id)
    this.router.navigate(['/tracking/running'])
  }

  goBack() {
    this.nav.back()
  }
}
