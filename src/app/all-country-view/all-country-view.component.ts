import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute ,Route} from '@angular/router';
import {FetchApiService} from '../fetch-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-country-view',
  templateUrl: './all-country-view.component.html',
  styleUrls: ['./all-country-view.component.css']
})
export class AllCountryViewComponent implements OnInit,OnDestroy {
  public allcountrydata:any=[];
  public allData:any=[];
  public data:any=[];

  constructor(private route:ActivatedRoute,private Apiservice:FetchApiService ,private location: Location) { }

  ngOnInit() {
    let region = this.route.snapshot.paramMap.get('region');
    console.log(region);


    this.allcountrydata = this.Apiservice.getAllCountries(region).subscribe(
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
