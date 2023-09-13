import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnCatAndSubCatComponent } from './product-on-cat-and-sub-cat.component';

describe('ProductOnCatAndSubCatComponent', () => {
  let component: ProductOnCatAndSubCatComponent;
  let fixture: ComponentFixture<ProductOnCatAndSubCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOnCatAndSubCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOnCatAndSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
