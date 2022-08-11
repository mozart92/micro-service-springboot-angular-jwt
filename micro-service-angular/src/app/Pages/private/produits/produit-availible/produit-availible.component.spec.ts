import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAvailibleComponent } from './produit-availible.component';

describe('ProduitAvailibleComponent', () => {
  let component: ProduitAvailibleComponent;
  let fixture: ComponentFixture<ProduitAvailibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitAvailibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitAvailibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
