import { Component, Input } from '@angular/core';
import { WeatherDay } from 'src/app/interfaces/weather-detail.interface';

@Component({
  selector: 'app-daily-item',
  templateUrl: './daily-item.component.html',
  styleUrls: ['./daily-item.component.css']
})
export class DailyItemComponent {
  @Input() weatherDay: WeatherDay = {
    date: new Date(),
    icon: '',
    minTemp: 0,
    maxTemp: 0
  };
}
