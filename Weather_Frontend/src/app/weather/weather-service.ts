import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import WeatherForecast from './weatherForecast.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor (private http: HttpClient) {}
    // http.get<WeatherForcest[]>('https://localhost:5142/' + 'weatherforecast').subscribe( data =>
    public getWeatherForecasts(): Observable<WeatherForecast[]> {
      return this.http.get<WeatherForecast[]>('http://localhost:5142/' + 'weatherforecast');
  }
}
