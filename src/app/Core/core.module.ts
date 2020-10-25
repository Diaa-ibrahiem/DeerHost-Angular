import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../Shared/Component/footer/footer.component';
import { HeaderNavComponent } from '../Shared/Component/header-nav/header-nav.component';
import { ChoosePlanComponent } from '../Shared/Component/choose-plan/choose-plan.component';
import { ChooseRightHostComponent } from '../Shared/Component/choose-right-host/choose-right-host.component';
import { PriceDiscountComponent } from './Component/price-discount/price-discount.component';
import { ClientNumberComponent } from './Component/client-number/client-number.component';
import { AskQuestionComponent } from '../Shared/Component/ask-question/ask-question.component';
import { BreadCrumbComponent } from '../Shared/Component/bread-crumb/bread-crumb.component';
import { HomeHeaderComponent } from './Component/home-header/home-header.component';
import { RegisterDomainComponent } from './Component/register-domain/register-domain.component';
import { WebHostPlanComponent } from './Component/web-host-plan/web-host-plan.component';
import { ContactInfoComponent } from './Component/contact-info/contact-info.component';
import { SubscribeFormComponent } from './Component/subscribe-form/subscribe-form.component';
import { OurTeamComponent } from './Component/our-team/our-team.component';
import { WelcomeTetraComponent } from './Component/welcome-tetra/welcome-tetra.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutComponent } from './Pages/about/about.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HostingComponent } from './Pages/hosting/hosting.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { HostSolutionComponent } from './Component/host-solution/host-solution.component';
import { MonthlyYearlyPlanComponent } from './Component/monthly-yearly-plan/monthly-yearly-plan.component';
import { ErrorCompComponent } from './Component/error-comp/error-comp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderNavComponent,
    ChoosePlanComponent,
    ChooseRightHostComponent,
    HomeHeaderComponent,
    RegisterDomainComponent,
    ClientNumberComponent,
    PriceDiscountComponent,
    AskQuestionComponent,
    BreadCrumbComponent,
    WebHostPlanComponent,
    ContactInfoComponent,
    SubscribeFormComponent,
    OurTeamComponent,
    WelcomeTetraComponent,
    HomePageComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    HostingComponent,
    PricingComponent,
    HostSolutionComponent,
    MonthlyYearlyPlanComponent,
    ErrorCompComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderNavComponent,
    ChoosePlanComponent,
    ChooseRightHostComponent,
    HomeHeaderComponent,
    RegisterDomainComponent,
    ClientNumberComponent,
    PriceDiscountComponent,
    AskQuestionComponent,
    BreadCrumbComponent,
    WebHostPlanComponent,
    ContactInfoComponent,
    SubscribeFormComponent,
    OurTeamComponent,
    WelcomeTetraComponent,
    HomePageComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    HostingComponent,
    PricingComponent,
  ],
  providers: [],
})
export class CoreModule {}
