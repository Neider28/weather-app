import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoricalWeatherService {
  constructor(
    private http: HttpClient
  ) {}

  getHistoricalWeather(name: string) {
    return this.http.get<any>(`${environment.API_URL_WEATHER_DETAIL}/${name}?key=${environment.API_KEY_WEATHER_DETAIL}`);
  }
}
