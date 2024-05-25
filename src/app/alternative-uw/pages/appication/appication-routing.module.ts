import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppicationComponent } from './appication.component';

const routes: Routes = [
  {
    path: '',
    component: AppicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppicationRoutingModule { }
