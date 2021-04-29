import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleFarmerPageRoutingModule } from './single-farmer-routing.module';

import { SingleFarmerPage } from './single-farmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleFarmerPageRoutingModule
  ],
  declarations: [SingleFarmerPage]
})
export class SingleFarmerPageModule {}
