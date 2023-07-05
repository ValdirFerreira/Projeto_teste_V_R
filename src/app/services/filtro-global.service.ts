import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Session } from '../pages/home/guards/session';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FiltroGlobalService {

  private _dtExpires: string;


  public filtroMobileAtivo: boolean = false;

  public filtroEmitter: boolean = true;



  private environmentAccess: string[] = ['DEV', 'HML', 'PROD'];

  constructor(public httpClient: HttpClient, public httpClient2: HttpClient, handler: HttpBackend, private session: Session) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];


  iniciarSessaoUser() {
    this.DtExpires = moment().add(30, 'minutes').format();
  }


  public validEmitter() {
    if (!this.filtroEmitter) {
      this.filtroEmitter = true;
    }
    else {
      this.filtroEmitter = false;
    }
    return this.filtroEmitter;
  }



  //get;set DtExpires
  set DtExpires(dtExpires: string) {

    if (this.environmentAccess.includes(environment.local))
      localStorage.setItem('dtExpires', dtExpires);

    this._dtExpires = dtExpires;
  }

  get DtExpires() {
    if (this.environmentAccess.includes(environment.local))
      this._dtExpires = localStorage.getItem('dtExpires') || '';

    return this._dtExpires;
  }



}