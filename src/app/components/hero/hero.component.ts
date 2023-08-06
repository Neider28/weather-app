import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherMain } from 'src/app/interfaces/weather-main.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() isLoading: boolean = true;

  @Input() weatherMain: WeatherMain = {
    icon: '',
    address: '',
    temp: 0,
    description: '',
    date: new Date()
  };

  @Output() nameLocation = new EventEmitter<string>();

  @Output() currentLocation = new EventEmitter<boolean>();

  public setHandleSearch: boolean = false;

  handleSearch(): void {
    this.setHandleSearch = true;
  }

  handleSearchEmit(handle: boolean): void {
    this.setHandleSearch = handle;
  }

  getSearchedLocation(searched: any): void {
    this.nameLocation.emit(searched.properties.formatted);
  }

  handleCurrentLocation() {
    this.currentLocation.emit(true);
    this.currentLocation.next(false);
  }
}
