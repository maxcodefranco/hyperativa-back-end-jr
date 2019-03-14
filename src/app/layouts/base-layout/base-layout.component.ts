/**
 * @module App/Layouts/BaseLayout
 * @author Max Franco <maxcodefranco@gmail.com>
 */
import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/domains/promotions/promotion.service';
import { Promotion } from 'src/app/domains/promotions/Promotion.class';
import { Router } from '@angular/router';

/**
 * Layout padrão para as páginas
 */
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  public promotions : Promotion[];

  constructor(
    private promotionsService : PromotionService,
    private router : Router
  ) {}

  ngOnInit(){
    this.fetchPromotions();
  }

  fetchPromotions(){
    this.promotionsService.getPromotions().subscribe( (promotions : Promotion[]) =>{
      let promotion = promotions[0];
      this.promotions = promotions;
      if(promotion)
        this.router.navigateByUrl(promotion.id)
    })
  }

  selectPromotion(event){
    this.router.navigateByUrl(event.target.value);
  }

}
