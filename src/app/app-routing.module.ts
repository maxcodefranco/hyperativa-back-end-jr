import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { DetailsComponent as PromotionDetailsComponent } from './views/promotions/details/details.component';
import { IndexComponent as PromotionsIndexComponent } from './views/promotions/index/index.component';

const routes: Routes = [
  {
    path:'',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: PromotionsIndexComponent
      },
      {
        path:':promotion',
        component: PromotionDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
