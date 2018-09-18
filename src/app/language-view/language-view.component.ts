import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Route} from '@angular/router';
import {FetchApiService} from '../fetch-api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styleUrls: ['./language-view.component.css']
})
export class LanguageViewComponent implements OnInit {
  public allLanguageFilter:any=[];
  public allcountrydata:any=[];

  constructor(private route:ActivatedRoute,private Apiservice:FetchApiService ,private location: Location) { }

  ngOnInit() {
    let language = this.route.snapshot.paramMap.get('language');
    console.log(language);


    this.allLanguageFilter = this.Apiservice.getAllLanguageFilter(language).subscribe(
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
