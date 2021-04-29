import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFarmerPageRoutingModule } from './list-farmer-routing.module';

import { ListFarmerPage } from './list-farmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFarmerPageRoutingModule
  ],
  declarations: [ListFarmerPage]
})
export class ListFarmerPageModule {}
