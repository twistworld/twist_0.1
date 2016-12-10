import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './restricted'
  },
  { path: '**',    component: NoContentComponent },
];
