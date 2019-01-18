import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-stats-elliptical',
  templateUrl: './stats-elliptical.component.html',
  styleUrls: ['./stats-elliptical.component.css']
})
export class StatsEllipticalComponent implements OnInit {

  constructor(private nav: NavigationService) { }

  categories = [
    {value: "strides", location: "assets/flat-icons/measuring-tape.svg", view: "Strides"},
    {value: "minutes", location: "assets/flat-icons/stopwatch.svg", view: "Time"}
  ]

  ngOnInit() {
  }

  goBack() {
    this.nav.back()
  }
}
