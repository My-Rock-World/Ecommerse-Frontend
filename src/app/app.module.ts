import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

// include HttpClientModule 
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    //import HttpClientModule
    HttpClientModule
  ],
  //add ProductService as provider
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
