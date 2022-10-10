import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  privacyId: string =  'privacyPolicy';
  privacyTitle: string = 'Privacy Policy';
  privacyContent: string = 'Lorem Ipsum';

  termsId: string = 'termsOfUse';
  termsTitle: string = 'Terms of Use';
  termsContent: string = 'Lorem Ipsum';

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
