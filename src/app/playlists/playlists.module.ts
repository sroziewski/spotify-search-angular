import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaylistsViewComponent } from "./components/playlists-view/playlists-view.component";
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { PlaylistDetailsComponent } from "./components/playlist-details/playlist-details.component";

import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PlaylistsListComponent } from "./containers/playlists-list/playlists-list.component";
import { SelectedPlaylistComponent } from "./containers/selected-playlist/selected-playlist.component";
import { PlaylistsRoutingModule } from './playlists-routing.module';

@NgModule({
  declarations: [
    PlaylistsViewComponent,
    ItemsListComponent,
    ListItemComponent,
    PlaylistDetailsComponent,
    PlaylistsListComponent,
    SelectedPlaylistComponent
  ],
  imports: [CommonModule, FormsModule, PlaylistsRoutingModule, SharedModule],
  entryComponents: [PlaylistsViewComponent],
  exports: [PlaylistsViewComponent]
})
export class PlaylistsModule {}
