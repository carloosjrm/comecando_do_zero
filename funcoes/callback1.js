const fabricantes = ["Mercedes" , "BMW" , "Audi"];

function imprimi(nome, indice){
    console.log(`${indice +1}. ${nome}`)
};

fabricantes.forEach(imprimi);

fabricantes.forEach(fabricante => console.log(fabricante));