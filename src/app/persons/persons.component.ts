// import { Component, Input } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  // persons: string[]=['Max', 'Manuel', 'Anna']
  // @Input() personList: string[] = [];
  personList: string[] = [];
  private personListSubs: Subscription;
  // private prsService: PersonsService;

  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
    // this.personService = prsService;
  }

  ngOnInit() {
    this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName)
  }
  ngOnDestroy() {
    this.personListSubs.unsubscribe();

  }
}
