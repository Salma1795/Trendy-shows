import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(public _HttpClient:HttpClient ) { }
  getTrendingPeopleInWeek():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=c9088f6e7c15b08ed1205f11cfe32c5b');
  }
  
}
