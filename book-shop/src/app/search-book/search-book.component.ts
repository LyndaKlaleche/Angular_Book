import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  @Output() hideSearchEvent = new EventEmitter<string>();

  sendKeyWordEvent(keyword :string)
  {
    this.hideSearchEvent.emit(keyword)
  }
}
