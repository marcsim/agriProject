import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFarmerPageRoutingModule } from './list-farmer-routing.module';

import { ListFarmerPage } from './list-farmer.page';
import { FarmerService } from 'src/app/services/farmer.service';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFarmerPageRoutingModule
  ],
  providers: [FarmerService, AngularFirestore],
  declarations: [ListFarmerPage]
})
export class ListFarmerPageModule {}
