import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY } from 'src/Constants/Categories.constants';
import { PRODUCTS } from 'src/Constants/Product.constant';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router, private _location: LocationStrategy) { }

  categories = CATEGORY;

  products = PRODUCTS

  categoryId = this.activatedRoute.snapshot.params['categoryId'];

  subCategories:any = []
  allProducts:any = []

  ngOnInit(): void {
    
    this.subCategories = this.categories.find(record=>record.id == this.categoryId)?.subCategories;
    if(this.subCategories && this.subCategories.length>0){
      this.router.navigate([`../product/${this.categoryId}/${this.subCategories[0].id}`])
    }

  }

  goBack(){
    this.router.navigate([`/category`])
  }


  navigateToProductListing(subcategoryId:number){
    this.router.navigate([`../product/${this.categoryId}/${subcategoryId}`])
 }


}
