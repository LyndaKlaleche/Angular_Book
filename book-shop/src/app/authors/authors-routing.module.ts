import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';

const routes: Routes = [
  {path : "" , component : ListAuthorsComponent},
  {path : "add" , component : AddAuthorsComponent},
  {path : "edit" , component : EditAuthorsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
