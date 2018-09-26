import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Note} from "../../models/Note";
import {NoteService} from "../../services/note-service.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  noteObject;
  cleanNote;
  noteList = [];

  constructor(private service: NoteService, private toastManager: ToastsManager, vcr: ViewContainerRef) {
    this.toastManager.setRootViewContainerRef(vcr);
  }

  saveNote() {
    if (!isNullOrUndefined(this.noteObject) && this.noteObject.content !== "") {
      if (this.noteObject.$key == null) {
        this.service.insert(this.noteObject);
        this.toastManager.success("A nota foi criada", "Tudo Certo!");
      } else {
        this.service.update(this.noteObject);
        this.toastManager.success("A nota foi editada", "Tudo Certo!");
      }
      this.cleanNote = !this.cleanNote;
    } else {
      this.toastManager.error("A nota precisa ter um conteúdo para ser salva", "Desculpe! ");
    }
  }

  getData() {
    const promisse = this.service.getData();
    promisse.snapshotChanges().subscribe(item => {
      this.noteList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.noteList.push(y as Note);
      });
    });
  }

  ngOnInit() {
    this.cleanNote = false;
    this.getData();
  }

  setNoteObject(note) {
    this.noteObject = Object.assign({}, note);
  }

  newNote() {
    if (this.noteObject.$key !== null) {
      const key = this.noteObject.$key;
      this.noteList = this.noteList.map(function(item) {
        if (item.$key === key) {
          item.active = false;
        }
        return item;
      });
    }
    this.cleanNote = !this.cleanNote;
  }

  deleteNote() {
    if (!isNullOrUndefined(this.noteObject) && this.noteObject.$key !== null) {
      if (confirm("Tem certeza que deseja excluir a nota?")) {
        this.service.delete(this.noteObject.$key);
        this.cleanNote = !this.cleanNote;
      }
    } else {
      this.toastManager.error("Não há nenhum nota selecionada", "Desculpe! ");
    }
  }

}
