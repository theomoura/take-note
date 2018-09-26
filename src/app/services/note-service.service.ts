import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import 'rxjs/add/operator/map';
import {Note} from '../models/Note';

@Injectable()
export class NoteService {
  noteList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase ) { }

  getData() {
    this.noteList = this.firebase.list('notes');
    return this.noteList;
  }

  insert(note: Note) {
    this.noteList.push({
      title: note.title,
      content: note.content
    });
  }

  update(note: Note) {
    this.noteList.update(note.$key,
      {
        title: note.title,
        content: note.content
      });
  }

  delete($key: string) {
    this.noteList.remove($key);
  }
}
