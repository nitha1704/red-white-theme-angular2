import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  constructor() { }
  // About
  aboutimg = 'assets/img/about.jpg';
  // Experience
  experienceimg = 'assets/img/about2.jpg';
  experiencepost = [
    { post: 'Lead Ui/UX Designer', time: '2020 - Current', companyname: 'Google' },
    { post: 'Senior Developer', time: '2018 - 2020', companyname: 'IBM & Co' },
    { post: 'Senior Developer', time: '2017 - 2018', companyname: 'Twitter' },
    { post: 'Junior Developer', time: '2015 - 2017', companyname: 'Instagram' },
    { post: 'Intern', time: '2010 - 2015', companyname: 'Parlo' },
  ];
  // Skills
  skillsimg = 'assets/img/about3.jpg';
  progresspost = [
    {title:'Web Design',percent:70},
    {title:'UI/UX Interactions',percent:85},
    {title:'Studio Photography',percent:55},
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
  // client
  clientpost = [
    {img:'assets/img/clients/dark/1.png'},
    {img:'assets/img/clients/dark/2.png'},
    {img:'assets/img/clients/dark/3.png'},
    {img:'assets/img/clients/dark/4.png'},
    {img:'assets/img/clients/dark/5.png'},
    {img:'assets/img/clients/dark/6.png'},
    {img:'assets/img/clients/dark/7.png'},
    {img:'assets/img/clients/dark/8.png'},
    {img:'assets/img/clients/dark/9.png'},
    {img:'assets/img/clients/dark/10.png'},
    {img:'assets/img/clients/dark/11.png'},
    {img:'assets/img/clients/dark/12.png'},
    {img:'assets/img/clients/dark/13.png'},
    {img:'assets/img/clients/dark/14.png'},
    {img:'assets/img/clients/dark/15.png'},
    {img:'assets/img/clients/dark/16.png'},
    {img:'assets/img/clients/dark/17.png'},
    {img:'assets/img/clients/dark/18.png'},
    {img:'assets/img/clients/dark/19.png'},
    {img:'assets/img/clients/dark/20.png'},
    {img:'assets/img/clients/dark/21.png'},
    {img:'assets/img/clients/dark/5.png'},
  ];

  ngAfterViewInit(): void {
    function progressbar() {
      $(".sigma_progress").each(function () {
        var progressBar = $(this).find(".progress-bar");
        var progressCount = $(this).find(".sigma_progress-count");
        $(progressBar).animate({
          width: $(progressBar).attr("aria-valuenow") + "%"
        });
        $(progressCount).animate({
          left: $(progressBar).attr("aria-valuenow") + "%"
        });
      });
    }
    progressbar();
  }

}
