import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpreq: HttpClient) {}

  sendEmail(input: any) {
    return this.httpreq
      .post('https://0ffpeiwy24.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda', input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              console.log('success');
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      );
  }
}
