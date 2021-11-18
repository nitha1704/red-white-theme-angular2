import { AfterViewInit, Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-favprojects',
  templateUrl: './favprojects.component.html',
  styleUrls: ['./favprojects.component.css']
})
export class FavprojectsComponent implements AfterViewInit {

  constructor() { }
  // Categories
  categoriespost = [
    {origin:'food',title:'UI Design',img:'assets/img/projects/1.jpg',category:'Office',date:'03 Jun, 2021'},
    {origin:'fitness',title:'UX Design',img:'assets/img/projects/2.jpg',category:'Office',date:'03 Jun, 2021'},
    {origin:'food fitness',title:'Web Design',img:'assets/img/projects/3.jpg',category:'Office',date:'03 Jun, 2021'},
    {origin:'food',title:'Business Consult',img:'assets/img/projects/4.jpg',category:'Office',date:'03 Jun, 2021'},
    {origin:'design fitness',title:'Web Research',img:'assets/img/projects/5.jpg',category:'Office',date:'03 Jun, 2021'},
    {origin:'design',title:'SEO Optimize',img:'assets/img/projects/6.jpg',category:'Office',date:'03 Jun, 2021'},
  ];

  ngAfterViewInit(): void {
    // Filter
    function filter() {
      $(document).ready(function () {
        $(".portfolio-trigger").click(function () {
          var value = $(this).attr('data-filter');
          if (value == "all") {
            $('.filter-item').show('1000');
          }
          else {
            $(".filter-item").not('.' + value).hide('3000');
            $('.filter-item').filter('.' + value).show('3000');
          }
        });
      });
      $(".portfolio-trigger").click(function () {
        if (!$(this).hasClass('active')) { 
          $(".portfolio-trigger").removeClass("active"); 
          $(this).addClass("active"); }
      });
    }
    filter();
  }

}
