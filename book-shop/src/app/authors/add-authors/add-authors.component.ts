import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent {

  constructor(
          private authorService: AuthorService,
          private router: Router
          ){}
  
  addAuthor(f : NgForm)
  {
    const id=this.authorService.getLastID() +1;
    const author=new Author(id, f.value.firstName, f.value.lastName)
    this.authorService.addAuthor(author);//demander au service de l'ajouter au tableau 
    this.router.navigate(['/authors']);
  }
}
