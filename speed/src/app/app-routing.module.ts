import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'status/:id', loadChildren: './views/status/status.module#StatusModule' },
  { path: 'launch/:id', loadChildren: './views/launch/launch.module#LaunchModule' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
