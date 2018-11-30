import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicSearchComponent } from './components/music-search/music-search.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';

const routes: Routes = [  {
  path: "",
  component: MusicSearchComponent
},
{
  path: "/:id",
  component: AlbumDetailsComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
