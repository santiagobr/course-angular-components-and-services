import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  activeMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
