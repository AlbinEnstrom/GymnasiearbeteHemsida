import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HelpComponent } from './views/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { StartComponent } from './views/start/start.component';
import { HomeGridComponent } from './components/home-grid/home-grid.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    HeaderComponent,
    StartComponent,
    HomeGridComponent,
    HomeCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
