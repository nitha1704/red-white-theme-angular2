import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  // Sticky Nav
  @HostListener('window:scroll', [])
  onWindowScroll(event: Event) {
    //set up the div "id=nav"
    if (document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150) {
      document.getElementById('header').classList.add('sticky');
    }
    else {
      document.getElementById('header').classList.remove('sticky');
    }
  }
  logo = 'assets/img/logo.png';

  opencanvas: boolean = true;
  openCanvas() {
    this.opencanvas = !this.opencanvas;
  }
  closeCanvas() {
    this.opencanvas = !this.opencanvas;
  }

  // Navigation
  opennav: boolean = true;
  opennavBtn() {
    this.opennav = !this.opennav;
  }
  closenavBtn() {
    this.opennav = !this.opennav;
  }

  ngOnInit(): void {
  }

}
