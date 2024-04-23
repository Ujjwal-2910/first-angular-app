import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header.component';
import { SiteHeaderComponent } from './ui/site-header.component';
import { SiteFooterComponent } from './ui/site-footer.component';
import { NotFoundComponent } from './ui/not-found.component';
import { SiteErrorComponent } from './ui/site-error.component';
import { HomeComponent } from './ui/home.component';
import { ProductsHomeComponent } from './products/products-home.component';
import { ProductsListComponent } from './products/products-list.component';
import { ProductsDetailComponent } from './products/products-detail.component';

// Decorator - NGModule
@NgModule({
  /* delaration - this section lists all the components and directives used/defined in the
   * application. It is a comma separated list of values*/
  declarations: [
    AppComponent,
    PageHeaderComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    NotFoundComponent,
    SiteErrorComponent,
    HomeComponent,
    ProductsHomeComponent,
    ProductsListComponent,
    ProductsDetailComponent
  ],
  /* imports - lists all the external modules that are required in this module */
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /* exports - list al the app module that will be available to
   * other external applications - optional */
  /* provider - lists all the services and pipes defined withing the application
   * and these services listedhere will be injected by Angular where ever required. */
  providers: [],
  /* bootstarp - only the top-most Module in Angular can define this section.
  -> No other Module within the application can define it.
  - */
  bootstrap: [AppComponent]
})
export class AppModule { }
