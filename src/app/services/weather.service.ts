import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApiBaseUrl:string='https://weatherapi-com.p.rapidapi.com/current.json';
  XRapidAPIHostHeader:string= 'X-RapidAPI-Host';
  XRapidAPIHostValue:string='weatherapi-com.p.rapidapi.com';
  XRapidAPIKeyHeaderName:string='X-RapidAPI-Key';
  XRapidAPIKeyHeaderValue:string='ed5de0624cmsh9978789cb6dd91bp11818cjsn57008cc519e6';


  constructor(private http:HttpClient) { }
  grtWeatherData(city:string):Observable<any>
  {
    return this.http.get<any>(this.weatherApiBaseUrl,{

      headers:new HttpHeaders()
      .set(this.XRapidAPIHostHeader,this.XRapidAPIHostValue)
      .set(this.XRapidAPIKeyHeaderName,this.XRapidAPIKeyHeaderValue),
      params:new HttpParams().set('q',city)
      .set('units','metric')
      .set('mode','json')
    })
  }
}
