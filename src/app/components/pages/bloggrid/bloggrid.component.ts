import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloggrid',
  templateUrl: './bloggrid.component.html',
  styleUrls: ['./bloggrid.component.css']
})
export class BloggridComponent implements OnInit {

  constructor() { }
  // blogpost
  blogpost = [
    {img:'assets/img/blog/2.jpg',tag:'T-shirt Design',title:'How to build a successful marketing agency',date:'May 20, 2021'},
    {img:'assets/img/blog/1.jpg',tag:'T-shirt Design',title:'We are providing free copies for back to school',date:'May 20, 2021'},
    {img:'assets/img/blog/3.jpg',tag:'T-shirt Design',title:'Hue Colors that better match trendy designs',date:'May 20, 2021'},
    {img:'assets/img/blog/4.jpg',tag:'T-shirt Design',title:'Van covers are now the newly trendy thing',date:'May 20, 2021'},
    {img:'assets/img/blog/5.jpg',tag:'T-shirt Design',title:'Room covers help create a house dynamic',date:'May 20, 2021'},
    {img:'assets/img/blog/6.jpg',tag:'T-shirt Design',title:'How to build a successful marketing agency',date:'May 20, 2021'},
    {img:'assets/img/blog/7.jpg',tag:'T-shirt Design',title:'How to change your identified books today',date:'May 20, 2021'},
    {img:'assets/img/blog/8.jpg',tag:'T-shirt Design',title:'Bands are asking for new CD covers for albums',date:'May 20, 2021'},
  ];

  ngOnInit(): void {
  }

}
