import { HttpBackend, HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { LoginAcesso, Token } from '../models/login/login-acesso';



import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class DownloadArquivoService {



  getData(): string {
    return this.dataAtualFormatada()
  }

  dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = data.getFullYear(),
      horas = new Date().getHours(),
      horasF = horas < 10 ? '0' + horas : horas,
      minutos = new Date().getMinutes(),
      minutosF = minutos < 10 ? '0' + minutos : minutos,
      segundos = new Date().getSeconds(),
      segundosF = segundos < 10 ? '0' + segundos : segundos
    return anoF + mesF + diaF + horasF + minutosF + segundosF
  }


  constructor(public httpClient: HttpClient, public httpClient2: HttpClient, handler: HttpBackend,private authService: AuthService,) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];



}


