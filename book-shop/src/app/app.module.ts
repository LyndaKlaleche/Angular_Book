import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { DetailsBookComponent } from './details-book/details-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    DetailsBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
