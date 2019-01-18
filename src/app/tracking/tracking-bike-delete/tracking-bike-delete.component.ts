import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Bike } from 'src/app/models/bike.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-tracking-bike-delete',
  templateUrl: './tracking-bike-delete.component.html',
  styleUrls: ['./tracking-bike-delete.component.css']
})
export class TrackingBikeDeleteComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private route: ActivatedRoute, private nav: NavigationService) { }

  bikeToDelete: Bike = new Bike()

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dbService.getEntry('bike', params.get("id")).subscribe(entry => {
        this.bikeToDelete.id = entry.id
        this.bikeToDelete.minutes = entry.data().minutes
        this.bikeToDelete.miles = entry.data().miles
        this.bikeToDelete.name = entry.data().name
        this.bikeToDelete.date = entry.data().date
      })
    })
  }

  delete() {
    this.dbService.deleteEntry('bike', this.bikeToDelete.id)
    this.router.navigate(['/tracking/bike'])
  }

  goBack() {
    this.nav.back()
  }
}
