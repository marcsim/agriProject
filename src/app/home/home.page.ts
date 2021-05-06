import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from '../Models/Farmer.model';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';
import { FarmerService } from '../services/farmer.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public form: FormGroup;
  public data: any = null;
  public category = [{name: 'cat1'},{ name: 'cat2'},{ name: 'cat3'}];

  constructor(
    private fs: FarmerService,
    private cs: CategoryService,
    private as: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.initCategories();
  }

  public signOut(): void {
    this.as.signOut();
  }

  public signUp(): void {
    void this.router.navigate(['/signup']);
  }

  public signIn(): void {
    void this.router.navigate(['/signin']);
  }

  public addFarmer(farmer: Farmer) {
    this.fs.createFarmer(farmer);
  }
  //Todo : mettre dans le service
  public onSubmit(form) {
    console.log('form', form.value);
    const farmer = new Farmer();
    farmer.numSiret = form.value.numSiret;
    farmer.address = null;//farmer.address;
    farmer.isBio = form.value.isBio;
    farmer.products = null;//farmer.products;
    for(const cat of form.value.specialite) {
      const spe = this.cs.getCategory(cat);
      console.log(spe);
      console.log(this.cs.getCategory(cat));
      //farmer.products.push(this.cs.getCategory(cat));
    //   if (cat.name === this.cs.getCategory(cat.name).)
    //   farmer.specialite.push(cat)
    }

    farmer.specialite = null;//farmer.specialite;
    //this.addFarmer(farmer);
  }

  private initCategories() {
    this.data = this.cs.getCategories();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      numSiret: '',
      isBio: false,
      specialite: null
    });
  }
}
