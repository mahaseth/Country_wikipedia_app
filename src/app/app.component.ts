import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public search;
  public search_data;
  public event:any;
  

  constructor(public router:Router)
  {
     

  }
  
  title = 'Yogesh Mahaseth';
  ChangingValue(event) {
    this.search = event.target.value;
  }
  searchFilter():any{

            console.log(this.search_data);
            console.log(this.search);
            if(this.search==1)
            {
              this.router.navigate(['/All-country-view',this.search_data]);
            }
            else if(this.search==2)   
            {
              this.router.navigate(['All-country-view/:region/individual/',this.search_data]);
            }
            else if(this.search==3)   
            {
              this.router.navigate(['All-country-view/:region/currency/',this.search_data]);
            }
  }
}
