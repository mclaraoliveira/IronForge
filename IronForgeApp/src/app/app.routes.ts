import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'starter',
    pathMatch: 'full',
  },
  {
    path: 'starter',
    loadComponent: () => import('./pages/starter/starter.page').then( m => m.StarterPage)
  },
  {
    path: 'new-champion-1',
    loadComponent: () => import('./pages/new-champion-1/new-champion-1.page').then( m => m.NewChampion1Page)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
