import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({

  providedIn: 'root'

})

export class ShareDataService {

  private shareData = new BehaviorSubject<any>({userId : 0, id: 0, title : '' , body : ''})

  constructor() { }

   sendData (data : any){
    this.shareData.next(data)

  }

  get receiveData (): Observable<any>{
    return this.shareData.asObservable()

  }

}
