export interface WeatherDetail {
  days: WeatherDay[];
  windStatus: number;
  windDir: number;
  humidity: number;
  visibility: number;
  airPressure: number;
}

export interface WeatherDay {
  date: Date;
  icon: string;
  minTemp: number;
  maxTemp: number;
}
