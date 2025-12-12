import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Header } from './components/header/header';

import { AddList } from './components/rents/add-list/add-list';
import { List } from './components/rents/list/list';


@NgModule({
  declarations: [
    App,
    Login,
    Home,
    Header,
    AddList,
    List,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
