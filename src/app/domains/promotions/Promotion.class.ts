/**
 * Classe de Promoção
 * 
 * @module App/Domains/Promotions;
 * @author Max Franco <maxcodefranco@gmail.com>
 */

import { MetaTags } from "./MetaTag.class";
import { FaqQuestion } from './FaqQuestion.class';

export class Promotion {

	/**
	 * ID da Promoção
	 */
	id : string;

	/**
	 * Lista de MetaTag
	 */
	"meta-tags" : MetaTags[];

	/**
	 * Título da Promoção
	 */
	title : string;

	/**
	 * Título de destaque da Promoção
	 */
	highlightTitle : string;

	/**
	 * Texto de destaque da Promoção
	 */
	highlightText : string;

	/**
	 * Texto do Botão de Destaque
	 */
	highlightButtonText : string;

	/**
	 * Link ao qual o Botão de Destaque irá encaminhar
	 */
	highlightButtonLink : string;

	/**
	 * Url da imagem da Promoção
	 */
	highlightImage : string;

	/**
	 * Título da secção de Etapas da Promoção
	 */
	stepsTitle: string;

	/**
	 * Lista de Etapas da Promoção
	 */
	steps : Step[];

	/**
	 * Título do calendário
	 */
	calendarTitle : string;
	/**
	 * Url da imagem representativa de calendário
	 */
	calendarPeriod : string;
	
	/**
	 * Texto descritivo de duração da promoção
	 */
	calendarDate : string;
	
	/**
	 * Título para secção de dúvidas frequentes
	 */
	faqTitle : string;

	/**
	 * Lista de Questões e Respostas
	 */
	faq: FaqQuestion[];

	/**
	 * Informações legais da promoção
	 */
	disclaimerText : string
		

}