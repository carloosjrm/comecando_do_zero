function retorarUmaFuncao(){

    function bomDia(){
        return "Bom dia !!";
    }
    return bomDia;
}

console.log(retorarUmaFuncao);
console.log(retorarUmaFuncao());
console.log(retorarUmaFuncao()());

const umaFuncao = retorarUmaFuncao();
console.log(umaFuncao());
