import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataListI } from '../models/data-list.interface';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http: HttpClient) { }


  public getData() {
    return this._http.get(environment.API)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('upps! Ha ocurrido un error', err);
          return throwError(() => err);
        })
      )

  }

  public removeItem(id: number | undefined) {
    return this._http.delete(`${environment.API}/${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('upps! Ha ocurrido un error', err);
          return throwError(() => err);
        })
      )

  }

  public addItem(data: DataListI) {
    return this._http.post(`${environment.API}`, { data })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('upps! Ha ocurrido un error', err);
          return throwError(() => err);
        })
      )

  }

  public editItem(id: number, data: DataListI) {
    return this._http.put(`${environment.API}/${id}`, { data })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('upps! Ha ocurrido un error', err);
          return throwError(() => err);
        })
      )

  }

}

