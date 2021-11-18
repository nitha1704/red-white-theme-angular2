import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-shopsidebar',
  templateUrl: './shopsidebar.component.html',
  styleUrls: ['./shopsidebar.component.css']
})
export class ShopsidebarComponent implements OnInit {

  constructor() { }
  // Brand
  brandpost = [
    {title:'Topazima',id:1},
    {title:'Oppalofski',id:2},
    {title:'Apon',id:3},
    {title:'Portoflioski',id:4},
    {title:'Projectino',id:5},
    {title:'Bussinessoro',id:6},
  ];
  // Category
  categorypost = [
    {title:'Rocks',id:7},
    {title:'Amber',id:8},
    {title:'Precious',id:9},
    {title:'Stones',id:10},
    {title:'Scent',id:11},
  ];
  // Tags
  shoptags = [
    {tag:'Spa'},
    {tag:'Lotions'},
    {tag:'Scents'},
    {tag:'Product'},
    {tag:'Lavendar'},
    {tag:'Good'},
    {tag:'Relax'},
    {tag:'Relaxation'},
    {tag:'Comfort'},
    {tag:'Rocks'},
  ];
  // Originality slider
  originvalue: number = 4;
  originhighValue: number = 6;
  originoptions: Options = {
    floor: 0,
    ceil: 10,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + ' days' ;
        case LabelType.High:
          return value + ' days' ;
        default:
          return value + ' days' ;
      }
    }
  };
  // Price slider
  pricevalue: number = 10;
  pricehighValue: number = 100;
  priceoptions: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + ' $' ;
        case LabelType.High:
          return value + ' $' ;
        default:
          return value + ' $' ;
      }
    }
  };

  ngOnInit(): void {
  }

}
