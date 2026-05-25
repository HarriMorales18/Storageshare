import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { SearchSpaces } from './features/search-spaces/search-spaces';
import { SpaceDetail } from './features/space-detail/space-detail';

export const routes: Routes = [
    { path: '', component: Home },
  { path: 'buscar', component: SearchSpaces },
  { path: 'espacio/:id', component: SpaceDetail },
  { path: '**', redirectTo: '' }
];
