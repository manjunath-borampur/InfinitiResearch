import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatSnackBarModule,
  ]
})
export class CategoryModule { }
