import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-email',
  templateUrl: './search-email.component.html',
  styleUrls: ['./search-email.component.css']
})
export class SearchEmailComponent implements OnInit {

  constructor(private dbSerivce: DatabaseService, private nav: NavigationService, private router: Router) { }

  results: Object[] = []

  form = new FormGroup({
    email: new FormControl('')
  })


  ngOnInit() {
  }

  submitForm() {
    let email = this.form.value.email
    email = email.toLowerCase()
    this.dbSerivce.searchForUserByEmail(email).subscribe(snapshot => {
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
    if(this.form.value.email) {
      return this.form.value.email < 1
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
