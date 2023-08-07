import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { environment } from '../enviorments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApi + cityName, {
      headers: new HttpHeaders()
      .set(environment.hostName, environment.hostValue)
      .set(environment.ApiName, environment.ApiValue)
    })
  }
}