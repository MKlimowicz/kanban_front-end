import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrlPerson = 'http://localhost:8080/api/person';

  constructor(private http: HttpClient) {
  }

  getPersonList(): Observable<any> {
    return this.http.get(this.baseUrlPerson);
  }

  savePerson(person: Person): Observable<object> {
    return this.http.post(this.baseUrlPerson, person);
  }

}
