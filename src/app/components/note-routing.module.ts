import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";


const rastreioRoutes: Routes = [
  { path: 'index',  component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rastreioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NoteRoutingModule { }
