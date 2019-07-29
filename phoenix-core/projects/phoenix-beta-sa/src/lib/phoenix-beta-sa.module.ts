import { NgModule } from '@angular/core';
import { PhoenixBetaSaComponent } from './phoenix-beta-sa/phoenix-beta-sa.component';
import { CommonModule } from '@angular/common';
import { PhoenixBetaSaRoutingModule } from './phoenix-beta-sa-routing.module';




@NgModule({
  declarations: [PhoenixBetaSaComponent],
  imports: [
    CommonModule,
    PhoenixBetaSaRoutingModule
  ],
  exports: [PhoenixBetaSaComponent]
})
export class PhoenixBetaSaModule { }
