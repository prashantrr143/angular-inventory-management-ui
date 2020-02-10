import { OnInit, Component, Input } from '@angular/core';
import { Product } from 'src/app/common/model/product';
import { NgbModal, NgbModalRef ,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent }  from './detail/product.component.detail';
import { ProductReviewComponent }  from './review/review.component';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit{

    @Input()
    product: Product;

    constructor(private modal: NgbModal){

    }

    ngOnInit() {

    }

    private openDetailsModal($event: Event, productId: any) {
        console.log(`Selected product id :  ${productId}`)
        let modalRef =  this.modal.open(ProductDetailComponent , {
            size:'lg',
        });
        modalRef.componentInstance.productId =  productId;
        modalRef.result.then( s => {
            console.log('I am called : {} ', s);
            //modaldRef.close();
        });
    }
   
    private openAddReviewPanel($event: Event, productId: any) {
        console.log(`Selected product id :  ${productId}`)
        let modaldRef =  this.modal.open(ProductReviewComponent , {
            size:'lg',
            ariaLabelledBy: 'modal-basic-title',
        }).result.then((result) => {
           // this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
           // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
    }

}