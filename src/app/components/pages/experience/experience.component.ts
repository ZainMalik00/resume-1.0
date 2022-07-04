import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  tabsContentHeight: string = '300px';

  constructor(private cdr:ChangeDetectorRef) {}

  @ViewChild('tabs') tabs !: ElementRef;
  @ViewChild('tabsContent') tabsContent !: ElementRef;
  @ViewChild('chosen') chosen !: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setContainerHeight(0);
  }

  setContainerHeight(index : number): void {
    if(parseInt(index.toString()) == index){ //Ensures index is an integer
      const contents = this.tabsContent.nativeElement.children;
      this.tabsContentHeight = contents.item(index).offsetHeight+"px";
      this.cdr.detectChanges(); //Updates View and Avoids ExpressionChangedAfterItHasBeenCheckedError
    }
  }
}
