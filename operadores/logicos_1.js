let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;


let resultadoE = " #1 (And) Vai pro shopping? "; 
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOu = "#2 - (OR)  Vai pro shopping ? ";
resultadoOu += estaEnsolarado || carroEstaNaGaragem;        
console.log(resultadoOu);

console.log(true !== true  );
console.log(true !== false );
console.log(false !== true );
console.log(false !== false);

console.log( " Nao verdadeiro :"+ !true);
console.log( " Nao Falso : " +  !false);
