function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudacao("Renato");

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
