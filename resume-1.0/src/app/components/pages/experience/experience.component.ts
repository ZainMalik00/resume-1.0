import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  tabsContentHeight: string = '300px';

  constructor() { }

  @ViewChild('tabs') tabs !: ElementRef;
  @ViewChild('tabsContent') tabsContent !: ElementRef;
  @ViewChild('chosen') chosen !: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setContainerHeight();
  }


  
  setContainerHeight(): void{
    const contents = this.tabsContent.nativeElement.children;
    this.tabsContentHeight = contents.item(0).offsetHeight+"px";
  }

}
