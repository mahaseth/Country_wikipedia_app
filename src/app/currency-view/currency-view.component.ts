import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute ,Route} from '@angular/router';
import {FetchApiService} from '../fetch-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css']
})
export class CurrencyViewComponent implements OnInit,OnDestroy{

  public allCurrencyFilter:any=[];
  public allcountrydata:any=[];
  constructor(private route:ActivatedRoute,private Apiservice:FetchApiService ,private location: Location) {

   }

  ngOnInit() {
 let currency = this.route.snapshot.paramMap.get('currency');
    console.log(currency);


    this.allCurrencyFilter = this.Apiservice.getAllCurrencyFilter(currency).subscribe(
      (data) => {
        console.log("logging data");
        this.allcountrydata=data;
        console.log(this.allcountrydata);
      },
      error => {
        console.log("error");
      }
    );
  

  }
  public goback():any{
    this.location.back();
  }
  ngOnDestroy(){

  }
}
