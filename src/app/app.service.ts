import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class Apiservice {
  url: string = 'http://localhost:8080/';
  headers = new HttpHeaders().set(
    'Content-type', 'application/json');

  constructor(private http: HttpClient) {

  }

  login(username, password): Observable<any> {
    return this.http.get<any>(this.url + 'checklogindetails' + '/' + username + '/' + password, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      })
    )
  }

  register(username, custname, password): Observable<any> {
    return this.http.post<any>(this.url + 'registerusers' + '/' + username + '/' + custname + '/' + password, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      })
    )
  }

  CreateData(data): Observable<any> {
    return this.http.post<any>(this.url + 'createuserdetails' + '/', data)
      .pipe(map((res: Response) => {
        return res || {}
      })
      )
  }


  getbookingdetails(transid): Observable<any> {
    return this.http.get<any>(this.url + 'viewuserdetails' + '/' + transid + '/', { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {}
        })
      )
  }



  Update(transid, data): Observable<any> {
    return this.http.put(
      this.url + 'updateuserdetails' + '/' + transid, data, { headers: this.headers }
    ).pipe(
      map((res: Response) => {
        return res || {}
      })
    )
  }



  delete(transid): Observable<any> {
    return this.http.put<any>(
      this.url + 'deleteuserdetails' + '/' + transid + '/', { headers: this.headers }
    ).pipe(
      map((res: Response) => {
        return res || {}
      })
    )
  }


  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
