import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ArtService, Artwork } from '../../services/art.service';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card class="art-card" [routerLink]="['/detail', artwork.id]">
      <img
        mat-card-image
        [src]="artService.getImageUrl(artwork.image_id)"
        [alt]="artwork.title"
      />
      <mat-card-header>
        <mat-card-title>{{ artwork.title }}</mat-card-title>
        <mat-card-subtitle>{{ artwork.artist_display }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-actions>
        <button mat-button color="primary">VIEW DETAILS</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .art-card {
        height: 100%;
        cursor: pointer;
        transition: transform 0.2s;
        &:hover {
          transform: scale(1.02);
        }
        img {
          height: 250px;
          object-fit: cover;
          background-color: #f0f0f0;
        }
      }
    `,
  ],
})
export class ArtCardComponent {
  @Input({ required: true }) artwork!: Artwork;
  constructor(public artService: ArtService) {}
}
