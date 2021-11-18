import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }
  // Clients
  clientpost = [
    { img: 'assets/img/clients/1.png' },
    { img: 'assets/img/clients/2.png' },
    { img: 'assets/img/clients/3.png' },
    { img: 'assets/img/clients/4.png' },
    { img: 'assets/img/clients/5.png' },
    { img: 'assets/img/clients/6.png' },
  ];

  ngOnInit(): void {
  }

}
