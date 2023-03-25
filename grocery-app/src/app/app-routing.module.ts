import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { CartComponent } from './front/cart/cart.component';
import { HomeComponent } from './front/home/home.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'front',
    loadChildren: () => import ('./front/front.module').then(u => u.FrontModule)
}, {
    path: 'cart',
    component: CartComponent
}, {
    path: '**',
    component: ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
