import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(input: any) {
    return this.http
      .post('https://12dwurj4sl.execute-api.us-east-1.amazonaws.com/default/contactFormLambda', input,{observe: 'response'})
  }
}
