import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFarmerPage } from './list-farmer.page';

const routes: Routes = [
  {
    path: '',
    component: ListFarmerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFarmerPageRoutingModule {}
