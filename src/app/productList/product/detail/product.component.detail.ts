import { OnInit, Component, Input, ViewEncapsulation } from "@angular/core";
import { ProductService } from "../../product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product.component.detail.html",
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {
  @Input()
  productId;

  product:any;
  
  constructor(private productService: ProductService) {}

  ngOnInit() {
    if (this.productId === null || this.productId === ''){
      return;
    }
    this.productService.getProductsById(this.productId).subscribe(response => {
      this.product = response;
    });
  }

}
