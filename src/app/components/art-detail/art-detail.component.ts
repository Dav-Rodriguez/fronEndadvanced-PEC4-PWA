import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArtService, Artwork } from '../../services/art.service';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-art-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.scss'],
})
export class ArtDetailComponent implements OnInit {
  artwork: Artwork | null = null;
  loading = true;
  showMoreDetails = false;

  constructor(private route: ActivatedRoute, public artService: ArtService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.artService.getArtworkById(id).subscribe({
        next: (data) => {
          this.artwork = data;
          this.loading = false;
        },
        error: () => (this.loading = false),
      });
    }
  }
}
