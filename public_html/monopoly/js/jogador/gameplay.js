/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {jogador} from "../exception/FundosInsuficientes.js";
function gameplay(){
    this.jogadores = [];
    this.number=integer(); 
}
function add(){
if(number===null){
    number=1;
}
else{
number=+1;
}
this.jogadores[number-1] = jogador();
}
