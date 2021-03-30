import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ItemListComponent } from './views/item-list/item-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item', component: ItemListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }