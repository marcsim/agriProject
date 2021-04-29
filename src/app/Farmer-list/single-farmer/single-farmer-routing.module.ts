import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleFarmerPage } from './single-farmer.page';

const routes: Routes = [
  {
    path: '',
    component: SingleFarmerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleFarmerPageRoutingModule {}
