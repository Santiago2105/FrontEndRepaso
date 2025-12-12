import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <--- OBLIGATORIO para conectar con Spring Boot
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <--- OBLIGATORIO para Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { AddList } from './components/rents/add-list/add-list';
import { List } from './components/rents/list/list';
import { ModulesModule } from './modules/modules-module';


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
    AppRoutingModule,
    HttpClientModule,        // <--- No olvides esto
    BrowserAnimationsModule, // <--- Ni esto
    ModulesModule,          // <--- Aquí están tus botones y tarjetas
    FormsModule,             // <--- Para [(ngModel)]
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
