import { NgModule } from '@angular/core';
import { PhoenixBetaSaComponent } from './phoenix-beta-sa/phoenix-beta-sa.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PhoenixBetaSaComponent],
  imports: [
    CommonModule
  ],
  exports: [PhoenixBetaSaComponent]
})
export class PhoenixBetaSaModule { }
