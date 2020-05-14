import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoteListComponent} from './note/note-list/note-list.component';
import {CreateNoteComponent} from './note/create-note/create-note.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {CreateProjectComponent} from './project/create-project/create-project.component';
import {PersonCreateComponent} from './person/person-create/person-create.component';
import {PersonListComponent} from './person/person-list/person-list.component';


const routes: Routes = [
  {path: 'note', component: NoteListComponent},
  {path: 'add', component: CreateNoteComponent},
  {path: 'project', component: ProjectListComponent},
  {path: 'project/add', component: CreateProjectComponent},
  {path: 'person/add', component: PersonCreateComponent},
  {path: 'person', component: PersonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
