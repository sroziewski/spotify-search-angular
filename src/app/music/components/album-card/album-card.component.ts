import { Component, OnInit, Input } from "@angular/core";
import { Album } from "../../../model/Album";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.scss"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;

  constructor() {}

  ngOnInit() {}
}
