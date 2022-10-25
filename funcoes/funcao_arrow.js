let dobro = function (a){
    return 2 * a
};   // Função normal

dobro = (a) =>{
    return 2 * a 
};  // Função Arrow 

dobro = (a) => 2 * a ; // Função Arrow com retorno implícito bem mais reduzida

console.log(dobro(Math.PI));



