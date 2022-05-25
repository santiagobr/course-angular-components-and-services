import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    name: '',
    price: 0,
    image: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
