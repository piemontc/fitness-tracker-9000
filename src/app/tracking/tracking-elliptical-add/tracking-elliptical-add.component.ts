import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-tracking-elliptical-add',
  templateUrl: './tracking-elliptical-add.component.html',
  styleUrls: ['./tracking-elliptical-add.component.css']
})
export class TrackingEllipticalAddComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router, public auth: AuthService, private nav: NavigationService) { }

  user: User = new User
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  years = [2018, 2019, 2020]

  form = new FormGroup({
    minutes: new FormControl(''),
    strides: new FormControl(''),
    day: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl('')
  })

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
    })
  }

  submitForm() {
    this.firestore.collection('elliptical').add({
      minutes: this.form.value.minutes,
      strides: this.form.value.strides,
      name: this.user.firstName,
      date: this.createDate(this.form.value.day, this.form.value.month, this.form.value.year),
      uid: this.user.uid
    })

    this.router.navigate(['/tracking/elliptical'])
  }

  createDate(day: number, month: number, year: number) {
    return (month).toString() + "/" + day.toString() + "/" + year.toString()
  }

  goBack() {
    this.nav.back()
  }
}
