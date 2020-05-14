import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';
import {Project} from '../../model/Project';
import {PersonService} from '../../services/person.service';
import {Observable} from 'rxjs';
import {Person} from '../../model/Person';
import {PersonForProject} from '../../model/PersonForProject';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  persons: Observable<Person>;
  checkedPerson: Array<Person>;
  personsForProject: Array<PersonForProject>;
  project: Project = new Project();
  submitted = false;

  constructor(private projectService: ProjectService,
              private personService: PersonService,
              private router: Router) {
    this.checkedPerson = new Array<Person>();
    this.personsForProject = new Array<PersonForProject>();
  }

  ngOnInit(): void {
    this.initPerson();
  }

  saveProject() {

    this.projectService.saveProject(this.project).subscribe(
      data => {
        if (data != null) {
          // @ts-ignore
          this.savePersonForProject(data.id);
        }
      },
      error => console.log(error)
    );
    this.project = new Project();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.saveProject();
  }

  initPerson() {
    this.persons = this.personService.getPersonList();
  }

  savePersonForProject(id: number) {
    this.checkedPerson.forEach(value => {
      this.personsForProject.push({personId: id, projectId: value.id});
    });

    console.log(this.personsForProject);
  }

  addPersonToList(person: Person) {
    if (this.checkedPerson.includes(person)) {
      const index = this.checkedPerson.indexOf(person);
      if (index > -1) {
        this.checkedPerson.splice(index, 1);
      }
    } else {
      this.checkedPerson.push(person);
    }
  }

  goToList() {
    this.router.navigate(['/project']);
  }
}
