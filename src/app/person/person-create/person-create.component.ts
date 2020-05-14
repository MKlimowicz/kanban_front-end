import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../services/person.service';
import {Router} from '@angular/router';
import {Person} from '../../model/Person';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  person: Person = new Person();
  submitted = false;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.personService.savePerson(this.person)
      .subscribe(
        data => console.log(data),
        error => console.log(error))
    ;
    this.newPerson();
    this.routeToList();
  }

  newPerson() {
    this.person = new Person();
    this.submitted = true;
  }

  routeToList() {
    this.router.navigate(['/person']);
  }
}
