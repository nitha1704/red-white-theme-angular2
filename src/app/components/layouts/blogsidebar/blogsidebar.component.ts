import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
})
export class BlogsidebarComponent implements AfterViewInit {

  constructor() { }
  advimg = 'assets/img/blog/details/5.jpg';
  author = 'assets/img/blog/details/6.jpg';
  // Categories
  categoriespost = [
    {title:'Slate & Crystal Events'},
    {title:'Indigo Event Planning'},
    {title:'Buttercup Events'},
    {title:'Done Right Event Designs'},
    {title:'Polished Events'},
    {title:'Posh Peony Events'},
    {title:'Dark Roast Events'},
    {title:'Origami Crane Wedding Planners'},
  ];
  // Popular Tags
  tagspost = [
    {tag:'Isabella'},
    {tag:'Samantha'},
    {tag:'Emily'},
    {tag:'June'},
    {tag:'Grace'},
    {tag:'Madison'},
    {tag:'Heather'},
    {tag:'Micheal'},
  ];

  ngAfterViewInit(): void {
    // Video popup
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
