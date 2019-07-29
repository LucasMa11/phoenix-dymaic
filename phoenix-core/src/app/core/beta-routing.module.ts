import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./beta-wrapper-security-advisor/beta-wrapper-security-advisor.module').then(mod =>
      mod.BetaWrapperSecurityAdvisorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetaRoutingModule { }
