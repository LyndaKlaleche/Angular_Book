import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule)
  },
  {
    path :'', component : LoginComponent


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
