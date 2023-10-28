import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/modules/shared/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products = []; 

  constructor(private productService : ProductServiceService) {}

  ngOnInit(): void {
    this.getLimitProducts();
  }

  getLimitProducts () {
    this.productService.getProducts(6).subscribe((res:any ) => {
      this.products = res.products;
    } )
  }
}
