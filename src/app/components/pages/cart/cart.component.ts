import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  // Cart list
  cartlist = [
    {img:'assets/img/products/1.jpg',title:'Oppal',qty:'2 Pieces',price:'12.99',totalprice:'12.99'},
    {img:'assets/img/products/5.jpg',title:'Toppaz',qty:'1 Piece',price:'9.99',totalprice:'9.99'},
    {img:'assets/img/products/4.jpg',title:'Amber',qty:'3 Pieces',price:'13.99',totalprice:'13.99'},
  ];

  ngOnInit(): void {
  }

}
