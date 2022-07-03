import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  clickedSection(selectedDiv : string): void {
    const element = document.getElementById(selectedDiv);
    if(element != null) {
      element.scrollIntoView({behavior: "smooth"} );
    }
  }

}
