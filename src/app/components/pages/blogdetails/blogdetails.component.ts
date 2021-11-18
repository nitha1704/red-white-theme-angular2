import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements AfterViewInit {

  constructor() { }
  blogthumb = 'assets/img/blog/details/1.jpg';
  gallerythumb = 'assets/img/blog/details/2.jpg';
  blockquotebg = 'assets/img/blog/details/blockquote.jpg';
  comment1 = 'assets/img/people/1.jpg';
  comment2 = 'assets/img/people/2.jpg';
  // gallerypost
  gallerypost = [
    {img:'assets/img/blog/details/3.jpg'},
    {img:'assets/img/blog/details/4.jpg'},
  ];
  // Tags
  posttags = [
    {tag:'Portfolio'},
    {tag:'Creative'},
    {tag:'Intuitive'},
  ];
  // Social share
  socialshare = [
    {icon:'facebook-f',url:'/'},
    {icon:'linkedin-in',url:'/'},
    {icon:'twitter',url:'/'},
    {icon:'youtube',url:'/'},
  ];
  // Clients
  clientpost = [
    { img: 'assets/img/clients/1.png' },
    { img: 'assets/img/clients/2.png' },
    { img: 'assets/img/clients/3.png' },
    { img: 'assets/img/clients/4.png' },
    { img: 'assets/img/clients/5.png' },
    { img: 'assets/img/clients/6.png' },
  ];

  ngAfterViewInit(): void {
    // Image popup
    ($('.gallery-thumb') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
    });
  }

}
