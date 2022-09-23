import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  privacyId: string =  'privacyPolicy';
  privacyTitle: string = 'Privacy Policy';
  privacyContent: string = 'Lorem Ipsum';

  termsId: string = 'termsOfUse';
  termsTitle: string = 'Terms of Use';
  termsContent: string = 'Lorem Ipsum';

  constructor() {}

  ngOnInit(): void {}
}
