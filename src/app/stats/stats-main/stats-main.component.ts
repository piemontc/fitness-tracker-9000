import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-stats-main',
  templateUrl: './stats-main.component.html',
  styleUrls: ['./stats-main.component.css']
})
export class StatsMainComponent implements OnInit {

  constructor(private nav: NavigationService) { }

  categories = [
    {value: "goals", location: "assets/flat-icons/leader.svg", view: "Goals"},
    {value: "totals", location: "assets/flat-icons/add.svg", view: "Totals"}
  ]

  ngOnInit() {}

  goBack() {
    this.nav.back()
  }
}
