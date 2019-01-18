import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-update-goals',
  templateUrl: './update-goals.component.html',
  styleUrls: ['./update-goals.component.css']
})
export class UpdateGoalsComponent implements OnInit {

  constructor(public auth: AuthService, private dbService: DatabaseService, private router: Router, private nav: NavigationService) { }

  user: User = new User
  form = new FormGroup({
    bikeMinGoal: new FormControl(''),
    bikeMileGoal: new FormControl(''),
    rowerMinGoal: new FormControl(''),
    rowerStrokeGoal: new FormControl(''),
    runningMinGoal: new FormControl(''),
    runningMileGoal: new FormControl(''),
    ellipticalMinGoal: new FormControl(''),
    ellipticalStrideGoal: new FormControl('')
  })

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
    })
  }

  checkIfValid() {
    if(this.user.bikeMinGoal != null &&
       this.user.bikeMileGoal != null &&
       this.user.rowerMinGoal != null &&
       this.user.rowerStrokeGoal != null &&
       this.user.runningMinGoal != null &&
       this.user.runningMileGoal != null &&
       this.user.ellipticalMinGoal != null &&
       this.user.ellipticalStrideGoal != null) {

      return true
    } else {
      return false
    }
  }

  updateGoals(){
    this.dbService.editGoals(this.user)
    this.router.navigate(['/profile/' + this.user.uid])
  }

  cancel() {
    this.router.navigate(['/profile/' + this.user.uid])
  }

  goBack() {
    this.nav.back()
  }
}
