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

addAuthor(author: Author){
this.authors = [...this.authors,author]//ecraser l'ancien état du tab authors et ajouter le nouveau element pour permettre
 //de changer l'adresse memoire du tableau; et de permettre a angular facilement de detctter le changement
}

getLastID(){
  return this.authors[this.authors.length -1].id;
}

}
