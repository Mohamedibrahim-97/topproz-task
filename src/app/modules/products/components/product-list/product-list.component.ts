import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/modules/shared/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:any = []; 
  pageSize = 9;
  total =0;
  pageNumber = 1;
  skip: number = 0;
  constructor(private productService : ProductServiceService) {}

  ngOnInit(): void {
    this.getLimitProducts();
  }

  getLimitProducts () {
    this.productService.getProducts(this.pageSize, this.skip).subscribe((res:any ) => {
      this.products = res.products;
      this.total = res.total;
    } )
  }

  onChangePage(event:any) {
    console.log(event);
    this.skip = this.pageSize * ( event - 1);
    this.getLimitProducts();
  }


}
