import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private WeatherService:WeatherService){}
  weatherData:any

  ngOnInit(): void {
    this.WeatherService.grtWeatherData('wellington').subscribe({
      next:(response)=>{
        this.weatherData=response,
        
        console.log(response)
      }
    })
  }
  title = 'Weather';
}
