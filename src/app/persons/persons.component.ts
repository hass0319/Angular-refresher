// import { Component, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
  // persons: string[]=['Max', 'Manuel', 'Anna']
  // @Input() personList: string[] = [];
  personList: string[] = [];
  // private prsService: PersonsService;

  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
    // this.personService = prsService;

  }
  ngOnInit() {
    this.personList = this.prsService.persons;
  }
}
