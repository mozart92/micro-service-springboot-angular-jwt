import { Component, OnInit } from '@angular/core';
import {Produit} from '../../../../modele/produit';
import {ALL_PRODUIT} from '../../../../datasStatic/dataStatic';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-produit-emprunt',
  templateUrl: './produit-emprunt.component.html',
  styleUrls: ['./produit-emprunt.component.scss']
})
export class ProduitEmpruntComponent implements OnInit {

  listProduit: Array<Produit> = ALL_PRODUIT;

  constructor() { }

  ngOnInit(): void {
  }

}
