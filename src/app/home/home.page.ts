import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Farmer } from '../Models/Farmer.model';
import { FarmerService } from '../services/farmer.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public form: FormGroup;

  constructor(
    private fs: FarmerService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public addFarmer(farmer: Farmer) {
    this.fs.createFarmer(farmer);
  }

  public onSubmit(form) {
    console.log('form', form.value);
    const farmer = new Farmer();
    farmer.numSiret = form.value.numSiret;
    farmer.address = null;//farmer.address;
    farmer.isBio = form.value.isBio;
    farmer.products = null;//farmer.products;
    farmer.specialite = null;//farmer.specialite;
    this.addFarmer(farmer);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      numSiret: '',
      isBio: false
    });
  }

}
