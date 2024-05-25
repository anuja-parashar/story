import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlternativeUwComponent } from './alternative-uw.component';

const routes: Routes = [
  {
    path: '',
    component: AlternativeUwComponent,
    children:[
      {
        path:'list',
        loadChildren: () => import('./pages/appication/appication.module').then(m => m.AppicationModule)
      },
      {
        path:'details/:appId',
        loadChildren: () => import('./pages/appication/details/details.module').then(m => m.DetailsModule)
      },

  
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlternativeUwRoutingModule { }
