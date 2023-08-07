import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = "Horsham";
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string) {
    try {
      this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          this.weatherData.main.temp = this.covertFtoC(response.main.temp);
          this.weatherData.main.temp_min = this.covertFtoC(response.main.temp_min);
          this.weatherData.main.temp_max = this.covertFtoC(response.main.temp_max);
        }
      })
      this.cityName = '';
    } catch (error) {
      alert(error);
    }
  }

  protected covertFtoC(value: number): number {
    return (value - 32) * (5/9);
  }

}
