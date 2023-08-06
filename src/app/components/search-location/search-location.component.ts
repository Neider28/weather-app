import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent {
  @Output() setHandleSearchEmit = new EventEmitter<boolean>();

  @Output() setSearchedLocation = new EventEmitter<any>();

  setHandleSearch: boolean = false;

  displayValue:  string = '';

  handleSearch(): void {
    this.setHandleSearchEmit.emit(this.setHandleSearch);
  }

  placeSelected(event: Event) {
    this.handleSearch();
    this.setSearchedLocation.emit(event);
  }
}
