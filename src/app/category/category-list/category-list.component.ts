import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CATEGORY } from 'src/Constants/Categories.constants';
import { PRODUCTS } from 'src/Constants/Product.constant';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  category = CATEGORY

  products = PRODUCTS
  constructor(private router:Router,private _snackBar: MatSnackBar,private ngxLoader : NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.startLoader("start");
  }

  navigateToProductListing(categoryId:number){
     this.router.navigate([`../product/${categoryId}`])
  }

  navigateToProductOutOfStok(categoryId:number){
    this._snackBar.open('Sorry, This item is temporarily out of stock !', 'Ok', {
      duration: 3000
    });
  }

}
