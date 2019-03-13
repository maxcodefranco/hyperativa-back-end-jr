import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000';

  constructor(
    private http : HttpClient
  ) {

  }

  private apiUrl(url){
    return this.baseUrl+'/'+url;
  }

  get (url){
    return this.http.get( this.apiUrl(url) );
  }


}
