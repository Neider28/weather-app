import { Component, OnInit } from '@angular/core';
import { HistoricalWeatherService } from './services/historical-weather.service';
import { CurrentLocationService } from './services/current-location.service';
import { WeatherMain } from './interfaces/weather-main.interface';
import { WeatherDetail } from './interfaces/weather-detail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  setIsLoading: boolean = true;

  currentNameLocation: string = '';

  currentCoordsLocation: [number, number] = [0, 0];

  weather: WeatherMain = {
    icon: '',
    address: '',
    temp: 0,
    description: '',
    date: new Date()
  };

  detail: WeatherDetail = {
    days: [],
    windStatus: 0,
    windDir: 0,
    humidity: 0,
    visibility: 0,
    airPressure: 0
  };

  constructor(
    private historicalWeatherService: HistoricalWeatherService,
    private currentLocationService: CurrentLocationService
  ) {}

  getWeatherByNameLocation(nameLocation: string) {
    this.setIsLoading = true;
    this.getWeatherDetail(nameLocation);
  }

  getWeatherByCurrentLocation(current: boolean) {
    if(current) {
      this.setIsLoading = true;

      this.getCurrentLocation();
    }
  }

  getWeatherDetail(nameLocation: string): void {
    this.historicalWeatherService.getHistoricalWeather(nameLocation).subscribe(data => {
      this.weather = {
        icon: `../../../assets/icons/${data.days[0].icon}.svg`,
        address: data.address,
        temp: ((data.days[0].temp - 32) * (5/9)),
        description: data.days[0].conditions,
        date: data.days[0].datetime
      };

      this.detail = {
        days: data.days.slice(1, 6).map((item: any) => {
          return {
            date: item.datetime,
            icon: `../../../assets/icons/${item.icon}.svg`,
            minTemp: ((item.tempmin - 32) * (5/9)),
            maxTemp: ((item.tempmax - 32) * (5/9))
          }
        }),
        windStatus: data.days[0].windspeed,
        windDir: data.days[0].winddir,
        humidity: data.days[0].humidity,
        visibility: data.days[0].visibility,
        airPressure: data.days[0].pressure
      }

      setTimeout(() => {
        this.setIsLoading = false;
      }, 1500);
    });
  }

  getCurrentLocation(): void {
    this.currentLocationService.getCurrentLocation()
      .then(data => {
        this.currentCoordsLocation = data;
        this.currentLocationService.getCurrentNameLocation(
          this.currentCoordsLocation[0],
          this.currentCoordsLocation[1]
        ).subscribe(data => {
          this.currentNameLocation = data.address.city;

          this.getWeatherDetail(this.currentNameLocation);
        });
      })
      .catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }
}
