import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/Constants/Product.constant';

@Component({
  selector: 'app-product-on-cat-and-sub-cat',
  templateUrl: './product-on-cat-and-sub-cat.component.html',
  styleUrls: ['./product-on-cat-and-sub-cat.component.scss']
})
export class ProductOnCatAndSubCatComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  productList:any = [];

  subcategoryId:any;
  categoryId : any;


  ngOnInit(): void {

    this.route.params.subscribe(res=>{
      this.subcategoryId = res['subCategoryId'];
      this.productList = this.getProductsFromCategoryAndSubcategoryId();
    });

   this.route.parent?.params.subscribe(res=>{
    this.categoryId = res['categoryId']
    this.productList = this.getProductsFromCategoryAndSubcategoryId();
   })

  }


  getProductsFromCategoryAndSubcategoryId(){
    return  PRODUCTS.filter(record=>record.subCategoryId == this.subcategoryId && record.categoryId == this.categoryId)
 }
}
