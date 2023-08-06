import { Component, Input } from '@angular/core';
import { WeatherDetail } from 'src/app/interfaces/weather-detail.interface';

@Component({
  selector: 'app-detail-weather',
  templateUrl: './detail-weather.component.html',
  styleUrls: ['./detail-weather.component.css']
})
export class DetailWeatherComponent {
  @Input() isLoading: boolean = true;

  @Input() weatherDetail: WeatherDetail = {
    days: [],
    windStatus: 0,
    windDir: 0,
    humidity: 0,
    visibility: 0,
    airPressure: 0
  };

  loadings: string[] = ['', '', '', '', ''];
}
