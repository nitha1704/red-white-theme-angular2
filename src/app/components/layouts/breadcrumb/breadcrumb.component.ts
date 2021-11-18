import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }
  breadcrumbtexture = 'assets/img/textures/5.png';

  extracheck: boolean = true;
  openExtra() {
    this.extracheck = !this.extracheck;
  }
  closeExtra() {
    this.extracheck = !this.extracheck;
  }

  ngOnInit(): void {
  }

}
