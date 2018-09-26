import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-note-actions',
  templateUrl: './note-actions.component.html',
  styleUrls: ['./note-actions.component.css']
})
export class NoteActionsComponent implements OnInit {

  @Output()
  save: EventEmitter<null> = new EventEmitter();
  @Output()
  new: EventEmitter<null> = new EventEmitter();
  @Output()
  delete: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveNote() {
    this.save.emit();
  }

  newNote() {
    this.new.emit();
  }

  deleteNote() {
    this.delete.emit();
  }

}
