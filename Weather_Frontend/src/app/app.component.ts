import { Component, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import WeatherForcest from './weather/weatherForecast.model';
import { WeatherService } from './weather/weather-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather_Frontend';

  public forecasts: WeatherForcest[] = [];

  // constructor (private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // http.get<WeatherForcest[]>('https://localhost:5142/' + 'weatherforecast').subscribe( data =>
    // this.http.get<WeatherForcest[]>(baseUrl + 'weatherforecast').subscribe( data =>
    //   {
    //     this.forecasts = data;
    //   }),(err: any) => console.error("connection error: " + err);

    
  // }

  constructor (private service : WeatherService){ }

  ngOnInit(): void {
    this.service.getWeatherForecasts().subscribe(data => {
      this.forecasts = data;
    }),(err:any) => console.error(err);
  }
}

