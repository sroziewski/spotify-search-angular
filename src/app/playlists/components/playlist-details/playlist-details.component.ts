import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Playlist } from "src/app/model/Playlist";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-playlist-details",
  templateUrl: "./playlist-details.component.html",
  styleUrls: ["./playlist-details.component.scss"]
})
export class PlaylistDetailsComponent implements OnInit {
  @Input()
  playlist: Playlist;

  constructor() {}

  ngOnInit() {}

  mode = "show";

  edit() {
    this.mode = "edit";
  }

  cancel() {
    this.mode = "show";
  }

  @Output()
  playlistChange = new EventEmitter<Playlist>();

  save(formRef: NgForm) {

    // const draft:Partial<Playlist> = formRef.value

    const draft:Pick<Playlist, 'name' | 'favourite' | 'color'> = formRef.value

    const playlist = {
      ...this.playlist,
      ...draft
    }
   
    this.playlistChange.emit(playlist)
  }
}


// type Partial<T> = {
//   [key in keyof T ]?: T[key]
// }

