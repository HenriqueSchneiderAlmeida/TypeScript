// Exercicio TypeScript -- Henrique Schneider

function calculoMultiplica(peso: number, unidades: number): number {
    return peso * unidades;
}

const resultadoMultiplica = calculoMultiplica(300, 10);

//-----------------------

class PessoaSaudada {
    nomePS: string;
    tipo: string;

    constructor(nomeS: string, tipoS: string) {
        this.nomePS = nomeS;
        this.tipo = tipoS;  // Irmão, Pai, Amigo
    }

    dizOla(): string {
        return `Meu ${this.tipo} ${this.nomePS} diz olá para todos.`;
    }
}



const saudacao = {
    nome: "Lucas",
    tipo: ["Amigo", "Irmão", "Primo", "Colega", "Tio"]
}

function exibeSaudacao(nome: 'Joao', tipo:[1]) {
    console.log(`Olá meu ${saudacao.tipo[1]} ${saudacao.nome}`)
}

