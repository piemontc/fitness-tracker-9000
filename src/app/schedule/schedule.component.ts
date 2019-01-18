import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private nav: NavigationService) { }

  categories = [
    {value: "set", location: "assets/flat-icons/calendar2.svg", view: "Schedule"},
    {value: "suggested", location: "assets/flat-icons/calendar.svg", view: "Suggested"}
  ]

  ngOnInit() {}

  goBack() {
    this.nav.back()
  }
}
