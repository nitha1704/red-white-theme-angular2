import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'sigma_quick-view-modal' });
  }
  productimg = 'assets/img/products/new/1.jpg';
  comment1 = 'assets/img/people/1.jpg';
  comment2 = 'assets/img/people/2.jpg';
  // Quantity 
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  // Additional info
  additionalinformation = [
    {attribute:'Color',value:'blue, red, yellow, green'},
    {attribute:'Material',value:'wood, plastic, stainless steel'},
  ];
  // Related products
  relatedproducts = [
    { img: 'assets/img/products/1.jpg', title: 'Amethyst', text: 'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.', price: '19', discountprice: '29', tag: 'yes' },
    { img: 'assets/img/products/2.jpg', title: 'Topaz', text: 'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.', price: '19', discountprice: '29', tag: 'yes' },
    { img: 'assets/img/products/3.jpg', title: 'Oppal', text: 'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.', price: '19', discountprice: '29', tag: 'yes' },
    { img: 'assets/img/products/4.jpg', title: 'Emerald', text: 'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.', price: '19', discountprice: '29', tag: 'yes' },
  ];
  relatedConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  }

  ngOnInit(): void {
  }

}
