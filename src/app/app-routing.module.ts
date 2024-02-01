import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from './thanks/thanks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WCAGComponent } from './my-projects/WCAG/wcag/wcag.component';
import { NewsReportComponent } from './my-projects/news-report/news-report.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: "WCAG", component: WCAGComponent },
  { path: "news", component: NewsReportComponent },
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
