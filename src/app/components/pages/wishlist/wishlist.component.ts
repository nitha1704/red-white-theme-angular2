import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }
  // Wishlist box
  wishlisttable = [
    {img:'assets/img/products/1.jpg',productname:'Topaz',instock:'In Stock',noofproduct:'2 Pieces',price:12.99,total:12.99},
    {img:'assets/img/products/5.jpg',productname:'Oppal',instock:'In Stock',noofproduct:'1 Piece',price:9.99,total:9.99},
    {img:'assets/img/products/4.jpg',productname:'Amber',outstock:'Out of Stock',noofproduct:'3 Pieces',price:13.99,total:13.99},
  ];

  ngOnInit(): void {
  }

}
