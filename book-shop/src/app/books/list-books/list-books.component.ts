import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})

export class ListBooksComponent implements OnInit{
  
  books? : Book[];
  selectedBook? : Book;
  listFiltredBook?: Book[] =this.books;
    

  constructor(private bookService: BookService) 
  {

  }

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
    this.listFiltredBook=this.books!.filter( // ! pour forcer à typescript d'accepter que l'objet peut etre null
      b => b.title.toLowerCase().includes(keyword.toLowerCase()));
      
  }


  //à chaque fois que mon composant est chargé, cette méthode sera implicitement appellee
  ngOnInit(): void {
    this.books=this.bookService.getBooks();
  }
}


