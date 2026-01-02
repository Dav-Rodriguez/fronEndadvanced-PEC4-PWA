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
    <table mat-table [dataSource]="artworks" class="mat-elevation-z8">
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

      <tr mat-header-row *mat-header-rowDef="displayedColumns"></tr>
      <tr
        mat-row
        *mat-rowDef="let row; columns: displayedColumns"
        [routerLink]="['/detail', row.id]"
        class="element-row"
      ></tr>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }
      .element-row {
        cursor: pointer;
        &:hover {
          background: #f5f5f5;
        }
      }
    `,
  ],
})
export class ArtTableComponent {
  @Input({ required: true }) artworks: Artwork[] = [];
  displayedColumns: string[] = ['id', 'title', 'artist'];
}
