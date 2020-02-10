import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './productList/product.list.component';
import { ProductComponent } from './productList/product/product.component';
import { ProductDetailComponent } from './productList/product/detail/product.component.detail';
import { ProductReviewComponent } from './productList/product/review/review.component';
import { ProductService } from './productList/product.service';
import { HttpClientModule }   from '@angular/common/http';
import { NgbModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductReviewComponent
  ],
  entryComponents: [
    ProductDetailComponent,
    ProductReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductService, NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
