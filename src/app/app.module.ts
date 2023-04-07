import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [AppComponent, ButtonLinkComponent, SvgComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
