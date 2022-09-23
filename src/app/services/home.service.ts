import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }


  public getData () {
    return this._http.get(environment.API)
  }

  public removeItem (id : number) {
    return this._http.delete(`${environment.API}/${id}`)
  }
}
