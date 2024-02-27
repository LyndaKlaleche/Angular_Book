import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBooksComponent } from './list-books/list-books.component';

const routes: Routes = [
  {path :"Edit", component : EditBookComponent},
  {path :"Add", component : AddBookComponent},
  {path :"List", component : ListBooksComponent}, 
  {path :"", redirectTo: "List", pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
