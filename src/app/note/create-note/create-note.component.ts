import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Router} from '@angular/router';
import {Note} from '../../model/Note';
import {Observable} from 'rxjs';
import {Category} from '../../model/Category';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../model/Project';
import {Person} from '../../model/Person';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note: Note = new Note();
  category: Category = new Category();
  categories: Category[];
  project: Project = new Project();
  projects: Project[];
  persons: Person[];
  person: Person = new Person();
  submitted = false;
  hiddenPersonList = true;


  constructor(private noteService: NoteService,
              private projectService: ProjectService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.initCategoryList();
    this.initProjectList();
  }

  saveNote() {
    this.setAllId(this.note);
    this.noteService.createNote(this.note)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.refreshObject();
    this.goToList();
  }

  refreshObject() {
    this.note = new Note();
    this.category = new Category();
    this.project = new Project();
    this.person = new Person();
  }

  setAllId(note: Note) {
    note.categoryId = this.category.id;
    note.projectId = this.project.id;
    if (this.person.id != null) {
      note.personId = this.person.id;
    }
  }

  initProjectList() {
    this.projectService.getListProject()
      .subscribe(
        data => this.projects = data,
        error => console.log('error: ', error)
      );
  }

  initCategoryList() {
    this.noteService.getListCategory().subscribe((value) => {
      this.categories = value;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.saveNote();
  }

  goToList() {
    this.router.navigate(['/note']);
  }

  showPersonList() {
    this.getPersonList();
    this.hiddenPersonList = false;
  }

  getPersonList() {
    this.projectService
      .getPersonsWithProjectById(this.project.id)
      .subscribe(
        value => this.persons = value,
        error => console.log(error)
      );
  }


}
