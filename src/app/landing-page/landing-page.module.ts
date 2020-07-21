import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';



@NgModule({
  exports: [
    LandingPageComponent
  ],
  declarations: [
    LandingPageComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
