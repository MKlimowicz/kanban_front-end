import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateNoteComponent } from './note/create-note/create-note.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonListComponent } from './person/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    CreateNoteComponent,
    CreateProjectComponent,
    ProjectListComponent,
    PersonCreateComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
