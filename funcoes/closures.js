// Closure é o escopo criado quando uma funçao é declarada
// Esse escopo permite a funçao acessar e manipular variaveis externas à funçao

// Contexto lexico em açao !

const x = 'Global';

function fora() {
    const x = 'local'
    function dentro() {
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())