import {
  Injectable,
  Inject,
  InjectionToken,
  EventEmitter
} from "@angular/core";
import { AlbumsResponse, Album } from "../../model/Album";
import { HttpClient } from "@angular/common/http";
import { map, concat, startWith, switchAll, switchMap } from "rxjs/operators";
import { of, Subject, ReplaySubject, BehaviorSubject } from "rxjs";

export const SEARCH_URL = new InjectionToken("Search API Url");

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
  albumsChange = new BehaviorSubject<Album[]>([]);
  queryChange = new BehaviorSubject<string>("batman");

  constructor(
    @Inject(SEARCH_URL) private search_url: string,
    private http: HttpClient
  ) {
    //
    this.queryChange
      .pipe(
        map(query => ({
          type: "album",
          q: query
        })),

        switchMap(params =>
          this.http.get<AlbumsResponse>(this.search_url, { params })
        ),
        
        // switchAll(),
        map(resp => resp.albums.items)
      )
      .subscribe(albums => this.albumsChange.next(albums));
  }

  /* Commands */

  search(query: string): any {
    this.queryChange.next(query);
  }

  /* Queries */

  getAlbums() {
    return this.albumsChange.asObservable();
  }

  getQuery() {
    return this.queryChange.asObservable();
  }

  ngOnDestroy(){
    console.log('bye bye from service')
  }
}
