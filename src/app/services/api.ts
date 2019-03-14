/**
 * Api para gerir informações do app
 * 
 * @module App/Services
 * @author Max Franco <maxcodefranco@gmail.com>
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

/**
 * Class para comunicação webservice
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * 
   * @param http Chamadas Http nativa do Angular
   * @param config Configurações do aplicativo
   */
  constructor(
    private http : HttpClient,
    private config : Config
  ) {

  }

  /**
   * Retorna url formatada para chamada com o webservice
   * 
   * ```
   * this.apiUrl('/promotions');
   * 
   * //output: "http://localhost:3000/promotions"
   * ```
   * 
   * @param url Path a ser consumida no servidor webservice
   */
  private apiUrl(url : string){
    return this.config.serverUrl+'/'+url;
  }

  /**
   * Realiza chamada HTTP com método "GET"
   * @param url
   */
  public get(url : string ){
    return this.http.get( this.apiUrl(url) );
  }


}
