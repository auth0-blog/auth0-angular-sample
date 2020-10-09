import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ExternalApiComponent } from 'src/app/pages/external-api/external-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
