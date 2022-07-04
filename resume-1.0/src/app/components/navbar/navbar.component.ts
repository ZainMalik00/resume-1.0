import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  navbarOverflown : boolean = false;
  hideNavbarOptions : boolean = true;
  previousNavbarListWidth : number = 0;

  constructor() {}

  @Output() navbarClick = new EventEmitter();

  @ViewChild("navbarList") navbarList !: ElementRef;
  @ViewChild("navbarListContent") navbarListContent !: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(()=> {//Avoid ExpressionChangedAfterItHasBeenCheckedError
      this.navbarToggle("placeholder");
    }, 0);
  }

  toggleNavbarOptions(): void {
    if(this.hideNavbarOptions){
      this.hideNavbarOptions = false;
    }else{
      this.hideNavbarOptions = true;
    }
  }

  clickedSection(section : string): void {
    this.navbarClick.emit(section);
  }

  @HostListener('window:resize', ['$event']) navbarToggle(event: any) : void {
    if(this.navbarListContent.nativeElement.offsetWidth >= this.navbarList.nativeElement.offsetWidth){//when navbar list overflows to the left side
      this.navbarOverflown = true;
      this.previousNavbarListWidth = this.navbarListContent.nativeElement.offsetWidth;
    }
    if(this.previousNavbarListWidth < this.navbarList.nativeElement.offsetWidth){
      this.navbarOverflown = false;
    }
  }
}
