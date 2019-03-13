import { Component, OnInit, Injectable } from '@angular/core';
import { Config } from '../../../config';

class Accordion {

  current : number = 0;
  select (index){
    this.current = index;
  }

}


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  serverUrl : string;
  faqAccord : Accordion;

  constructor(
    private config : Config
  ) {
    this.serverUrl = config.serverUrl;
    this.faqAccord = new Accordion;
  }

  ngOnInit() {
    
  }







  promotion = {
    "id": "comprou-ganhou",
    "meta-tags": [
      {
        "id": "site",
        "title": "Cadastre e concorra",
        "description": "Cadastre e concorra a um prêmio sensacional",
        "image": "http://localhost:3000/hightlight.jpg",
        "type": "site"
      },
      {
        "id": "facebook",
        "title": "Cadastre e concorra",
        "description": "Cadastre e concorra a um prêmio sensacional",
        "image": "http://localhost:3000/facebook.jpg",
        "type": "website"
        
      },
      {
        "id": "twitter",
        "title": "Cadastre e concorra",
        "description": "Cadastre e concorra a um prêmio sensacional",
        "image": "http://localhost:3000/twitter.jpg",
        "type": "@Hyperativa"
        
      }
    ],
    "title": "Promoção Você Comprou Ganhou!",
    "highlightTitle": "Compre e Ganhe!",
    "highlightText": "Faça seu cadastro e na compra já ganhe seu prêmio.",
    "highlightButtonText": "Cadastre Agora",
    "highlightButtonLink": "https://www.hyperativa.com.br",
    "highlightImage": "http://localhost:3000/hightlight.jpg",
    "stepsTitle": "Como Funciona",
    "steps": [
      {
        "title": "1",
        "desc": "Realize o cadastro na promoção."
      },
      {
        "title": "2",
        "desc": "Compre o item em qualquer de nossas lojas."
      },
      {
        "title": "3",
        "desc": "Pronto! Aguarde a apuração no final da promoção."
      }
    ],
    "calendarTitle": "Calendário",
    "calendarPeriod": "http://localhost:3000/calendar.png",
    "calendarDate": "01/12/2018 até 31/05/2019",
    "faqTitle": "Perguntas Frequentes",
    "faq": [
      {
        "question": "Quem está participando?",
        "answer": "<p>Todos os clientes que foram cadastrado já estão automaticamente participando da promoção. Para ganhar é necessário seguir as regras da promoção.</p><p>Importante: Você pode fazer seu cadastro no site em até 7 dias após a realização da mecanica promocional.</p><p>Para saber mais sobre a promoção, acesse o <a href=\"/regulamento\" data-ga=\"\" data-category=\"regulamento\" data-action=\"clique\" data-label=\"pergunta_12\"><u>Regulamento</u></a>.</p>"
      },
      {
        "question": "Como faço para participar da promoção",
        "answer": "<p>Realize o cadastro no site da promoção para poder concorrer aos prêmios</p>"
      },
      {
        "question": "Dúvidas, sugestões ou outros questionamentos?",
        "answer": "<p>Envie uma mensagem pelo <a href=\"/fale-conosco\" data-ga=\"\" data-category=\"faq\" data-action=\"clique\">Fale Conosco</a>.</p>"
      }
    ],
    "disclaimerText": "Promoção válida de 01/12/2018 até 31/05/2019 para todos os clientes que realizarem o cadastro na promoção. Para mais informações, consulte o Regulamento da promoção."
  }

}
