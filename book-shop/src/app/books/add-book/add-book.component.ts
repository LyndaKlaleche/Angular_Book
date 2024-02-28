import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { Book } from '../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(
    private bookService : BookService,
    private router: Router
    ){}
  addBook(f: NgForm)
  { const selectedDate = new Date(f.value.publishDate);
    const id=this.bookService.getLastID() +1;
    const book=new Book(id, f.value.title, f.value.author,selectedDate,f.value.price,f.value.cover);
    console.log( "${id}") 
    this.bookService.addBook(book);//demander au service de l'ajouter au tableau 
    this.router.navigate(['/books']);
  }


}
