import { NgModule } from '@angular/core';
import { PhoenixProdSaComponent } from './phoenix-prod-sa/phoenix-prod-sa.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PhoenixProdSaComponent],
  imports: [
    CommonModule
  ],
  exports: [PhoenixProdSaComponent]
})
export class PhoenixProdSaModule { }
