import { AfterViewInit, Component } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements AfterViewInit {

  constructor() { }
  videoimage = 'assets/img/projects/details/1.jpg';
  projectimg = 'assets/img/projects/details/7.jpg';
  // Small Gallery
  smallgallery = [
    {img:'assets/img/projects/details/2.jpg'},
    {img:'assets/img/projects/details/3.jpg'},
  ];
  // Gallery
  gallery = [
    {img:'assets/img/projects/details/4.jpg'},
    {img:'assets/img/projects/details/5.jpg'},
    {img:'assets/img/projects/details/6.jpg'},
  ];

  ngAfterViewInit(): void {
    // Image popup
    ($('.gallery-thumb') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
    });
    // Video popup
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
