import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductOnCatAndSubCatComponent } from './product-on-cat-and-sub-cat/product-on-cat-and-sub-cat.component';


@NgModule({
  declarations: [
    ProductListingComponent,
    ProductOnCatAndSubCatComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
