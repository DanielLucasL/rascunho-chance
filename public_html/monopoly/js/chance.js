/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Jogador} from './jogador/Jogador.js';
import {gameplay} from './jogador/gameplay.js';
import {desabilitajanela} from './chance_jogador.js';
function chance(number, position){
    this.number = integer();
    this.position=integer();
}
if (number=== 0){
    Jogador.prototype.receber(200);
}
if (number === 1){
// Row the dice connection not implemented yet.
}
if (number === 2){
//Chance=8=>17 casas
//Chance=23=>17 casas
//Chance=37=>37 casas
    if(position===8){
        Jogador.mover(17);
    }
    if (position===23){
      Jogador.mover(2);
    }
    if (position===37){
    Jogador.mover(28);
    }
}
if (number === 3){
 //Ir para St.Place.
//Chance=8=>4 casas 
//Chance=23=>3 casas 
//Chance=37=>9 casas 
    if(position===8){
        Jogador.mover(8);
    }
    if (position===23){
      Jogador.mover(29);
    }
    if (position===37){
    Jogador.mover(15);
    }
 //Conta como uma secunda jogada seguida então as regras the propriedade se aplicam.
Jogador.receber(200);
}
if (number === 4){
Jogador.receber(200);
}
if (number === 5 || number === 16){
    //Ir para rodovia mais proxima.
//Chance=8=>8 casas Pennsylvania
//Chance=23=>3 casas B & O
//Chance=37=>9 casas Reading
    if(position===8){
        Jogador.mover(8);
    }
    if (position===23){
      Jogador.mover(3);
    }
    if (position===37){
    Jogador.mover(9);
    }
 //Conta como uma secunda jogada seguida então as regras the companhia se aplicam.
}
if (number === 6){
//Ir para a companhia mais próxima.
//Chance=8=>5 casas Eletric
//Chance=23=>6 casas Water
//Chance=37=>16 casas Eletric
    if(position===8){
        Jogador.mover(5);
    }
    if (position===23){
      Jogador.mover(6);
    }
    if (position===37){
    Jogador.mover(9);
    }
}
if (number === 7){
Jogador.mover(-3);
}
if (number === 8){
Jogador.receber(50);
}
if (number === 9){
Jogador.receber(150);
}
if (number === 10){
Jogador.pagar(15);
}
if (number === 11){
Jogador.pagar(Jogador.carteira.casas.size()*25);
Jogador.pagar(Jogador.carteira.hoteis.size()*100);
}
if (number === 12){
    for(x=0; x>gameplay.number; x++){
    Jogador.pagar(50);
    gameplay.jogadores[x].receber(50);
    }
}
if (number === 13){
Jogador.prender();
}
if (number === 14){
//Jail free not implemented.
}
desabilitajanela();


