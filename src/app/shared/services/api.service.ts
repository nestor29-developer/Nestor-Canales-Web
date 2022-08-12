import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  customError: any;
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api_url;
  }

  private formatErrors(error: any) {
    this.customError = {
      status: error.status,
      statusText: error.statusText,
      message: error.error.message,
      code: error.error.code,
    };

    switch (error.status) {
      case 404:
        break;
      default:
        break;
    }
    return throwError(this.customError);
  }

  get(path: any, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${this.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
}
