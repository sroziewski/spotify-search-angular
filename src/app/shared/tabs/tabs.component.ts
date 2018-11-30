import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ContentChild,
  ContentChildren,
  QueryList,
  ViewContainerRef
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { TabsNavComponent } from "../tabs-nav/tabs-nav.component";
import { TabDirective } from "../tab.directive";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ContentChild(TabsNavComponent, { read: TabsNavComponent })
  navRef: TabsNavComponent;

  @ViewChild("outlet", { read: ViewContainerRef })
  outlet: ViewContainerRef;

  @ContentChildren(TabDirective)
  tabsList: QueryList<TabDirective>;

  toggle(active: TabDirective) {
    this.outlet.clear()
    this.outlet.createEmbeddedView(active.tpl);
  }

  constructor() {}

  ngOnInit() {}

  subs = new Map();

  ngAfterContentInit() {
    this.navRef.activeChange.subscribe((tab:TabDirective) => {
      this.toggle(tab);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.navRef.tabs = this.tabsList;
    });
    console.log(this.tabsList);
  }
}
