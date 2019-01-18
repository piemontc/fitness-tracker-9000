import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-full',
  templateUrl: './search-full.component.html',
  styleUrls: ['./search-full.component.css']
})
export class SearchFullComponent implements OnInit {

  constructor(private dbSerivce: DatabaseService, private nav: NavigationService, private router: Router) { }

  results: Object[] = []

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })


  ngOnInit() {
  }

  submitForm() {
    this.results = []
    let fName = this.form.value.firstName
    fName = fName.toLowerCase().charAt(0).toUpperCase() + fName.slice(1);
    let lName = this.form.value.lastName
    lName = lName.toLowerCase().charAt(0).toUpperCase() + lName.slice(1);
    this.dbSerivce.searchForUserByFullName(`${fName} ${lName}`).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        this.getResultsInfo(doc.data().uid, doc.data().photoURL, doc.data().displayName)
      })
    })
  }

  getResultsInfo(uid: string, photoUrl: string, name: string) {
    this.results.push({
      name: name,
      photo: photoUrl,
      uid: uid
    })
  }

  visitProfile(uid: string) {
    this.router.navigate(['/profile/' + uid])
  }

  formIsEmpty() {
    if(this.form.value.firstName && this.form.value.lastName) {
      return this.form.value.firstName.length < 1 || this.form.value.lastName.length < 1
    } else {
      return true
    }
  }

  clear() {
    this.form.reset()
    this.results = []
  }

  goBack() {
    this.nav.back()
  }
}
