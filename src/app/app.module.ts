import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThanksComponent } from './thanks/thanks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WCAGComponent } from './my-projects/WCAG/wcag/wcag.component';
import { TerminalComponent } from './shared/terminal/terminal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollTopButtonComponent } from './shared/scroll-top-button/scroll-top-button.component';
import { NewsReportComponent } from './my-projects/news-report/news-report.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ThanksComponent,
    PageNotFoundComponent,
    HomePageComponent,
    WCAGComponent,
    TerminalComponent,
    ScrollTopButtonComponent,
    NewsReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
