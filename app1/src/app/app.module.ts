import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { IndexComponent } from './pages/index/index.component';
import { UsersPageComponent } from './pages/userspage/users-page.component';
import { ContentfulUserService } from "./services/contentful-user/contentful-user.service";
import { ItemService } from "./services/item-service/item.service";

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    IndexComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentfulUserService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
