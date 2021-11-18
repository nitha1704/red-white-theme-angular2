import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() { }
  logo = 'assets/img/logo-dark.png';
  // Insta
  instapost = [
    {img:'assets/img/ig/1.jpg'},
    {img:'assets/img/ig/2.jpg'},
    {img:'assets/img/ig/3.jpg'},
    {img:'assets/img/ig/4.jpg'},
    {img:'assets/img/ig/5.jpg'},
    {img:'assets/img/ig/6.jpg'},
  ];

  ngOnInit(): void {
  }

}
