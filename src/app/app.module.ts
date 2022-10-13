//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { EmailService } from './services/email/email.service';
import { MatModule } from './mat.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { SettingChangeColorSchemeComponent } from './components/setting-change-color-scheme/setting-change-color-scheme.component';
//AUTH
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';

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
    LoginComponent,
    SettingChangeColorSchemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [AuthService, AuthGuard, EmailService],
  // providers:[],
  bootstrap: [AppComponent],
})
export class AppModule {}
