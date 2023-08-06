import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentLocationService {
  constructor(private http: HttpClient) {
    this.getCurrentLocation();
  }

  public getCurrentLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        resolve([coords.latitude, coords.longitude]);
      },
      (error) => {
        console.log(error);
        reject();
      });
    });
  }

  public getCurrentNameLocation(lat: number, lon: number) {
    return this.http.get<any>(`${environment.API_URL_GEOCODE}?lat=${lat}&lon=${lon}`);
  }
}
