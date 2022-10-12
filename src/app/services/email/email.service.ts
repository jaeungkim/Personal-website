import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(input: any) {
    return this.http
      .post('https://0ffpeiwy24.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda', input,{observe: 'response'})
  }
}
