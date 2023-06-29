"use strict";
// Exercicio TypeScript -- Henrique Schneider
function calculoMultiplica(peso, unidades) {
    return peso * unidades;
}
const resultadoMultiplica = calculoMultiplica(300, 10);
//-----------------------
class PessoaSaudada {
    constructor(nomeS, tipoS) {
        this.nomePS = nomeS;
        this.tipo = tipoS; // Irmão, Pai, Amigo
    }
    dizOla() {
        return `Meu ${this.tipo} ${this.nomePS} diz olá para todos.`;
    }
}
const saudacao = {
    nome: "Lucas",
    tipo: ["Amigo", "Irmão", "Primo", "Colega", "Tio"]
};
function exibeSaudacao(nome, tipo) {
    console.log(`Olá meu ${saudacao.tipo[1]} ${saudacao.nome}`);
}
