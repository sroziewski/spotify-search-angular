import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsViewComponent } from './playlists/components/playlists-view/playlists-view.component';
import { MusicSearchComponent } from './music/components/music-search/music-search.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'playlist',
    pathMatch: "full"
  },
  {
    path:'playlist',
    component: PlaylistsViewComponent
  },
  
  {
    path:'music',
    component: MusicSearchComponent
  },
  
  {
    path:'**',
    redirectTo: 'playlist',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
