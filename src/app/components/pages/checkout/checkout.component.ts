import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  // Checkout data
  checkoutdata = [
    {productname:'Oppal',qty:1,total:23.99},
    {productname:'Toppaz',qty:2,total:9.99},
    {productname:'Amber',qty:3,total:13.99},
  ];
  public islogin = true;
  public isapply = true;

  ngOnInit(): void {
  }

}
