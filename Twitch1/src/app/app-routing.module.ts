import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component'
import {BrowseComponent} from './browse/browse.component';
import {StoreComponent} from './store/store.component';

const routes: Routes = [
  {path: '', redirectTo:'', pathMatch: 'full'},
  {path: 'browse', component: BrowseComponent} ,
  {path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
