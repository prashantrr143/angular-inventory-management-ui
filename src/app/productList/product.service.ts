import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import {GET_PRODUCT_API_PATH}  from '../common';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient){
    }

    getProducts(): Observable<any> {
        const servicePath: string = 'http://127.0.0.1:9090'
        return this.httpClient.get(servicePath+'/'+GET_PRODUCT_API_PATH).
        pipe(
            catchError(this.handleError('getProducts', []))
        );
    }

    getProductsById(productId: string): Observable<any> {
        const servicePath: string = 'http://127.0.0.1:9090'
        return this.httpClient.get(servicePath+'/'+GET_PRODUCT_API_PATH+'/' + productId) .
        pipe(
            catchError(this.handleError('getProducts/'+ productId, []))
        );
    }
    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // log to console instead
        //   this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
    }


}