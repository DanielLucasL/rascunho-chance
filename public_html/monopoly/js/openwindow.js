/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Window;
import {chance_jogador} from './chance_jogador.js'
function windowOpen(position) {
 this.position=integer(); 
if(chance_jogador.janelahabilitada===true){
Window = window.open(
"chancecard.html",
"chancecard", "width=300, height=350");
}
}
function windowClose() {   
         newWindow.close();   
   }

