import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { NotFoundComponent } from './_commons/not-found/not-found.component';
import { HomePagesComponent } from './pages/home-page/home-pages.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductCardComponent } from './pages/product-page/product-card/product-card.component';
import { ProductListComponent } from './pages/product-page/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    HomePagesComponent,
    ProductPageComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
