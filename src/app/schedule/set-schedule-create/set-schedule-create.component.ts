import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/core/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Activity } from 'src/app/models/activity.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-schedule-create',
  templateUrl: './set-schedule-create.component.html',
  styleUrls: ['./set-schedule-create.component.css']
})
export class SetScheduleCreateComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private nav: NavigationService, private router: Router) { }

  user: User = new User
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  form = new FormGroup({
    activity: new FormControl(''),
    duration: new FormControl(''),
    day: new FormControl('')
  })

  ngOnInit() {
    this.user = new User
    this.auth.user.subscribe(res => {
      this.user = res
    })
  }

  submitForm() {
    let a = new Activity
    a.activity = this.form.value.activity
    a.duration = this.form.value.duration
    a.day = this.form.value.day
    this.dbService.addActivity(this.user, a)
    
    this.router.navigate(['/schedule/set'])
  }

  formIsEmpty() {
    if(this.form.value.day || this.form.value.activity || this.form.value.duration) {
      return this.form.value.activity.length < 1 || this.form.value.day.length < 1 || this.form.value.duration.length < 1
    } else {
      return true
    }
  }

  clear() {
    this.form.reset()
  }

  goBack() {
    this.nav.back()
  }

}
