import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../Pages/home-page/home-page.component';
import { HostingComponent } from '../Pages/hosting/hosting.component';
import { ContactComponent } from '../Pages/contact/contact.component';
import { NotFoundComponent } from '../Pages/not-found/not-found.component';
import { PricingComponent } from '../Pages/pricing/pricing.component';
import { AboutComponent } from '../Pages/about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Hosting', component: HostingComponent },
  { path: 'Prices', component: PricingComponent },
  { path: 'News', component: NotFoundComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'News' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
// export const appRouting = RouterModule.forRoot(routes);
