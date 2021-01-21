// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ExternalApiComponent } from 'src/app/pages/external-api/external-api.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'callback',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
