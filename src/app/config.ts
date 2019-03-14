/**
 * Configurações da página
 * 
 * @module App
 */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Config {
    /**
     * Url do servidor webservices / api
     */
    public serverUrl = 'http://localhost:3000'

}