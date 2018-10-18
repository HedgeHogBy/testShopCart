import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppConfigModule } from './app-config.module';
import { CatalogModule } from './catalog/catalog.module';
import { BasketModule } from './basket/basket.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConfigModule,
    NgbPaginationModule,
    CatalogModule,
    BasketModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
