import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent implements OnInit {
  contactUsForm: FormGroup;
  btnclick: boolean = false;
  constructor(private fb: FormBuilder) {
    this.createForm();
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
      province: ['', Validators.required],
    });
  }
  btnclickEvent() {
    this.btnclick = !this.btnclick;
  }
  onSubmit() {
    console.log(this.contactUsForm);
  }
}
