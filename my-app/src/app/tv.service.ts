import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TvService {
  getTrendingSeriesInWeek():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=c9088f6e7c15b08ed1205f11cfe32c5b');
  }

  constructor(public _HttpClient:HttpClient) { }
}
