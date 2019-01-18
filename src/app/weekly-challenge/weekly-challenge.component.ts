import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-weekly-challenge',
  templateUrl: './weekly-challenge.component.html',
  styleUrls: ['./weekly-challenge.component.css']
})
export class WeeklyChallengeComponent implements OnInit {

  constructor(private nav: NavigationService) { }

  ngOnInit() {
  }

  goBack() {
    this.nav.back()
  }
}
