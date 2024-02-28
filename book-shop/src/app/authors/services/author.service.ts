import { Injectable } from '@angular/core';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authors=
  [
    new Author  (1,"Victor","Hugo"),
    new Author  (2,"Emile", "Zola"),
    new Author  (3,"JEFF", "Olsen"),
    new Author  (4,"Charles", "Duhigg"),

  ]


constructor() { }

getBooks()
{
return [...this.authors];
}

}
