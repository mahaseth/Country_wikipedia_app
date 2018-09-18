import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { RegionsViewComponent } from './regions-view/regions-view.component';
import { AllCountryViewComponent } from './all-country-view/all-country-view.component';
import { IndividualViewComponent } from './individual-view/individual-view.component';
import { LanguageViewComponent } from './language-view/language-view.component';
import { CurrencyViewComponent } from './currency-view/currency-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsViewComponent,
    AllCountryViewComponent,
    IndividualViewComponent,
    LanguageViewComponent,
    CurrencyViewComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"All-country-view/:region",
        component:AllCountryViewComponent
      },
      {
        path:"app-region-view",
        component:IndividualViewComponent,

      },
    
      {
        path:"",
        component:RegionsViewComponent,
        pathMatch:"full"
      },
      {
        path:"All-country-view/:region/individual/:country",
        component:IndividualViewComponent,
        pathMatch:"full"
      },
      {
        path:"All-country-view/:region/currency/:currency",
        component:CurrencyViewComponent,
        pathMatch:"full"
      },
      {
        path:"All-country-view/:region/language/:language",
        component:LanguageViewComponent,
        pathMatch:"full"
      }
      
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
