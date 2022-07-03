import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  @Output() navbarClick = new EventEmitter();

  ngOnInit(): void {}

  clickedSection(section : string): void {
    this.navbarClick.emit(section);
  }

  @HostListener('window:resize', ['$event']) navbarToggle(event: any) : void {
    const navList = document.getElementById("navbar-list");
    const navListContent = document.getElementById("navbar-list-content");

    if(navList != null && navListContent != null) {//null check
      if(navListContent.offsetWidth > navList.offsetWidth){//when navbar list overflows to the left side

      }
    }
  }
}
