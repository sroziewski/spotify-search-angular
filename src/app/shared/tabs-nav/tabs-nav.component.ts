import {
  Component,
  OnInit,
  Input,
  QueryList,
  EventEmitter
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { TabDirective } from "../tab.directive";

@Component({
  selector: "app-tabs-nav",
  templateUrl: "./tabs-nav.component.html",
  styleUrls: ["./tabs-nav.component.scss"]
})
export class TabsNavComponent implements OnInit {
  @Input()
  tabs: QueryList<TabDirective>;

  activeChange = new EventEmitter<TabDirective>();

  toggle(tab: TabDirective) {
    this.activeChange.emit(tab);
  }

  constructor() {}

  ngOnInit() {}
}
