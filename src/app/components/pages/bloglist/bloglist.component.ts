import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  constructor() { }
  // Blog list
  bloglistpost = [
    {date:'May 20',year:'2021',title:'Indoor Play Areas is simply dummy text of the printing',tag:'Latest News',authorname:'Alisa Brown'},
    {date:'Aug 20',year:'2021',title:'How to improve your SEO results with a few easy steps',tag:'Latest News',authorname:'Alisa Brown'},
    {date:'June 20',year:'2021',title:'Trending designs of 2021 are being used across all sites',tag:'Latest News',authorname:'Alisa Brown'},
    {date:'March 20',year:'2021',title:'We believe that neumorphism is an interesting design',tag:'Latest News',authorname:'Alisa Brown'},
    {date:'May 20',year:'2021',title:'Indoor Play Areas is simply dummy text of the printing',tag:'Latest News',authorname:'Alisa Brown'},
    {date:'Aug 20',year:'2021',title:'How to improve your SEO results with a few easy steps',tag:'Latest News',authorname:'Alisa Brown'},
    {date:'June 20',year:'2021',title:'Trending designs of 2021 are being used across all sites',tag:'Latest News',authorname:'Alisa Brown'},
    {date:'March 20',year:'2021',title:'We believe that neumorphism is an interesting design',tag:'Latest News',authorname:'Alisa Brown'},
  ];
  

  ngOnInit(): void {
  }

}
