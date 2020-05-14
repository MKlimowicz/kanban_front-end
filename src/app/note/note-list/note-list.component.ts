import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Note} from '../../model/Note';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Observable<Note[]>;



  constructor(private noteService: NoteService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
   this.notes = this.noteService.getNoteList();
  }
}
