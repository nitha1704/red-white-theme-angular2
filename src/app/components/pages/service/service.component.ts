import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements AfterViewInit {

  constructor() { }
  // Icons Start
  iconspost = [
    {title:'Trust &',titlespan:'Safety',icon:'security',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.'},
    {title:'20,000+',titlespan:'Packages',icon:'box',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.'},
    {title:'Clients',titlespan:'love us',icon:'heart-1',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.'},
    {title:'World Class',titlespan:'Support',icon:'headphones',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.'},
    {title:'Instant',titlespan:'Delivery',icon:'paper-plane',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.'},
    {title:'Incredible',titlespan:'Call Center',icon:'call',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.'},
  ];
  // Video
  videobg = 'assets/img/banner/8.png';
  videoposter = 'assets/img/banner/7.jpg';
  // Testimonials
  testimonialsbg = 'assets/img/img.png';
  testimonialpost = [
    {name:'Bobby K. Parker',post:'UI/UX Developer',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
    {name:'Bobby K. Parker',post:'UI/UX Developer',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
    {name:'Bobby K. Parker',post:'UI/UX Developer',text:'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'},
  ];
  testimonialConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.testimonial-section .slider-prev',
    nextArrow: '.testimonial-section .slider-next',
    dots: false,
    autoplay: true,
  };
  // Team
  teamblock = [
    {img:'assets/img/team/1.jpg',name:'Kenne G. Patten',post:'UI/UX Designer'},
    {img:'assets/img/team/2.jpg',name:'Kenne G. Patten',post:'UI/UX Designer'},
    {img:'assets/img/team/4.jpg',name:'Kenne G. Patten',post:'UI/UX Designer'},
    {img:'assets/img/team/3.jpg',name:'Kenne G. Patten',post:'UI/UX Designer'},
  ];

  ngAfterViewInit(): void {
    // Video popup
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
