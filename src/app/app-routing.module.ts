import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MusicSearchComponent } from "./music/components/music-search/music-search.component";
import { AlbumDetailsComponent } from "./music/components/album-details/album-details.component";

const routes: Routes = [
  {
    path: "",
    // component: HomeComponent,
    redirectTo: "playlists",
    pathMatch: "full"
  },
  {
    path: "music",
    loadChildren:'./music/music.module#MusicModule'
  },
  {
    path: "**",
    // component: PageNotFoundComponent,
    redirectTo: "playlists",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
      // useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
