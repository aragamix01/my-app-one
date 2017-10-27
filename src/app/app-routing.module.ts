import { SuccessComponent } from './success/success.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', redirectTo: '/shopping' , pathMatch: 'full'},
    { path: 'shopping', component: ShoppingComponent },
    { path: 'success', component: SuccessComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
