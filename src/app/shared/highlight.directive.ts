import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  SimpleChanges,
  Renderer2,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
  // host: {
  //   "[style.color]": "color",
  //   "(mouseenter)":"activate($event)"
  // }
})
export class HighlightDirective {

  @Input("appHighlight")
  color: string;

  @HostBinding("style.color")
  get currentColor() {
    return this.active ? this.color : "";
  }

  active = false;

  constructor() {}

  @HostListener("mouseenter", ["$event.x", "$event.y"])
  activate(x: number, y: number) {
    this.active = true;
  }

  @HostListener("mouseleave")
  deactivate() {
    this.active = false;
  }
}

// console.log(HighlightDirective)