import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, OnDestroy, Renderer2, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, AfterViewInit, OnDestroy {
  tabsContentHeight: string = '300px';
  activeTab !: Element;
  contents !: any;

  private tabsOnClick!: () => void;

  constructor(private cdr:ChangeDetectorRef, private renderer: Renderer2) {}

  @ViewChild('tabs') tabs !: ElementRef;
  @ViewChild('tabsContent') tabsContent !: ElementRef;
  @ViewChild('chosen') chosen !: ElementRef;
  @ViewChild('defaultTab') defaultTab !: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.contents = this.tabsContent.nativeElement.children;
    this.activeTab = this.defaultTab.nativeElement;
    this.setContainerHeight(0);

    this.tabsOnClick = this.renderer.listen(this.tabs.nativeElement, "click", event => {
      const selectedTab: Element = event.target;
      const selectedTabDataValue: string | null = selectedTab.getAttribute('data-value');
      const selectedContent = this.contents.item(selectedTabDataValue);
      const activeContent = this.contents.item(this.activeTab.getAttribute('data-value'));

      this.renderer.removeClass(this.activeTab, "active");
      this.renderer.removeClass(activeContent, "active");
      this.renderer.addClass(selectedTab, "active");
      this.renderer.addClass(selectedContent, "active");
      this.chosen.nativeElement.style.left = (33.4*(Number(selectedTabDataValue)))+"%";
      this.setContainerHeight(Number(selectedTabDataValue));
      this.activeTab=selectedTab;
    });
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
  }

  setContainerHeight(index : number): void {
    if(parseInt(index.toString()) == index){ //Ensures index is an integer
      this.tabsContentHeight = this.contents.item(index).offsetHeight+"px";
      this.cdr.detectChanges(); //Updates View and Avoids ExpressionChangedAfterItHasBeenCheckedError
    }
  }

  @HostListener('window:resize', ['$event']) resizeContainer(event: any) : void {
    this.setContainerHeight(Number(this.activeTab.getAttribute('data-value')));
  }
}
