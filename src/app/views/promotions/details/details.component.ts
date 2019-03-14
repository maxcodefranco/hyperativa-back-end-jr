/**
 * Página de Detalhes de uma Promoção
 * 
 * @module App/Views/Promotions/Detail
 * @author Max Franco <maxcodefranco@gmail.com>
 */

import { Component, OnInit } from '@angular/core';
import { Config } from '../../../config';
import { Accordion } from './acordion.controller';
import { Promotion } from '../../../domains/promotions/Promotion.class';
import { ActivatedRoute } from '@angular/router';
import { PromotionService } from 'src/app/domains/promotions/promotion.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  /**
   * Promotion ID
   */

  promotionId : number;

  /**
   * Url do webservice
   */
  serverUrl : string;

  /**
   * Controle do efeito Accordion para Perguntas Frequentes
   */
  faqAccord : Accordion;

  /**
   * Inicializa o componente de Detalhes de Promoção
   * @param config Objeto de configuração do app
   */
  constructor(
    private config : Config,
    private route : ActivatedRoute,
    private promotionService : PromotionService
  ) {
    this.serverUrl = this.config.serverUrl;
    this.faqAccord = new Accordion;
  }

  /**
   * Captura os parâmetros de rota
   */
  ngOnInit(){
    this.route.params.subscribe( params => {
      this.promotionId = params.promotion;
      this.fetchPromotion();
    });
  }


  /**
   * Busca informações da promoção
   */
  fetchPromotion(){
    this.promotionService.getPromotion(this.promotionId).subscribe( (promotion : Promotion) => {
      this.promotion = promotion;
    })
  }









  promotion : Promotion;

}
