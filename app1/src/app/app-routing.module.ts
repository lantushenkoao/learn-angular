import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageoneComponent} from "./pageone/pageone.component";
import {IndexComponent} from "./index/index.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: 'pageone', component: PageoneComponent},
  {path: '', component: IndexComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
