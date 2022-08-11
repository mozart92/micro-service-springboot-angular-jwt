import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitEmpruntComponent } from './produit-emprunt.component';

describe('ProduitEmpruntComponent', () => {
  let component: ProduitEmpruntComponent;
  let fixture: ComponentFixture<ProduitEmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitEmpruntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
