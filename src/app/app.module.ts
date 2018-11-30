import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { SharedModule } from './shared/shared.module';
// import { MusicModule } from './music/music.module';
import { SecurityModule } from './security/security.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlaylistsModule,
    SharedModule,
    HttpClientModule,
    // MusicModule,
    SecurityModule,
    AppRoutingModule,
  ],
  providers: [],
  // entryComponents:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  // constructor(private app:ApplicationRef){}

  // ngDoBootstrap(){
  //   this.app.bootstrap(AppComponent)
  //   this.app.bootstrap(AppComponent,'.placki')
  // }
 }
