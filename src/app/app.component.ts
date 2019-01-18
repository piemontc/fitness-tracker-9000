import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService) { }

  user: User

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
    })
  }

  goToProfile(uid: string) {
    return `/profile/${uid}`
  }
}
