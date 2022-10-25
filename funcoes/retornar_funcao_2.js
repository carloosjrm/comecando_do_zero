function retorarUmaFuncao(){
    return function(){
        return function(){
            return " Boa Tarde !!"
        }
    }
}

console.log(retorarUmaFuncao);
console.log(retorarUmaFuncao());
console.log(retorarUmaFuncao()());
console.log(retorarUmaFuncao()()());