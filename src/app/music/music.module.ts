import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MusicRoutingModule } from "./music-routing.module";
import { MusicSearchComponent } from "./components/music-search/music-search.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { AlbumsGridComponent } from "./components/albums-grid/albums-grid.component";
import { AlbumCardComponent } from "./components/album-card/album-card.component";
import { environment } from "../../environments/environment";
import { SEARCH_URL } from "./services/music-search.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MusicProviderDirective } from './music-provider.directive';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';

@NgModule({
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumsGridComponent,
    AlbumCardComponent,
    MusicProviderDirective,
    AlbumDetailsComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [MusicSearchComponent, MusicProviderDirective],
  providers: [
    {
      provide: SEARCH_URL,
      useValue: environment.api_url
    }
    // {
    //   provide: MusicSearchService,
    //   useFactory: (url: string) => {
    //     return new MusicSearchService(url);
    //   },
    //   deps: [SEARCH_URL]
    // },
    // {
    //   provide: AbstractSearchService,
    //   useClass: MusicSearchService,
    //   // deps: [SEARCH_URL]
    // },
    // MusicSearchService
  ]
})
export class MusicModule {}
