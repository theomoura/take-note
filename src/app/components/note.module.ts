import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MainComponent } from './main/main.component';
import {NoteRoutingModule} from './note-routing.module';
import {NoteService} from '../services/note-service.service';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NoteActionsComponent } from './note-actions/note-actions.component';
import {environment} from '../../environments/environment';
import {ModalModule} from "ng2-modal";

@NgModule({
  declarations: [
    MainComponent,
    NoteListComponent,
    NoteEditorComponent,
    NoteActionsComponent
  ],
  imports: [
    BrowserModule,
    NoteRoutingModule,
    FormsModule,
    ModalModule,
    ToastModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    HttpModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'takenote'),
    AngularFireDatabaseModule
  ],
  providers: [NoteService]
})
export class NoteModule { }
