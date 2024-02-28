import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';


@NgModule({
  declarations: [
    ListAuthorsComponent,
    AddAuthorsComponent,
    EditAuthorsComponent,
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
