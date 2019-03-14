/**
 * Gerir informações de promoções pelo servidor.
 * 
 * @module App/Domains/Promotions
 * @author Max Franco <maxcodefranco@gmail.com>
 * 
 */
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api';

/**
 * Busca informações de promoções diretamente do servidor.
 * 
 * ```
 * class Example {
 *  promotions : Array;
 *  constructor (
 *    private promotionService = new PromotionService()
 *  ) { }
 * 
 *  public atualizarPromocoes (){
 *    this.promotionService.subscribe( promotions => {
 *      this.promotions = promotion;
 *    })
 *  }
 * }
 * ```
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  /**
   * Inicializa o serviço
   * @param apiService Objeto para chamadas api
   */
  constructor(
    private apiService : ApiService
  ) { 

  }

  /**
   * Busca lista de promoções via api
   * ```
   * this.getPromotions().subscribe( promotions : Promotion[] => {
   *  ...
   * })
   * ```
   */
  getPromotions(){
    return this.apiService.get('promotions');
  }

  /**
   * Retorna informações de uma promoção
   */
  getPromotion(id){
    return this.apiService.get('promotions/'+id);
  }

}
