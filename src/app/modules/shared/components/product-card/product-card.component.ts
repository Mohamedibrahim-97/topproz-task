import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
@Input() hideAction !:boolean;
@Input() productData :any;
isDeleted: boolean = false;
constructor(private productService: ProductServiceService) {

}
ngOnInit(): void {

}

deleteProduct() {
  this.productService.deleteSingleProduct(this.productData?.id).subscribe((res:any) => {
    console.log(res);
    this.isDeleted = res?.isDeleted;
  })
}
}
