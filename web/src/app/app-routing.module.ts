import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ItemListView } from './views/item-list/item-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item', component: ItemListView }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }