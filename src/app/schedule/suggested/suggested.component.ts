import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {

  constructor(private nav: NavigationService) { }

  ngOnInit() {}

  goBack() {
    this.nav.back()
  }
}
