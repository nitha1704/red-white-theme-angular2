import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {

  constructor() { }
  image = 'assets/img/products/new/1.jpg';
  // Quantity 
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }

  ngOnInit(): void {
  }

}
