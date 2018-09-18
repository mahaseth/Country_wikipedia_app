import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FetchApiService} from '../fetch-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.css']
})
export class IndividualViewComponent implements OnInit {
  public countrydata:any=[];
  
  public fdata:any[];
  constructor(private route:ActivatedRoute, private Apiservice:FetchApiService ,private location: Location ) { }

  ngOnInit() {
  
    let country = this.route.snapshot.paramMap.get('country');
    console.log(country);
    console.log(this.countrydata.length);
    
    

    this.countrydata = this.Apiservice.getIndividualCountry(country).subscribe(
      (data) => {
        console.log("logging data");
        this.countrydata=data;
        console.log("----------")
        console.log(this.countrydata);
      },
      error => {
        console.log("error");
        
      }
    );
    for(let data of this.countrydata)
    {
      this.countrydata=data;
    }
   
  }
  public goback():any{
    this.location.back();
  }

}
