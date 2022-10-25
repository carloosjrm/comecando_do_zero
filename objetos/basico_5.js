const cliente= {
    codigo: 12345,
    nome: 'Alice',
    vip: true,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 123,
        complemtento: 'Apto 101 Bloco 09',
        pontosRef: [
            {nome: ' Hospital central', muitoProximo: true},
            {nome : 'Iguatemi', muitoProximo: false}
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Yuri']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1].muitoProximo);