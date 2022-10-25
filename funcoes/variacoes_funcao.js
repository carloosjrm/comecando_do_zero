// #1 : Função COM Parametro e COM Retorno.

function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é : ${resultado}`);
console.log(`O resultado final é: ${somar(30,56)}`);

//#2 Função COM Parametros e SEM Retorno.

function exibirMultiplicacao(a,b){
    console.log(a * b);
}

exibirMultiplicacao(10, 30);
exibirMultiplicacao(2, 4);

// #3 Função SEM Parametros e COM Retorno.
function retonarDataAtual(){
    return new Date();
}
console.log( retonarDataAtual());

//#4 Função SEM Parametros e SEM Retorno.
function exibirHoraAtual(){
    console.log(new Date().getHours());
}

exibirHoraAtual();