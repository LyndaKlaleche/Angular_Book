import { Component } from '@angular/core';
import { Book } from '../model/book';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})

export class ListBooksComponent {

  selectedBook?:Book;
  
    books=[
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
      ]

  listFiltredBook: Book[] =this.books;
    
  showdetails(b:Book)
  {
   this.selectedBook=b;
  }

  hideBookDetails(message : string)
  {
    this.selectedBook=undefined;
   
  }
  filterBook(keyword :string)
  {
    this.listFiltredBook=this.books.filter(
      b => b.title.toLowerCase().includes(keyword.toLowerCase()));
      
  }
}


