import { NgModule } from '@angular/core';
import { PhoenixProdSaComponent } from './phoenix-prod-sa/phoenix-prod-sa.component';
import { CommonModule } from '@angular/common';
import { PhenixProdSaRoutingModule } from './phenix-prod-sa-routing.module';



@NgModule({
  declarations: [PhoenixProdSaComponent],
  imports: [
    CommonModule,
    PhenixProdSaRoutingModule
  ],
  exports: [PhoenixProdSaComponent]
})
export class PhoenixProdSaModule { }
