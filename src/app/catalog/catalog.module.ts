import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CatalogGridComponent } from './catalog-grid/catalog-grid.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogItemComponent, CatalogGridComponent, CatalogPageComponent],
  exports: [CatalogPageComponent]
})
export class CatalogModule { }
