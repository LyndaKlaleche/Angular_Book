import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit {
  authors?:Author[];
  constructor(private serviceAuthor : AuthorService)
 {

 }

  ngOnInit(): void {
    this.authors=this.serviceAuthor.getBooks();
  }
}
