import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-tracking-rower-add',
  templateUrl: './tracking-rower-add.component.html',
  styleUrls: ['./tracking-rower-add.component.css']
})
export class TrackingRowerAddComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router, public auth: AuthService) { }

  user: User = new User
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  years = [2018, 2019, 2020]

  ngOnInit() {
    this.auth.user.subscribe(res => {
      this.user = res
    })
  }

  form = new FormGroup({
    minutes: new FormControl(''),
    strokes: new FormControl(''),
    day: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl('')
  })

  submitForm() {
    this.firestore.collection('rower').add({
      minutes: this.form.value.minutes,
      strokes: this.form.value.strokes,
      name: this.user.firstName,
      date: this.createDate(this.form.value.day, this.form.value.month, this.form.value.year),
      uid: this.user.uid
    })

    this.router.navigate(['/tracking/rower'])
  }

  createDate(day: number, month: number, year: number) {
    return (month).toString() + "/" + day.toString() + "/" + year.toString()
  }
}
