import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent {
  @Input()
  personList: string[] = [];
}
  // persons: string[]=['Max', 'Manuel', 'Anna']
  // personList: string[];
