import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./prod-wrapper-security-advisor/prod-wrapper-security-advisor.module').then(mod =>
      mod.ProdWrapperSecurityAdvisorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdRoutingModule { }
