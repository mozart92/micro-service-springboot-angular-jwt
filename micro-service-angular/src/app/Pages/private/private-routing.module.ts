import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../public/login/login.component';
import {RegisterUserComponent} from '../public/register-user/register-user.component';
import {BaseLayoutComponent} from '../../loyout/base-layout/base-layout.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ProduitAvailibleComponent} from './produits/produit-availible/produit-availible.component';
import {ProduitEmpruntComponent} from './produits/produit-emprunt/produit-emprunt.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: '',
    redirectTo: "full"
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import("../private/produits/produits.module").then(m => m.ProduitsModule)
      },
      {
        path: 'create-produit',
        component: CreateProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
