import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user.model';
import { Activity } from 'src/app/models/activity.model';
import { DatabaseService } from 'src/app/services/database.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-set-schedule',
  templateUrl: './set-schedule.component.html',
  styleUrls: ['./set-schedule.component.css']
})
export class SetScheduleComponent implements OnInit {

  constructor(private dbService: DatabaseService, public auth: AuthService, private nav: NavigationService) { }

  user: User = new User
  monday: Object[] = []
  tuesday: Object[] = []
  wednesday: Object[] = []
  thursday: Object[] = []
  friday: Object[] = []
  saturday: Object[] = []
  sunday: Object[] = []

  form = new FormGroup({
    activity: new FormControl(''),
    duration: new FormControl(''),
    day: new FormControl('')
  })

  ngOnInit() {
    this.user = new User
    this.auth.user.subscribe(res => {
      this.user = res
      this.setSchedule()
    })
  }

  setSchedule() {
    this.clearDays()
    if(this.user.activities) {
      this.user.activities.forEach(activity => {
        if(activity.day == 'Monday') {
          this.monday.push(activity)
        } else if(activity.day == 'Tuesday') {
          this.tuesday.push(activity)
        } else if(activity.day == 'Wednesday') {
          this.wednesday.push(activity)
        } else if(activity.day == 'Thursday') {
          this.thursday.push(activity)
        } else if(activity.day == 'Friday') {
          this.friday.push(activity)
        } else if(activity.day == 'Saturday') {
          this.saturday.push(activity)
        } else if(activity.day == 'Sunday') {
          this.sunday.push(activity)
        }
      })
    }
  }

  updateSchedule(activity: Activity) {
    if(activity.day == 'Monday') {
      this.monday.push(activity)
    } else if(activity.day == 'Tuesday') {
      this.tuesday.push(activity)
    } else if(activity.day == 'Wednesday') {
      this.wednesday.push(activity)
    } else if(activity.day == 'Thursday') {
      this.thursday.push(activity)
    } else if(activity.day == 'Friday') {
      this.friday.push(activity)
    } else if(activity.day == 'Saturday') {
      this.saturday.push(activity)
    } else if(activity.day == 'Sunday') {
      this.sunday.push(activity)
    }
  }

  clearDays() {
    this.monday = []
    this.tuesday = []
    this.wednesday = []
    this.thursday = []
    this.friday = []
    this.saturday = []
    this.sunday = []
  }

  formIsEmpty() {
    if(this.form.value.day || this.form.value.activity || this.form.value.duration) {
      return this.form.value.activity.length < 1 || this.form.value.day.length < 1 || this.form.value.duration.length < 1
    } else {
      return true
    }
  }

  delete(activity: Activity) {
    this.dbService.removeActivity(this.user, activity)
  }

  clear() {
    this.clearDays()
  }

  goBack() {
    this.nav.back()
  }
}
