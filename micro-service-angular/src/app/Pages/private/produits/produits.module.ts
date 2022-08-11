import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitAvailibleComponent } from './produit-availible/produit-availible.component';
import { ProduitEmpruntComponent } from './produit-emprunt/produit-emprunt.component';
import {ProduitsComponent} from './produits.component';

@NgModule({
  declarations: [
    ProduitsComponent,

  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }
