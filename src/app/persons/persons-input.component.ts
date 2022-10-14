import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  onCreatePerson() {
    console.log('created a person ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);//method from eeventEmitter
    this.enteredPersonName = '';

  }
}
