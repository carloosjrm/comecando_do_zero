// NÃO É LEGAL TER CODIGO DUPLICADO ! REUSAR SIM É UMA BOA ESTRATEGIA !

const d1 = {
    dia: 15,
    mes: 10,
    ano: 2020,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};


const d2 = {
    dia: 23,
    mes: 07,
    ano: 1945,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};


const d3 = {
    dia: 10,
    mes: 12,
    ano: 1990,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());