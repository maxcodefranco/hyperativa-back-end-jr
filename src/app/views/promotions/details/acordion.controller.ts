/**
 * @module App/Views/Promotions/Detail;
 * 
 * ```
 * const accordion = new Accordion();
 * 
 * accordion.select(1)
 * // o valor de {accordion.current} é 1
 * ```
 * 
 * @author Max Franco <maxcodefranco@gmail.com>
 */
export class Accordion {
    /**
     * Index sendo visualizado no momento
     */
    current : number = 0;

    /**
     * Seleciona o index a ser visualizado
     * @param index Index a ser selecionado
     */
    select (index : number){
        this.current = index;
    }

}