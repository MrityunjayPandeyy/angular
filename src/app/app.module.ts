import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WeatherService } from './weather.service';



import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';





@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
