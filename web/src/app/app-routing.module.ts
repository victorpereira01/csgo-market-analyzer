import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListComponent } from './components/list-container/list-container.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item', component: ListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }