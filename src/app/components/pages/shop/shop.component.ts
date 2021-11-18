import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'sigma_quick-view-modal' });
  }
  // Shop post
  shopblocks = [
    {img:'assets/img/products/1.jpg',title:'Amethyst',price:29,discountprice:'',tag:'',text:'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
    {img:'assets/img/products/2.jpg',title:'Calcite',price:19,discountprice:29,tag:'',text:'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
    {img:'assets/img/products/3.jpg',title:'Agate',price:19,discountprice:'',tag:'',text:'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
    {img:'assets/img/products/4.jpg',title:'Oppal',price:29,discountprice:'',tag:'yes',text:'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
    {img:'assets/img/products/5.jpg',title:'Chrysoprase',price:29,discountprice:'',tag:'',text:'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
    {img:'assets/img/products/6.jpg',title:'Topaz',price:19,discountprice:29,tag:'yes',text:'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
  ];

  ngOnInit(): void {
  }

}
