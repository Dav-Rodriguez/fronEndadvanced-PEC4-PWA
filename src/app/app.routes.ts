import { Routes } from '@angular/router';
import { ArtDetailComponent } from './components/art-detail/art-detail.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: ArtDetailComponent },
  { path: '**', redirectTo: '' },
];
