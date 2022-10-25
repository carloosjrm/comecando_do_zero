//const data = {
//    dia : 12,
//    mes: 06,
//    ano: 1996
//};
//
//console.log(`${data.dia}/${data.mes}/${data.ano}`);

const nascimento = {
    dia: 10,
    mes: 12,
    ano: 1990,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(nascimento.exibir());