import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  image_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  constructor(private http: HttpClient) {}

  getArtworks(limit: number = 20): Observable<Artwork[]> {
    return this.http
      .get<any>(
        `${this.apiUrl}?fields=id,title,artist_display,image_id&limit=${limit}`
      )
      .pipe(map((response) => response.data));
  }

  getArtworkById(id: string): Observable<Artwork> {
    return this.http
      .get<any>(`${this.apiUrl}/${id}?fields=id,title,artist_display,image_id`)
      .pipe(map((response) => response.data));
  }

  getImageUrl(imageId: string): string {
    return imageId
      ? `https://www.artic.edu/iiif/2/${imageId}/full/400,/0/default.jpg`
      : 'assets/no-image.png';
  }
}
