import { OnInit, Component } from '@angular/core';
import { ProductService } from '../productList/product.service';
import { Product } from '../common/model/product';
import { ProductComponent } from './product/product.component';

@Component({
    selector: 'app-product-list',
    templateUrl: './product.list.component.html',
})
export class ProductListComponent implements OnInit{

    products: Product[]= [];

    constructor(private productService: ProductService){

    }

    ngOnInit() {
     this.productService.getProducts().subscribe( response =>{
         console.log(response);
            this.products = response;
        },(error) => {
            console.log(`Retured Error ${error}`)
        });
    }

}

