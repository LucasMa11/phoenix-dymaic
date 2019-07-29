import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoenixBetaSaComponent } from './phoenix-beta-sa/phoenix-beta-sa.component';


const routes: Routes = [
  {
    path: '',
    component: PhoenixBetaSaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoenixBetaSaRoutingModule { }
