import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(input: any) {
    return this.http
    // https://0ffpeiwy24.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda //jaekim
    // https://12dwurj4sl.execute-api.us-east-1.amazonaws.com/default/contactFormLambda 
      .post('https://0ffpeiwy24.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda', input,{observe: 'response'})
  }
}
