import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  user: User = new User
  categories: Object = []

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit() {
    this.user = new User
    this.auth.user.subscribe(res => {
      this.user = res
      if(this.user) {
        this.categories = [
          {value: `profile/${this.user.uid}`, location: "assets/flat-icons/user.svg", view: "Profile"},
          {value: "schedule", location: "assets/flat-icons/calendar3.svg", view: "Schedule"},
          {value: "search", location: "assets/flat-icons/magnifier.svg", view: "Search"},
          {value: "stats", location: "assets/flat-icons/promotion.svg", view: "Statistics"},
          {value: "tracking", location: "assets/flat-icons/check-list.svg", view: "Tracking"},
          {value: "weekly-challenge", location: "assets/flat-icons/podium.svg", view: "Weekly Challenge"}
        ]
      }
    })
  }
}
