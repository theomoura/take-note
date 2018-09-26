import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../../models/Note";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  noteModel: Note = {
    title: "",
    content: "",
    $key: null
  };

  @Output() noteChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() set note(value) {
    if (!isNullOrUndefined(value)) {
      this.noteModel = value;
    }
  }

  @Input() set cleanNote(value) {
      this.noteModel.title = "";
      this.noteModel.content = "";
      this.noteModel.$key = null;
  }
  constructor() { }

  ngOnInit() {
  }

  changeNote() {
    this.noteChange.emit(this.noteModel)
  }

}
