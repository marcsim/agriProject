import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/Models/Farmer.model';
import { FarmerService } from 'src/app/services/farmer.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-farmer',
  templateUrl: './list-farmer.page.html',
  styleUrls: ['./../farmer-list.scss'],
})
export class ListFarmerPage implements OnInit {

  public comp: IFarmerListComp;

  constructor(
    private fs: FarmerService,
  ) {}

  ngOnInit() {
    this.comp = {
      loading: false,
      data: null
    };
    this.initList();
  }

  public addFarmer(farmer: Farmer) {
    this.fs.createFarmer(farmer);
  }

  public deleteFarmer(id: string) {
    this.fs.deleteFarmer(id);
  }

  public update(farmer: Farmer) {
    this.fs.updateFarmer(farmer);
  }

  private initList() {
    this.comp.data = this.fs.getFarmers();
  }
}

interface IFarmerListComp {
  loading: boolean;
  data?: any;
}
