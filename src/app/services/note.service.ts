import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../model/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseUrlNote = 'http://localhost:8080/api/note';
  private baseUrlCategory = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) { }

  getNoteList(): Observable<any> {
    return this.http.get(this.baseUrlNote);
  }

  createNote(note: Note): Observable<Object> {
    return this.http.post(this.baseUrlNote, note);
  }

  getListCategory(): Observable<any> {
    return this.http.get(`${this.baseUrlCategory}`);
  }
}
