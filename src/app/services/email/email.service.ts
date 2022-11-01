import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}
    // https://0ffpeiwy24.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda //jaekim
    // https://12dwurj4sl.execute-api.us-east-1.amazonaws.com/default/contactFormLambda 

  sendEmail(data: Object): Observable<Object> {
    return this.http.post('https://12dwurj4sl.execute-api.us-east-1.amazonaws.com/default/contactFormLambda', data)   
  }
}
