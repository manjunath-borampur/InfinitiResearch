import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductOnCatAndSubCatComponent } from './product-on-cat-and-sub-cat/product-on-cat-and-sub-cat.component';

const routes: Routes = [
  {
    path:':categoryId',
    component:ProductListingComponent,
    children:[
      {
        path:':subCategoryId',
        component:ProductOnCatAndSubCatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
