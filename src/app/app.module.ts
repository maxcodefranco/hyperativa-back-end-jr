import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Config } from './config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './views/promotions/details/details.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { IndexComponent } from './views/promotions/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    BaseLayoutComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
