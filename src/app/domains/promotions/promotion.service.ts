import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(
    private apiService : ApiService
  ) { 

  }

  getPromotions(){
    return this.apiService.get('promotions');
  }

}
