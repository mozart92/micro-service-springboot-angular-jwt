import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {Produit} from '../../../../modele/produit';
import {ALL_PRODUIT} from '../../../../datasStatic/dataStatic';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-produit-availible',
  templateUrl: './produit-availible.component.html',
  styleUrls: ['./produit-availible.component.scss']
})
export class ProduitAvailibleComponent implements OnInit {

  listProduit: Array<Produit> = ALL_PRODUIT;

  constructor() { }

  ngOnInit(): void {
  }

}
