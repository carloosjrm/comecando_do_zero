function criarData(dia, mes, ano) {
    return {
        dia, //Se o parametro for igual a chave, da pra fazer dessa forma !
        mes,
        ano,
        exibir() { // Posso tirar o ( : function{}) que irá funcionar igual !
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1=criarData(15,10,2022);
const d2=criarData(23,07,1945);
const d3=criarData(10,12,1990);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
