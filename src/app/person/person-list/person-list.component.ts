import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../../model/Person';
import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Observable<Person>;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.initPersons();
  }

  initPersons() {
    this.persons = this.personService.getPersonList();
  }
}
