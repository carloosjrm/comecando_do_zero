const notas = [2, 3.4, 8, 7.3, 5.4, 10];
//  Sem o   callback
const notasBaixas1= []
for (let i in notas){
    if (notas[i]<7){
        notasBaixas1.push(notas[i])
    }
};

console.log(notasBaixas1);

// Com o callback

const notasBaixas2 = notas.filter(function(nota) {
    return nota <7; 
})
console.log(notasBaixas2);


const notasMenorQue7 = nota => nota < 7 ; 
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);


