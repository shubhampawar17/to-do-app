import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogicComponent } from './logic/logic.component';
const routes: Routes = [
  {
    path: '', component:LogicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
