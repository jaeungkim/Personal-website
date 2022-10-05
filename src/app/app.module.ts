//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import {
  NgcCookieConsentModule,
  NgcCookieConsentConfig,
} from 'ngx-cookieconsent';

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

//AUTH
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost', // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#000',
    },
    button: {
      background: '#80B6DE',
    },
  },
  theme: 'edgeless',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    'my-custom-layout': '{{messagelink}}{{compliance}}',
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}} 
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> and our 
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    message:
      'By using our site, you acknowledge that you have read and understand our',
    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: `${window.location.protocol}./privacy`,

    tosLink: 'Terms of Service',
    tosHref: `${window.location.protocol}./termsofservice`,
  },
};

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
    LogoutComponent,
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
    RecaptchaModule,
    RecaptchaFormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  // providers:[],
  bootstrap: [AppComponent],
})
export class AppModule {}
