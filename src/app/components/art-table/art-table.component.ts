import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// Importamos la tabla y sus componentes de fila específicos
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Artwork } from '../../services/art.service';

@Component({
  selector: 'app-art-table',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule],
  template: `
    <div class="table-container">
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

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>

        <tr
          mat-row
          *matRowDef="let row; columns: displayedColumns"
          [routerLink]="['/detail', row.id]"
          class="element-row"
        ></tr>
      </table>
    </div>
  `,
  styles: [
    `
      .table-container {
        width: 100%;
        overflow-x: auto;
      }
      table {
        width: 100%;
      }
      .element-row {
        cursor: pointer;
        transition: background 0.2s;
        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    `,
  ],
})
export class ArtTableComponent {
  @Input({ required: true }) artworks: Artwork[] = [];
  displayedColumns: string[] = ['id', 'title', 'artist'];
}
