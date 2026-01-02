import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArtService, Artwork } from '../../services/art.service';
import { ArtCardComponent } from '../art-card/art-card.component';
import { ArtTableComponent } from '../art-table/art-table.component';

// Imports de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

// Animaciones
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ArtCardComponent,
    ArtTableComponent,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            stagger(
              '100ms',
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  artworks: Artwork[] = [];
  loading: boolean = true;
  viewMode: 'cards' | 'table' = 'cards';

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.artService.getArtworks(20).subscribe({
      next: (data) => {
        this.artworks = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  toggleView(mode: 'cards' | 'table'): void {
    this.viewMode = mode;
  }
}
