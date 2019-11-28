import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourPlacesPage } from './your-places.page';

const routes: Routes = [
  {
    path: '',
    component: YourPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourPlacesPageRoutingModule {}
