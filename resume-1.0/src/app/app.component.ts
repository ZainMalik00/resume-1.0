import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'resume-1.0';
  
  @ViewChild("aboutSection") aboutSection !: ElementRef;
  @ViewChild("experienceSection") experienceSection !: ElementRef;
  @ViewChild("contactSection") contactSection !: ElementRef;
  
  ngAfterViewInit() {}

  scrollToSection(selectedDiv : any): void {
    switch (selectedDiv){
      case "about":
        this.aboutSection.nativeElement.scrollIntoView({behavior: "smooth"} ); //enables smooth scrolling
        break;
      case "experience":
        this.experienceSection.nativeElement.scrollIntoView({behavior: "smooth"} ); //enables smooth scrolling
        break;
      case "contact":
        this.contactSection.nativeElement.scrollIntoView({behavior: "smooth"} ); //enables smooth scrolling
        break;
    }
  }
}
