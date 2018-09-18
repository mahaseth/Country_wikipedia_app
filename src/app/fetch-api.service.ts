import { Injectable } from '@angular/core';

import { Http } from '@angular/http';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import observable related codes
import {observable} from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
  public BaseUrl = "https://restcountries.eu/rest/v2";

  constructor(  private http:Http) { 
    console.log("api construction was called");
  }

  public getAllCountries(region): any {
    let myResponse = this.http.get(this.BaseUrl+'/region/'+region).pipe(map( (response)=> response.json()));
    console.log(myResponse);
    return myResponse;
  }

  public getIndividualCountry(country): any {
    let myResponse = this.http.get(this.BaseUrl+'/name/'+country).pipe(map( (response)=> response.json()));
    console.log(myResponse);
    return myResponse;
  }
  
  public getAllCurrencyFilter(currency): any {
    let myResponse = this.http.get(this.BaseUrl+'/currency/'+currency).pipe(map( (response)=> response.json()));
    console.log(myResponse);
    return myResponse;
  }
  
  public getAllLanguageFilter(language): any {
    let myResponse = this.http.get(this.BaseUrl+'/lang/'+language).pipe(map( (response)=> response.json()));
    console.log(myResponse);
    return myResponse;
  }

}
