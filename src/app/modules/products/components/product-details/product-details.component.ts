import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/modules/shared/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id = this.route.snapshot.params?.['id'] ;
  productData : any;

  constructor(private productService : ProductServiceService , private route: ActivatedRoute) {}

  ngOnInit() {
    this.getSinglePro();
  }

  getSinglePro() {
    this.productService.getSingleProduct(this.id).subscribe((res:any) => {
      this.productData = res
    })
  }
}
