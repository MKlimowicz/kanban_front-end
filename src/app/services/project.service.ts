import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrlProject = 'http://localhost:8080/api/project';

  constructor(private http: HttpClient) {
  }

  getListProject(): Observable<any> {
    return this.http.get(this.baseUrlProject);
  }

  saveProject(project: Project): Observable<object> {
    return this.http.post(this.baseUrlProject, project);
  }

  deleteProject(idProject: number): Observable<any> {
    return this.http.delete(this.baseUrlProject + '/' + idProject);
  }

  getPersonsWithProjectById(idProject: number): Observable<any> {
    return this.http.get(this.baseUrlProject + '/persons/' + idProject);
  }

}
