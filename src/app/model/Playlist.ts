export interface Playlist {
  id: number;
  name: string;
  favourite: boolean;
  /**
   * HEX color
   */
  color: string;
  // tracks: Array<Track>;
  tracks?: Track[];
}


export interface Track{
  id: number;
  name: string;
}