import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../model/Project';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<Project>;

  constructor(private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initProjectList();
  }

  initProjectList(): void {
    this.projects = this.projectService.getListProject();
  }

  deleteProject(idProject: number) {
      this.projectService.deleteProject(idProject)
        .subscribe(
            data => {
              console.log(data);
              this.initProjectList();
            },
          error => console.log(error)
        );
  }
}
