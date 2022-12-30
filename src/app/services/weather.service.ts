import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
//   grtWeatherData(city:string):Observable<any>
//   {
//     return this.http.get<any>(environment.weatherApiBaseUrl,{

//       headers:new HttpHeaders()
//       .set(environment.XRapidAPIHostHeader,environment.XRapidAPIHostValue)
//       .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
//       params:new HttpParams().set('q',city)
//       .set('units','metric')
//       .set('mode','json')
//     })
//   }
}
