import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private books=[
    new Book
    (
      1,
      "Power of habits" , 
      "charles Duhing",
      new Date(1990, 5, 14),
      11.22,
       "https://m.media-amazon.com/images/I/71wm29Etl4L._AC_UF1000,1000_QL80_.jpg"
    ),
    new Book
    (
      2, 
      "Les mésirables" , 
      "Paoulo Coelho", 
      new Date(2000, 5, 14),
       16.27,
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW7wCh9cMbEMx5uVRk4cMbrKGCqkUcQhpTNg3zl-m&s"
    ),

      new Book(
      3, 
      "L'Alchimiste ",
      "Paoulo Coelho",
      new Date(2006, 8, 14),
       17.82,
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW7wCh9cMbEMx5uVRk4cMbrKGCqkUcQhpTNg3zl-m&s"
       )  
    ];

  constructor() { }

getBooks()
{
 // cette syntaxe permet de passser l'adresse mémoire de ce tableau declaré privé 
 // return this.books;
 //Pour remédier à ça, on fournie plutot une copie du tableau books pour avoir des données séparées du tableau d'origine 
 //ce qui assure une certaine sécurité d'accés aux données
return [...this.books];
}


addBook(book: Book){
  this.books = [...this.books,book]//ecraser l'ancien état du tab books et ajouter le nouveau element pour permettre
   //de changer l'adresse memoire du tableau; et de permettre a angular facilement de detecter le changement
  }
  
  getLastID(){
    return this.books[this.books.length -1].id;
  }


}
