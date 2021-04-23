import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroListComponent } from './hero-list/hero-list.component';

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroListComponent, data: {animation: 'heroes'}},
  {path: 'hero/:id', component: HeroDetailComponent, data: {animation: 'hero'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HeroesRoutingModule {}
