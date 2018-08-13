import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropCalcComponent } from './prop-calc/prop-calc.component';

const routes: Routes = [
  {path: '', component: PropCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
