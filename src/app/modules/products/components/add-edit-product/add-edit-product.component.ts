import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/modules/shared/services/product-service.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent {

  addForm !: FormGroup;
  id = this.route.snapshot.params?.['id'] ;
  isEdit: boolean = false;
  productData:any;
  constructor (
    private fb : FormBuilder,
    public router : Router ,
    private productService: ProductServiceService,
    private route: ActivatedRoute

  ) {
		this.addForm = this.fb.group({
			title: ['', Validators.required],
			price: ['', Validators.required],
			discountPercentage: ['', Validators.required],
			rating: ['', Validators.required],
			stock: ['', Validators.required],
			brand: ['', Validators.required],
			category: ['', Validators.required],
			description: ['', Validators.required],
		})
	}

  ngOnInit(): void {
		if(this.id) {
      this.isEdit = true;
      this.getSinglePro();
    }
	}

  getSinglePro() {
    this.productService.getSingleProduct(this.id).subscribe((res:any) => {
      this.productData = res;
      this.addForm.patchValue(this.productData)
    })
  }

  addNewProduct() {
    const body = JSON.stringify(this.addForm.value);
    this.productService.addProduct(body).subscribe((res:any) => {
      
      this.router.navigate(['/products/list'])
    })
  }
  editProduct() {
    const body = JSON.stringify(this.addForm.value);
    this.productService.updateProduct(body, this.id).subscribe((res:any) => {
      this.router.navigate(['/products/list'])
    })
  }
}
