import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input()
  noteList = [];

  @Output()
  noteSelected : EventEmitter<any> = new EventEmitter<any>();

  onSelectNote(item) {
    item.active = true;
    this.noteList.forEach(function (note) {
      if (item.$key !== note.$key) {
        note.active = false;
      }
    });
    this.noteSelected.emit(item);
  }

  constructor() {
  }

  ngOnInit() {
  }


}
