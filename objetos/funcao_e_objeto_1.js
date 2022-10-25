function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function () {
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
