import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ChipsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
