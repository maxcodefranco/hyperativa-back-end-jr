/**
 * @module App
 * @author Max Franco <maxcodefranco@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DetailsComponent } from './views/promotions/details/details.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

import { PromotionService } from './domains/promotions/promotion.service';
import { ApiService } from './services/api';

/**
 * Módulo principal do Angular
 */
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule
  ],
  providers: [
    PromotionService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
