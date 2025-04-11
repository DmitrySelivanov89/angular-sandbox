import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Product, ProductsResponse } from '../models/product';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, Subject, switchMap } from 'rxjs';

@Injectable()
export class ProductService {
  private readonly http = inject(HttpClient);

  private readonly productId = signal<number>(1);
  private readonly selectedProductId = new Subject<number>();

  private readonly productsResponse = httpResource<ProductsResponse>(() => 'https://dummyjson.com/products/');

  readonly products = computed(() => this.productsResponse.value()?.products ?? []);

  readonly totalProducts = computed(() => this.products().length ?? 0);

  private readonly httpResourceProduct = httpResource<Product>(
    () => `https://dummyjson.com/products/${this.productId()}`
  );

  private readonly resourceProduct = resource({
    request: () => ({ productId: this.productId() }),
    loader: ({ request, abortSignal }) => {
      return fetch(`https://dummyjson.com/products/${request.productId}`, { signal: abortSignal });
    },
  });

  private readonly rxResourceProduct = rxResource({
    request: () => ({ productId: this.productId() }),
    loader: ({ request }) => {
      return this.http.get<Product>(`https://dummyjson.com/products/${request.productId}`);
    },
    defaultValue: {} as Product,
  });

  readonly product$ = this.selectedProductId.pipe(
    switchMap((productId) => {
      return this.http.get<Product>(`https://dummyjson.com/products/${productId}`).pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      );
    })
  );
}
