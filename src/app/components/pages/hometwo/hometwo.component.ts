import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-hometwo',
  templateUrl: './hometwo.component.html',
  styleUrls: ['./hometwo.component.css']
})
export class HometwoComponent implements AfterViewInit {

  constructor() { }
  // Extra 
  extracheck: boolean = true;
  openExtra() {
    this.extracheck = !this.extracheck;
  }
  closeExtra() {
    this.extracheck = !this.extracheck;
  }
  // Banner
  bannerpost = [
    { img: 'assets/img/banner/4.jpg', email: 'info@example.com', texture: 'assets/img/textures/5.png', title: 'To Consider For A Rich Culture To Be Explored By Pioneer Portfolio' },
    { img: 'assets/img/banner/2.jpg', email: 'info@example.com', texture: 'assets/img/textures/5.png', title: 'To Consider For A Rich Culture To Be Explored By Pioneer Portfolio' },
  ];
  bannerConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.banner-3 .slider-prev',
    nextArrow: '.banner-3 .slider-next',
    dots: false,
  };
  // client
  clientpost = [
    {img:'assets/img/clients/1.png'},
    {img:'assets/img/clients/2.png'},
    {img:'assets/img/clients/3.png'},
    {img:'assets/img/clients/4.png'},
    {img:'assets/img/clients/5.png'},
    {img:'assets/img/clients/6.png'},
  ];
  // About
  aboutimg = 'assets/img/about.jpg';
  // Experience
  experienceimg = 'assets/img/about2.jpg';
  experiencepost = [
    {post:'Lead Ui/UX Designer',time:'2020 - Current',companyname:'Google'},
    {post:'Senior Developer',time:'2018 - 2020',companyname:'IBM & Co'},
    {post:'Senior Developer',time:'2017 - 2018',companyname:'Twitter'},
    {post:'Junior Developer',time:'2015 - 2017',companyname:'Instagram'},
    {post:'Intern',time:'2010 - 2015',companyname:'Parlo'},
  ];
  // Icons
  iconsbg = 'assets/img/banner/8.png';
  // Icons Start
  iconsblock = [
    { title: 'Trust &', titlespan: 'Safety', icon: 'flaticon-security', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.' },
    { title: '20,000+', titlespan: 'Packages', icon: 'flaticon-box', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.' },
    { title: 'Clients', titlespan: 'love us', icon: 'flaticon-heart-1', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.' },
  ];
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
  // Blog Start
  blogpost = [
    {date:'May 20',year:'2021',title:'Indoor Play Areas is simply dummy text of the printing',authorname:'Alisa Brown',tag:'Latest News'},
    {date:'Aug 20',year:'2021',title:'How to improve your SEO results with a few easy steps',authorname:'Alisa Brown',tag:'Latest News'},
    {date:'June 20',year:'2021',title:'Trending designs of 2021 are being used across all sites',authorname:'Alisa Brown',tag:'Latest News'},
    {date:'March 20',year:'2021',title:'We believe that neumorphism is an interesting design',authorname:'Alisa Brown',tag:'Latest News'},
  ];

  ngAfterViewInit(): void {
    // Video popup
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
