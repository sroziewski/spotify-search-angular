import { Injectable, Inject, InjectionToken, EventEmitter } from '@angular/core';
import { Album, AlbumResponse } from 'src/app/model/Albums';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';

export const SEARCH_URL = new InjectionToken('Search API URL');

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {
  albumsChange = new BehaviorSubject<Album[]>([]);
  queryChange = new BehaviorSubject<string>('batman');
  albums: Album[];

  constructor(
    @Inject(SEARCH_URL) private api_url: string,
    private http: HttpClient
  ) {

    this.queryChange
      .pipe(
        map(query => ({
          type: "album",
          q: query
        })),
        switchMap(params => this.http.get<AlbumResponse>(this.api_url, { params })
        ),
        map(resp => resp.albums.items)
      )
      .subscribe(albums => {
        this.albumsChange.next(albums)
      });
   }




  search(query: string): any {
    this.queryChange.next(query)
  }



  getAlbums() {
    return this.albumsChange.asObservable();
  }

  getQuery() {
    return this.queryChange.asObservable();
  }

}
import { map, pluck, catchError, switchMap } from "rxjs/operators"
