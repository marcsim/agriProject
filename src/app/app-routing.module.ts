import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./Auth/signin/signin.module').then( m => m.SigninPageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./Auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'single-farmer',
    loadChildren: () => import('./Farmer-list/single-farmer/single-farmer.module').then( m => m.SingleFarmerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list-farmer',
    loadChildren: () => import('./Farmer-list/list-farmer/list-farmer.module').then( m => m.ListFarmerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list-product',
    loadChildren: () => import('./Product-list/list-product/list-product.module').then( m => m.ListProductPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'single-product',
    loadChildren: () => import('./Product-list/single-product/single-product.module').then( m => m.SingleProductPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'form-product',
    loadChildren: () => import('./Product-list/form-product/form-product.module').then( m => m.FormProductPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
