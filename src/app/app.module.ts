//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

//Components
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { EcosystemComponent } from './components/ecosystem/ecosystem.component';
import { SupportComponent } from './components/support/support.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ConnectComponent } from './components/connect/connect.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    SolutionsComponent,
    EcosystemComponent,
    SupportComponent,
    ConnectComponent,
    ResourcesComponent,
    FooterComponent,
    NotFoundComponent,
    ModalComponent,
    PrivacyComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
    NgChartsModule,
    HttpClientModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
