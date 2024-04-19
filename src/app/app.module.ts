import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header.component';

// Decorator - NGModule
@NgModule({
  /* delaration - this section lists all the components and directives used/defined in the
   * application. It is a comma separated list of values*/
  declarations: [
    AppComponent,
    PageHeaderComponent
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
