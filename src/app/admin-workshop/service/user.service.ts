import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Userclient } from 'src/app/auth/shared/userclient.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  REST_API: string = 'https://backend-pelf.onrender.com';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }

   // Add
  MyProfile(id: string): Observable<any> {
    let API_URL = `${this.REST_API}/auth/userworshop/63d55427fff0d046f97d31fe`;
    return this.httpClient.get(API_URL)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  GetAllclient(): Observable<any>{
    return this.httpClient.get(`${this.REST_API}/api/cli/custumer`);
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
