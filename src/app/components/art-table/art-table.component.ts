import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Artwork } from '../../services/art.service';

@Component({
  selector: 'app-art-table',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule],
  template: `
    <div style="padding: 20px; overflow-x: auto;">
      @if (artworks && artworks.length > 0) {
      <table
        mat-table
        [dataSource]="artworks"
        class="mat-elevation-z8"
        style="width: 100%;"
      >
        <ng-container matColumnDef="id">
          <th mat-header-cell *mat-header-cell>ID</th>
          <td mat-cell *mat-cell="let element">{{ element.id }}</td>
        </ng-container>

        <ng-container matColumnDef="title">
          <th mat-header-cell *mat-header-cell>Title</th>
          <td mat-cell *mat-cell="let element">{{ element.title }}</td>
        </ng-container>

        <ng-container matColumnDef="artist">
          <th mat-header-cell *mat-header-cell>Artist</th>
          <td mat-cell *mat-cell="let element">{{ element.artist_display }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr
          mat-row
          *matRowDef="let row; columns: displayedColumns"
          [routerLink]="['/detail', row.id]"
          style="cursor: pointer;"
        ></tr>
      </table>
      } @else {
      <div style="text-align: center; padding: 20px;">
        <p>No artworks to display in table.</p>
      </div>
      }
    </div>
  `,
})
export class ArtTableComponent {
  @Input({ required: true }) artworks: Artwork[] = [];
  displayedColumns: string[] = ['id', 'title', 'artist'];
}
