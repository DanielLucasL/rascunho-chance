/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {windowClose} from './openwindow.js'
function chance_jogador(){
    this.janelahabilitada = Boolean();
}
function habilitajanela(){
    chance_jogador.janelahabilitada=true;
} 
function desabilitajanela(){
    chance_jogador.janelahabilitada=false;
    windowClose();
} 

