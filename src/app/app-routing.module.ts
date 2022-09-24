import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { EcosystemComponent } from './components/ecosystem/ecosystem.component';
import { SupportComponent } from './components/support/support.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ConnectComponent } from './components/connect/connect.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'ecosystem', component: EcosystemComponent },
  { path: 'support', component: SupportComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'termsofservice', component: TermsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      // {
      // scrollPositionRestoration: 'top',
      // }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
