import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import AppCanLoadGuardService from './app-can-load-guard.service'

export const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full'},
  { path: 'cities', loadChildren: './src/domain/cities/cities.module.ts#CitiesModule', canLoad: [AppCanLoadGuardService]},
  { path: 'heroes', loadChildren: './src/domain/heroes/heroes.module#HeroesModule' },
  { path: 'google-maps', loadChildren: './src/domain/googleMaps/google-maps.module#GoogleMapsModule' },
  { path: 'admin', loadChildren: './src/domain/admin/admin.module#AdminModule' },
  { path: 'forms-demo', loadChildren: './src/domain/forms/forms-demo.module#FormsDemoModule' },
  { path: 'directives-demo', loadChildren: './src/domain/directives/directives-demo.module#DirectivesDemoModule' },
  { path: 'animations-demo', loadChildren: './src/domain/animations/animations.module#AnimationsModule' },
  { path: 'http-demo', loadChildren: './src/domain/http/http-demo.module#HttpDemoModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export default class AppRoutingModule { }
