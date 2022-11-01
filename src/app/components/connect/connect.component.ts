import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';
import { ColorSchemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit {
  contactUsForm: FormGroup;
  btnclick: boolean = false;
  buttonerror: boolean = false;
  buttonsuccess: boolean = false;
  constructor(private fb: FormBuilder, private emailService: EmailService, public colorSchemeService: ColorSchemeService) {
    this.createForm();
    this.colorSchemeService.load();
  }

  ngOnInit(): void {
    // console.log(this.contactUsForm.value.province)
  }

  createForm() {
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      organization: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', Validators.email],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      tellusmore: [''],
    });
  }
  btnclickEvent() {
    this.btnclick = !this.btnclick;
  }
  onSubmit(FormData) {
    // console.log(FormData)
    this.emailService.sendEmail(FormData).subscribe(
      (response) => {
        console.log('success');
        this.buttonsuccess = true;
        this.contactUsForm.reset();
      },
      (error) => {
        this.buttonerror = true;
        this.contactUsForm.reset();
        console.log(error);
      }
    );
  }
}
