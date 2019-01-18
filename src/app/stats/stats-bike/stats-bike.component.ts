import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-stats-bike',
  templateUrl: './stats-bike.component.html',
  styleUrls: ['./stats-bike.component.css']
})
export class StatsBikeComponent implements OnInit {

  constructor(private nav: NavigationService) { }

  categories = [
    {value: "miles", location: "assets/flat-icons/measuring-tape.svg", view: "Distance"},
    {value: "minutes", location: "assets/flat-icons/stopwatch.svg", view: "Time"}
  ]

  ngOnInit() {}

  goBack() {
    this.nav.back()
  }
}
