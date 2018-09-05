import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from "src/app/shared/star.component";
import { ConvertToSpacesPipe } from "src/app/shared/convert-to-spaces.pipes";
import { ProductDetailComponent } from "src/app/products/product-detail.component";
import { ProductListComponent } from "src/app/products/product-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ProductDetailGuard } from "src/app/products/product-detail.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductDetailGuard], 
        component: ProductDetailComponent }

    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class ProductModule { }
