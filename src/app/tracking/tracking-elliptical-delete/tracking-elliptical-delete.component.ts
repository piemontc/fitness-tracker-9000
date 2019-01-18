import { Component, OnInit } from '@angular/core';
import { Elliptical } from 'src/app/models/elliptical.model';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-tracking-elliptical-delete',
  templateUrl: './tracking-elliptical-delete.component.html',
  styleUrls: ['./tracking-elliptical-delete.component.css']
})
export class TrackingEllipticalDeleteComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private route: ActivatedRoute, private nav: NavigationService) { }

  ellipticalToDelete: Elliptical = new Elliptical()

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dbService.getEntry('elliptical', params.get("id")).subscribe(entry => {
        this.ellipticalToDelete.id = entry.id
        this.ellipticalToDelete.minutes = entry.data().minutes
        this.ellipticalToDelete.strides = entry.data().strides
        this.ellipticalToDelete.date = entry.data().date
      })
    })
  }

  delete() {
    this.dbService.deleteEntry('elliptical', this.ellipticalToDelete.id)
    this.router.navigate(['/tracking/elliptical'])
  }

  goBack() {
    this.nav.back()
  }
}
