const t1 = false;  
const t2 = false;

let comprarTv50 = (t1 && t2);// AND
console.log("Vamos comprar a Tv 50'' ? : " + comprarTv50 ); 

let comprarTv32 = (t1 !== t2);// XOR
console.log("Vamos comprar a Tv 32'' ? : " + comprarTv32 ); 

let tomarSorvete = t1 || t2;// OR
console.log("Vamos comprar sorvete'' ? : " + tomarSorvete ); 

let ficarEmCasa = !tomarSorvete;// NOT
console.log("Vamos ficar em casa ?  " + ficarEmCasa );