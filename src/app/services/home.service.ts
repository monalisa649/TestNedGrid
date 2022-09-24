import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataListI } from '../models/data-list.interface';


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

  public addItem (data : DataListI) {
    return this._http.post(`${environment.API}`,{data})
  }

  public editItem (id: number, data : DataListI) {
    return this._http.put(`${environment.API}/${id}`,{data})
  }



}

