import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageoneComponent} from "./pages/pageone/pageone.component";
import {IndexComponent} from "./pages/index/index.component";
import {AppComponent} from "./app.component";
import {UsersPageComponent} from "./pages/userspage/users-page.component";


const routes: Routes = [
  {path: 'pageone', component: PageoneComponent},
  {path: 'userslist', component: UsersPageComponent},
  {path: '', component: IndexComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
