import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashBoardFourService {

  constructor(public httpClient: HttpClient,
    public httpClient2: HttpClient,
    private handler: HttpBackend,
    private authService: AuthService,) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];

  
 
  
}
