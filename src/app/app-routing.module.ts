import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./modules/default/default.module').then(mod => mod.DefaultModule),
},
{
  path: 'productdetail',
  loadChildren: () => import('./modules/productdetails/productdetails.module').then(mod => mod.ProductdetailsModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
