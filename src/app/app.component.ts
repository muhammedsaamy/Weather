import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private WeatherService:WeatherService){}
cityName:string='egypt'
weatherData:any

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.WeatherService.grtWeatherData(cityName).subscribe({
      next:(response)=>{
        this.weatherData=response,

        console.log(response)
      }
    })
  }

  title = 'Weather';
}
