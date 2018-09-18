import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions-view',
  templateUrl: './regions-view.component.html',
  styleUrls: ['./regions-view.component.css']
})
export class RegionsViewComponent implements OnInit {
  public allData:any=[];
  public regions=['africa', 'americas', 'asia', 'europe', 'oceania'];

  constructor() { }

  ngOnInit() {


   



  }

}
