import { Component, Input } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent {
@Input ('book') book? :Book;

}
