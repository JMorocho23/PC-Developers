import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { CountoModule }  from 'angular2-counto';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TechsComponent } from './components/techs/techs.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CountersComponent } from './components/counters/counters.component';
import { MarketComponent } from './components/market/market.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    TechsComponent,
    AboutComponent,
    ServicesComponent,
    CountersComponent,
    MarketComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule.forRoot(),
    CountoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
