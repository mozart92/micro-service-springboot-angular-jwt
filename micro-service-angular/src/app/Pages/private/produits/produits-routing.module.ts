import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitAvailibleComponent} from './produit-availible/produit-availible.component';
import {ProduitEmpruntComponent} from './produit-emprunt/produit-emprunt.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: ''
  },
  {
    path: '',
    component: ProduitAvailibleComponent
  },
  {
    path: 'emprunte',
    component: ProduitEmpruntComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
