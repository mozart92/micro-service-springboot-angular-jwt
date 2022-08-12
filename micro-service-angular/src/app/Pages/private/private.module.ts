import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BaseLayoutComponent} from '../../loyout/base-layout/base-layout.component';
import {HeaderComponent} from '../../loyout/base-layout/component/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreateProductComponent} from './create-product/create-product.component';


@NgModule({
  declarations: [BaseLayoutComponent, HeaderComponent, CreateProductComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PrivateModule { }
