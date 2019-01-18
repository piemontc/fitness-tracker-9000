import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Rower } from 'src/app/models/rower.model';

@Component({
  selector: 'app-tracking-rower-delete',
  templateUrl: './tracking-rower-delete.component.html',
  styleUrls: ['./tracking-rower-delete.component.css']
})
export class TrackingRowerDeleteComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router, private route: ActivatedRoute) { }

  rowerToDelete: Rower = new Rower()

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dbService.getEntry('rower', params.get("id")).subscribe(entry => {
        this.rowerToDelete.id = entry.id
        this.rowerToDelete.minutes = entry.data().minutes
        this.rowerToDelete.strokes = entry.data().strokes
        this.rowerToDelete.date = entry.data().date
        this.rowerToDelete.name = entry.data().name
      })
    })
  }

  delete() {
    this.dbService.deleteEntry('rower', this.rowerToDelete.id)
    this.router.navigate(['/tracking/rower'])
  }
}
