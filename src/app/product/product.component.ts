import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { element } from 'protractor';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  searchValue = '';
  products: Product[];
  shouldBeSorted = false;
  selectedProducts: Product[];
  shouldHighlight = false;

  constructor() {

    this.products = [new Product(12, 'Smartphone', 'LG', 'Quadcore 3GHZ', 12018.5, 5),
    new Product(123, 'Smartwatch', 'Sony', '3GB Ram', 4999.9, 0),
    new Product(34, 'SmartTV', 'Sony', '52 pulgadas, Conexión wifi', 8999.9, 3)];

  }

  ngOnInit(): void {
    this.selectedProducts = this.products;
  }

  sort(event) {
    if (event.target.checked) {
      this.shouldBeSorted = true;
      this.selectedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      this.shouldBeSorted = false;
      this.search();
    }
  }

  onStock(event) {
    if (event.target.checked) {
      this.selectedProducts = this.selectedProducts.filter(o => o.stock > 0);
    } else { this.search(); }
  }

  search() {
    this.selectedProducts = this.products.filter(o => o.name.toUpperCase().includes(this.searchValue.toUpperCase()) ||
    o.description.toUpperCase().includes(this.searchValue.toUpperCase()));
    if ( this.shouldBeSorted) {
      this.selectedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    // tslint:disable-next-line: no-unused-expression

  }

  highlight(event) {
    if (event.target.checked) {
      this.shouldHighlight = true;
    } else { 
      this.shouldHighlight = false;
    }
  }

}
