import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { SvgComponent } from './components/svg/svg.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ButtonLinkComponent, SvgComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
