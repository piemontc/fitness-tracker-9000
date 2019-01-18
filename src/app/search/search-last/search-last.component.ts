import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-last',
  templateUrl: './search-last.component.html',
  styleUrls: ['./search-last.component.css']
})
export class SearchLastComponent implements OnInit {

  constructor(private dbSerivce: DatabaseService, private nav: NavigationService, private router: Router) { }

  results: Object[] = []

  form = new FormGroup({
    name: new FormControl('')
  })


  ngOnInit() {
  }

  submitForm() {
    let name = this.form.value.name
    name = name.toLowerCase().charAt(0).toUpperCase() + name.slice(1);
    this.dbSerivce.searchForUserByLastName(name).subscribe(snapshot => {
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
    if(this.form.value.name) {
      return this.form.value.name.length < 1
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
