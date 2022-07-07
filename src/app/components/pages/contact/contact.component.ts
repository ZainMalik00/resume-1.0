import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OpenNewWindow(type: string): void {
    switch (type) {
      case 'mail':
        window.location.href = "mailto:zmmalik00@gmail.com";
        break;
      case 'github':
        window.open('https://github.com/ZainMalik00', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/zainmalik00/', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/_zj_malik_/', '_blank');
        break;
      case 'codepen':
        window.open('https://codepen.io/zainmalik00', '_blank'); 
        break;

    }
  }
}
