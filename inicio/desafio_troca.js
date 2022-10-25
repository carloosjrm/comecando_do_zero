 let a = 7;
 let b = 94;
// Criar uma variavel temporaria , 
//para alterar o valor de uma das variaveis e 
//atribuir a uma delas 
// [a,b] [b,a] + pratico

let temp = a ; 
 a = b; 
 b = temp;

console.log("O valor de a é : " +  a);
console.log ("O valor de b é : " +  b );