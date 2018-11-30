import { Component, OnInit, Input, HostBinding, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent implements OnInit {
  @Input()
  title: string;

  @HostBinding("class.card")
  cokolwiek = true;

  open = false;

  openChange = new EventEmitter()

  toggle() {
    this.openChange.emit()
  }

  constructor() {}

  ngOnInit() {}
}
