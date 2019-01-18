import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dbSerivce: DatabaseService, private nav: NavigationService) { }

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })


  ngOnInit() {
  }

  submitForm() {
    this.dbSerivce.searchForUserByFirstName(this.form.value.firstName).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data())
      })
    })
    this.dbSerivce.searchForUserByLastName(this.form.value.lastName).subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data())
      })
    })
  }

  goBack() {
    this.nav.back()
  }
}
