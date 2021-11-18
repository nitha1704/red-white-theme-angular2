import { Component, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'sigma_quick-view-modal' });
  }
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
    { img: 'assets/img/banner/3.jpg', email: 'info@example.com', texture: 'assets/img/textures/4.png', title: 'To Consider For A Rich Culture To Be Explored By Pioneer Portfolio' },
    { img: 'assets/img/banner/5.jpg', email: 'info@example.com', texture: 'assets/img/textures/4.png', title: 'To Consider For A Rich Culture To Be Explored By Pioneer Portfolio' },
  ];
  bannerConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.banner-3 .slider-prev',
    nextArrow: '.banner-3 .slider-next',
    dots: false,
  }
  // Icons Start
  iconsblock = [
    { title: 'Trust &', titlespan: 'Safety', icon: 'flaticon-security', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.' },
    { title: '20,000+', titlespan: 'Packages', icon: 'flaticon-box', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.' },
    { title: 'Clients', titlespan: 'love us', icon: 'flaticon-heart-1', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.' },
  ];
  // about
  aboutimg = 'assets/img/about4.jpg';
  // Experience
  experience = [
    { title: 'Lead Ui/UX Designer', time: '2020 - Current', companyname: 'Google' },
    { title: 'Senior Developer', time: '2018 - 2020', companyname: 'IBM and Co' },
  ];
  // Categories
  categories = [
    { img: 'assets/img/projects/6.jpg', title: 'Web Design', category: 'Office', date: '03 Jun, 2021' },
    { img: 'assets/img/projects/2.jpg', title: 'UI Design', category: 'Office', date: '03 Jun, 2021' },
    { img: 'assets/img/projects/3.jpg', title: 'UX Research', category: 'Office', date: '03 Jun, 2021' },
    { img: 'assets/img/projects/4.jpg', title: 'Business Consult', category: 'Office', date: '03 Jun, 2021' },
  ];
  categoryConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '.projects-section .slider-prev',
    nextArrow: '.projects-section .slider-next',
    autoplay: true,
    responsive: [{
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  };
  // Testimonials
  testimonialimg = 'assets/img/img.png';
  testimonialpost = [
    { name: 'Bobby K. Parker', post: 'UI/UX Developer', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.' },
    { name: 'Bobby K. Parker', post: 'UI/UX Developer', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.' },
    { name: 'Bobby K. Parker', post: 'UI/UX Developer', text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.' },
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
  // Instagram
  instagrambg = 'assets/img/about3.jpg';
  instapost = [
    { img: 'assets/img/ig/lg/1.jpg' },
    { img: 'assets/img/ig/lg/2.jpg' },
    { img: 'assets/img/ig/lg/3.jpg' },
    { img: 'assets/img/ig/lg/4.jpg' },
    { img: 'assets/img/ig/lg/5.jpg' },
    { img: 'assets/img/ig/lg/6.jpg' },
  ];
  // Products
  productspost = [
    { img: 'assets/img/products/1.jpg', title: 'Oppal', text: 'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.', price: '19', tag: 'yes' },
    { img: 'assets/img/products/2.jpg', title: 'Topaz', text: 'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.', price: '29', },
    { img: 'assets/img/products/3.jpg', title: 'Amazonite', text: 'Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.', price: '19', discountprice: '29', },
  ];
  // CTA
  ctabg = 'assets/img/banner/1.jpg';
  // Blog post 
  blogpost = [
    { img: 'assets/img/blog/2.jpg', title: 'How to build a successful marketing agency', tag: 'T-shirt Design', date: 'May 20, 2021' },
    { img: 'assets/img/blog/1.jpg', title: 'We are providing free copies for back to school', tag: 'Back to School', date: 'May 20, 2021' },
    { img: 'assets/img/blog/3.jpg', title: 'Hue Colors that better match trendy designs', tag: 'T-shirt Design', date: 'May 20, 2021' },
  ];
  // client
  clientpost = [
    { img: 'assets/img/clients/1.png' },
    { img: 'assets/img/clients/2.png' },
    { img: 'assets/img/clients/3.png' },
    { img: 'assets/img/clients/4.png' },
    { img: 'assets/img/clients/5.png' },
    { img: 'assets/img/clients/6.png' },
    { img: 'assets/img/clients/7.png' },
    { img: 'assets/img/clients/8.png' },
    { img: 'assets/img/clients/9.png' },
    { img: 'assets/img/clients/10.png' },
    { img: 'assets/img/clients/11.png' },
    { img: 'assets/img/clients/12.png' },
    { img: 'assets/img/clients/1.png' },
    { img: 'assets/img/clients/2.png' },
    { img: 'assets/img/clients/3.png' },
    { img: 'assets/img/clients/4.png' },
    { img: 'assets/img/clients/5.png' },
    { img: 'assets/img/clients/6.png' },
    { img: 'assets/img/clients/7.png' },
    { img: 'assets/img/clients/8.png' },
    { img: 'assets/img/clients/9.png' },
    { img: 'assets/img/clients/10.png' },
  ];

  ngAfterViewInit(): void {
    // Video popup
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
