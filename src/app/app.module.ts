import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StandingsComponent } from './components/standings/standings.component';
import { HeaderComponent } from './components/header/header.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule, MatSelectModule, MatFormFieldModule } from "@angular/material";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./services/app.interceptor";
import { StandingService } from "./services/standing.service";

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
