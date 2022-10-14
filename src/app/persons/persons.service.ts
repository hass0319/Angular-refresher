import { Injectable } from "@angular/core";

@Injectable({ provideIn: "root" })

export class PersonsService {
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name)
  }
}
