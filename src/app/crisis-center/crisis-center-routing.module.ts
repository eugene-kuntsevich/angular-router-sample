import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
      },
      {
        path: ':id',
        component: CrisisDetailComponent,
      },
      {
        path: 'home',
        component: CrisisCenterHomeComponent,
      },

    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CrisisCenterRoutingModule {}
